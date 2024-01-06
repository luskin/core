import React, { useContext } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "@tanstack/react-router"
import router from "./router"
import { QueryClientProvider } from "@tanstack/react-query"
import Config from "./config"
import "@repo/ui/global.css"

function App() {
  return (
    <QueryClientProvider client={Config.queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
