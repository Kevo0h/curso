import '../../styles/components/layout/Nav.css';


import { NavLink } from "react-router-dom";
import React from 'react';

const Nav = (props)=> {
return (
    <nav className="containerNav">

 <ul>
    <li  >
        <NavLink to="/inicio" className={({isActive})  => isActive ? "activo" : undefined}> INICIO </NavLink> 
     </li>
    <li>
    <NavLink to="/servicios" className={({isActive})  => isActive ? "activo" : undefined}> SERVICIOS</NavLink>
    </li>
    <li>
    <NavLink to="/nosotros" className={({isActive})  => isActive ? "activo" : undefined}> NOSOTROS</NavLink>
    </li>
    <li>
    <NavLink to="/contacto" className={({isActive})  => isActive ? "activo" : undefined}> CONTACTO</NavLink>
    </li>
 </ul>

</nav>
);

} 
export default Nav;