import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

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
  /**
   * CONFIG
   */
  beforeEach(() => {
    mockUseGameItem.mockReturnValue({
      data: {
        id: 4291,
        name: "Counter-Strike: Global Offensive",
        background_image: backgroundImage,
      },
    })
    mockBasketStore.mockReturnValue(jest.fn())
    mockGetCroppedImageUrl.mockReturnValue("")
  })

  /**
   * TESTS
   */

  test("Should render game name", () => {
    render(<BasketItem gameId={1} price={100} />)
    const pElement = screen.getByText(/Counter-Strike: Global Offensive/i)
    expect(pElement).toBeInTheDocument()
  })

  test("Should render game image", () => {
    render(<BasketItem gameId={1} price={100} />)
    const imgElement = screen.getByRole("img")
    expect(imgElement).toBeInTheDocument()
  })

  test("Should render PriceBox component", () => {
    render(<BasketItem gameId={1} price={100} />)
    const componentPriceBoxElement = screen.getByText(/100/)
    expect(componentPriceBoxElement).toBeInTheDocument()
  })

  test("Should render delete icon button", () => {
    render(<BasketItem gameId={1} price={100} />)
    const deleteButton = screen.getByRole("button")
    const spanElement = deleteButton.firstChild
    expect(spanElement?.textContent).toBe("delete")
  })

  test("Should change color when hover to red delete icon button", () => {
    render(<BasketItem gameId={1} price={100} />)
    const deleteButton = screen.getByRole("button")
    fireEvent.focus(deleteButton)
    expect(deleteButton).toHaveStyle("color: red")
  })
})
