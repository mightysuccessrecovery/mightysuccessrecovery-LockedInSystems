"use client"

import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from "react"

// Session timeout in milliseconds (10 minutes)
const SESSION_TIMEOUT = 10 * 60 * 1000

export interface SelectedState {
  code: string
  name: string
}

export interface SelectedFacility {
  id: string
  name: string
  address: string
}

export interface SelectedPackage {
  id: string
  name: string
  price: number
  description: string
  image?: string
  paymentLink?: string | null
  priceId?: string
}

export interface SelectedInmate {
  id: string
  firstName: string
  lastName: string
  gender: string
  dob: string
  facility: string
  state: string
}

interface CartContextType {
  selectedState: SelectedState | null
  selectedFacility: SelectedFacility | null
  selectedPackage: SelectedPackage | null
  selectedInmate: SelectedInmate | null
  setSelectedState: (state: SelectedState | null) => void
  setSelectedFacility: (facility: SelectedFacility | null) => void
  setSelectedPackage: (pkg: SelectedPackage | null) => void
  setSelectedInmate: (inmate: SelectedInmate | null) => void
  clearAll: () => void
  clearSelection: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedState, setSelectedState] = useState<SelectedState | null>(null)
  const [selectedFacility, setSelectedFacility] = useState<SelectedFacility | null>(null)
  const [selectedPackage, setSelectedPackage] = useState<SelectedPackage | null>(null)
  const [selectedInmate, setSelectedInmate] = useState<SelectedInmate | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [lastActivity, setLastActivity] = useState<number>(Date.now())

  const clearSelection = useCallback(() => {
    setSelectedPackage(null)
  }, [])

  const clearAll = useCallback(() => {
    setSelectedState(null)
    setSelectedFacility(null)
    setSelectedPackage(null)
    setSelectedInmate(null)
  }, [])

  // Reset the timeout whenever there's activity
  const resetTimeout = useCallback(() => {
    setLastActivity(Date.now())
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    // Only set timeout if there's something in the cart
    if (selectedState || selectedFacility || selectedInmate || selectedPackage) {
      timeoutRef.current = setTimeout(() => {
        clearAll()
      }, SESSION_TIMEOUT)
    }
  }, [selectedState, selectedFacility, selectedInmate, selectedPackage, clearAll])

  // Set up timeout when cart contents change
  useEffect(() => {
    resetTimeout()
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [selectedState, selectedFacility, selectedInmate, selectedPackage, resetTimeout])

  // Listen for user activity to reset timeout
  useEffect(() => {
    const handleActivity = () => {
      if (selectedState || selectedFacility || selectedInmate || selectedPackage) {
        resetTimeout()
      }
    }

    // Listen for clicks, key presses, and mouse movements
    window.addEventListener('click', handleActivity)
    window.addEventListener('keypress', handleActivity)
    window.addEventListener('scroll', handleActivity)

    return () => {
      window.removeEventListener('click', handleActivity)
      window.removeEventListener('keypress', handleActivity)
      window.removeEventListener('scroll', handleActivity)
    }
  }, [selectedState, selectedFacility, selectedInmate, selectedPackage, resetTimeout])

  return (
    <CartContext.Provider
      value={{
        selectedState,
        selectedFacility,
        selectedPackage,
        selectedInmate,
        setSelectedState,
        setSelectedFacility,
        setSelectedPackage,
        setSelectedInmate,
        clearAll,
        clearSelection,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
