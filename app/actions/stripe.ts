'use server'

import { getStripe } from '@/lib/stripe'
import { COMMISSARY_PACKAGES, calculateFees } from '@/lib/data'

interface CheckoutItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CheckoutMetadata {
  inmateId: string
  inmateName: string
  facility: string
  state: string
  phone?: string
  packageName?: string
}

// Start checkout session for commissary orders
export async function startCommissaryCheckout(
  items: CheckoutItem[],
  metadata: CheckoutMetadata
) {
  // Validate items server-side
  const validatedLineItems = items.map((item) => {
    const pkg = COMMISSARY_PACKAGES.find((p) => p.id === item.id)
    if (!pkg) {
      throw new Error(`Package with id "${item.id}" not found`)
    }
    // Use server-side price, not client-side
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: pkg.name,
          description: `Commissary package for ${metadata.inmateName}`,
        },
        unit_amount: pkg.price * 100, // Convert to cents
      },
      quantity: item.quantity,
    }
  })

  // Calculate subtotal from server-validated prices
  const subtotal = items.reduce((sum, item) => {
    const pkg = COMMISSARY_PACKAGES.find((p) => p.id === item.id)
    return sum + (pkg?.price ?? 0) * item.quantity
  }, 0)

  // Calculate fees
  const fees = calculateFees(subtotal)

  // Add service fee as a line item
  validatedLineItems.push({
    price_data: {
      currency: 'usd',
      product_data: {
        name: 'Service Fee',
        description: 'Processing and delivery fee',
      },
      unit_amount: Math.round(fees.serviceFee * 100),
    },
    quantity: 1,
  })

  const session = await getStripe().checkout.sessions.create({
    ui_mode: 'embedded' as any,
    redirect_on_completion: 'never',
    line_items: validatedLineItems,
    mode: 'payment',
    metadata: {
      type: 'commissary',
      inmateId: metadata.inmateId,
      inmateName: metadata.inmateName,
      facilityName: metadata.facility,
      state: metadata.state,
      phone: metadata.phone || '',
      packageName: metadata.packageName || '',
    },
    payment_intent_data: {
      metadata: {
        type: 'commissary',
        inmateId: metadata.inmateId,
        inmateName: metadata.inmateName,
        facilityName: metadata.facility,
        state: metadata.state,
        phone: metadata.phone || '',
        packageName: metadata.packageName || '',
      },
    },
  })

  if (!session.client_secret) {
    throw new Error('Stripe session did not return a client_secret')
  }
  return session.client_secret
}

// Start checkout session for deposits
export async function startDepositCheckout(
  amount: number,
  metadata: CheckoutMetadata
) {
  // Validate amount
  if (amount < 10 || amount > 300) {
    throw new Error('Deposit amount must be between $10 and $300')
  }

  // Calculate fees
  const fees = calculateFees(amount)

  const session = await getStripe().checkout.sessions.create({
    ui_mode: 'embedded' as any,
    redirect_on_completion: 'never',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Inmate Account Deposit',
            description: `Deposit to account for ${metadata.inmateName}`,
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Service Fee',
            description: 'Processing fee',
          },
          unit_amount: Math.round(fees.serviceFee * 100),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    metadata: {
      type: 'deposit',
      depositAmount: amount.toString(),
      inmateId: metadata.inmateId,
      inmateName: metadata.inmateName,
      facilityName: metadata.facility,
      state: metadata.state,
      phone: metadata.phone || '',
    },
    payment_intent_data: {
      metadata: {
        type: 'deposit',
        depositAmount: amount.toString(),
        inmateId: metadata.inmateId,
        inmateName: metadata.inmateName,
        facilityName: metadata.facility,
        state: metadata.state,
        phone: metadata.phone || '',
      },
    },
  })

  if (!session.client_secret) {
    throw new Error('Stripe session did not return a client_secret')
  }
  return session.client_secret
}

// Start checkout session for donations
export async function startDonationCheckout(amount: number, phone?: string) {
  if (amount < 5) {
    throw new Error('Minimum donation amount is $5')
  }

  const session = await getStripe().checkout.sessions.create({
    ui_mode: 'embedded' as any,
    redirect_on_completion: 'never',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donation to LockedIn Systems',
            description: 'Supporting families of incarcerated individuals',
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    metadata: {
      type: 'donation',
      phone: phone || '',
    },
    payment_intent_data: {
      metadata: {
        type: 'donation',
        phone: phone || '',
      },
    },
  })

  if (!session.client_secret) {
    throw new Error('Stripe session did not return a client_secret')
  }
  return session.client_secret
}
