import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
      <div>ErrorPage</div>
      {isRouteErrorResponse(error)
        ? "This page does not exist."
        : "An unexpected error occurred."}
    </>
  )
}

export default ErrorPage
