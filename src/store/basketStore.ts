import { create } from "zustand"

interface BasketItem {
  gameId: number
  price: number
}

interface BasketStore {
  basket: BasketItem[] | []
  addItem: (basketItem: BasketItem) => void
  deleteItem: (gameId: number) => void
}

const useBasketStore = create<BasketStore>((set) => ({
  basket: [],
  addItem: (basketItem) =>
    set((store) => {
      const fendedItem = store.basket.find(
        (item) => item.gameId === basketItem.gameId
      )
      if (!fendedItem) return { basket: [...store.basket, basketItem] }
      return store
    }),
  deleteItem: (gameId) =>
    set((store) => ({
      basket: store.basket.filter((item) => item.gameId !== gameId),
    })),
}))

export default useBasketStore
