import { Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login.jsx"
import { Register } from "./components/auth/Register.jsx"
import { Authorized } from "./components/views/Authorized.jsx"
import { AppViews } from "./components/views/AppViews.jsx"

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*" element={
          <Authorized>
            <AppViews />
          </Authorized>
        }
      />
    </Routes>
  )
}