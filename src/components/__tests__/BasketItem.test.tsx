import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import backgroundImage from "../../assets/test/Counter-Strike.jpg"
import getCroppedImageUrl from "../../services/image-url"
import BasketItem from "../BasketItem"
import useGameItem from "./../../hooks/useGameItem"
import useBasketStore from "./../../store/basketStore"

jest.mock("../../hooks/useGameItem")
const mockUseGameItem = useGameItem as jest.MockedFunction<any>

jest.mock("../../store/basketStore")
const mockBasketStore = useBasketStore as jest.MockedFunction<
  typeof useBasketStore
>

jest.mock("../../services/image-url")
const mockGetCroppedImageUrl = getCroppedImageUrl as jest.MockedFunction<
  typeof getCroppedImageUrl
>

describe("Basket item component", () => {
  test.only("should render game name", () => {
    mockUseGameItem.mockReturnValue({
      data: {
        id: 4291,
        name: "Counter-Strike: Global Offensive",
        background_image: backgroundImage,
      },
    })
    mockBasketStore.mockReturnValue(jest.fn())
    mockGetCroppedImageUrl.mockReturnValue("")
    render(<BasketItem gameId={1} price={100} />)
    const pElement = screen.getByText(/Counter-Strike: Global Offensive/i)
    expect(pElement).toBeInTheDocument()
  })
})
