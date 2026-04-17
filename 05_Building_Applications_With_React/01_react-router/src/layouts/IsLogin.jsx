import { useNavigate, Navigate, Outlet } from "react-router-dom"

function IsLogin({isAuth}) {
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default IsLogin