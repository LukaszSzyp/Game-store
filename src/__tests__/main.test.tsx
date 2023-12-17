import "@testing-library/jest-dom"
import { renderHook } from "@testing-library/react"
import { RouterProvider } from "react-router-dom"
import router from "../routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
})

interface Props {
  children: ReactNode
}

// select testing - describe.only describe.skip
describe("Main app", () => {
  test("renders the main page", async () => {
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(() => <RouterProvider router={router} />, {
      wrapper,
    })

    expect(result).toBeTruthy()
  })
})
