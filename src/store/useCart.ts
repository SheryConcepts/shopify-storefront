import { create } from 'zustand'
interface State {
  // cart:Cart
  total_Quantity: number | undefined
}
interface Actions {
  updateQuantity: (quantity: number | undefined) => void
  //   getCart: (id: string | undefined) => Promise<void>
  //   clearCart: () => void
}

const INITIAL_STATE: State = {
  total_Quantity: 0,
}

export const useCartStore = create<State & Actions>((set, get) => ({
  total_Quantity: INITIAL_STATE.total_Quantity,
  updateQuantity: async (quantity) => {
    set((state) => ({
      total_Quantity: quantity,
    }))
  },
  //   getCart: async (cartId) => {
  //     if (cartId) {

  //       set({ total_Quantity: cart?.totalQuantity })
  //       return
  //     }

  //     return set(() => ({
  //       total_Quantity: 0,
  //     }))
  //   },
}))
