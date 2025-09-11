import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface CartState {
  cart: string[]
  updateCart: (newCart: string[]) => void
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [] as string[],
      updateCart: (newCart: string[]) => set({ cart: newCart }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default useCartStore
