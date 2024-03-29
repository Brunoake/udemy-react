import { Link, NavLink } from "react-router-dom"

import "./NavBar.css"

const Navbar = () => {
  return (
    <div>
        {/* <Link to="/">Home</Link>
        <Link to="/contact">Contatos</Link>
         */}
         <NavLink to="/" className={({isActive}) =>(isActive ? "active": "")}>Home   </NavLink>
         <NavLink to="/contact"  className={({isActive}) =>(isActive ? "active": "")}>    Contact</NavLink>
    </div>
  )
}

export default Navbar