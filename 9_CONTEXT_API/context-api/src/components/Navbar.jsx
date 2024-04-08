import { Link, NavLink } from "react-router-dom"

import "./NavBar.css"

const Navbar = () => {
  return (
    <div>
         <NavLink to="/" className={({isActive}) =>(isActive ? "active": "")}>Home   </NavLink>
         <NavLink to="/contact"  className={({isActive}) =>(isActive ? "active": "")}>    Contact</NavLink>
    </div>
  )
}

export default Navbar