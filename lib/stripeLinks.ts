export type StripeCommissaryLink = {
  name: string
  price: number
  url: string
}

export type StripeStandaloneLink = {
  name: string
  url: string
}

export const STRIPE_LINKS = {
  commissary: [
    {
      name: "Essential Care Pack",
      price: 20,
      url: "https://buy.stripe.com/cNicN51IPdaAgHvdcudEs06",
    },
    {
      name: "Daily Needs Snack Pack A",
      price: 20,
      url: "https://buy.stripe.com/14A00j9bh5I8aj7b4mdEs03",
    },
    {
      name: "Daily Needs Snack Pack B",
      price: 20,
      url: "https://buy.stripe.com/cNi3cv739gmM1MB0pIdEs04",
    },
    {
      name: "Approved Commissary Pack A",
      price: 20,
      url: "https://buy.stripe.com/cNibJ15Z5b2s76V6O6dEs02",
    },
    {
      name: "Approved Commissary Pack B",
      price: 20,
      url: "https://buy.stripe.com/28E8wPgDJfiI76V0pIdEs01",
    },
    {
      name: "Facility Standard Pack",
      price: 20,
      url: "https://buy.stripe.com/14AcN59bh0nO1MB0pIdEs00",
    },
  ] satisfies StripeCommissaryLink[],

  donation: {
    name: "Mighty Success Recovery Inc. Donations",
    url: "https://buy.stripe.com/8x2eVdbjp9YobnbegydEs05",
  } satisfies StripeStandaloneLink,

  deposit: {
    name: "Complete Deposit",
    url: "https://buy.stripe.com/14AcN59bh0nO1MB0pIdEs00",
  } satisfies StripeStandaloneLink,

  /** Default commissary checkout when no package-specific payment link applies */
  checkout: {
    name: "Proceed to Payment",
    url: "https://buy.stripe.com/bJe14n87db2s76V2xQdEs07",
  } satisfies StripeStandaloneLink,
}
