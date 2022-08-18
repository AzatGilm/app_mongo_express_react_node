import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Navbar = ()=> {

  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    navigate("/")
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }} >
        <span className="brand-logo">Сокращение ссылок</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">
              Создать
            </NavLink>
          </li>
          <li>
            <NavLink to="/links">
              Ссылки
            </NavLink>
          </li>
          <li><a onClick={logoutHandler} href="/">Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}