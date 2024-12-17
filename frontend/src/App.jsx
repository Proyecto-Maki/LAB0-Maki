import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Personas from "./pages/Personas"
import Mascotas from "./pages/Mascotas"
import Regiones from "./pages/Regiones"
import Departamentos from "./pages/Departamentos"
import Municipios from "./pages/Municipios"
import Viviendas from "./pages/Viviendas"

function Logout(){
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterandLogout(){
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path = "/"
            element = {
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/logout" element = {<Logout />} />
          <Route path = "/register" element = {<RegisterandLogout />} />
          <Route path = "/personas" element = {<Personas />} />
          <Route path = "/mascotas" element = {<Mascotas />} />
          <Route path = "/regiones" element = {<Regiones />} />
          <Route path = "/departamentos" element = {<Departamentos />} />
          <Route path = "/municipios" element = {<Municipios />} />
          <Route path = "/viviendas" element = {<Viviendas />} />
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
