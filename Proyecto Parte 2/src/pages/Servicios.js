
import '../styles/components/pages/Servicios.css';
import { NavLink } from "react-router-dom";
import React from 'react';
const Servicios = (props)=> {
    return (
  
        <div className="containerServicios">

            <div className="columnServicios">
                <div className="cardServicios">
                    <div className="cardServicios2">
                        <h3>REPARACION</h3>
                        <p> Lorem ipsum dolor, sit amet consectetur</p>
                        <NavLink to="/contacto" className={({isActive})  => isActive ? "activo" : undefined}> <input type="submit" value="Contactar"/></NavLink>
                    </div>
                </div>
            </div>

            <div className="columnServicios">
                <div className="cardServicios">
                    <div className="cardServicios2">
                        <h3 >MANTENIMIENTO</h3>
                        <p> Lorem ipsum dolor, sit amet consectetur</p>
                        <NavLink to="/contacto" className={({isActive})  => isActive ? "activo" : undefined}> <input type="submit" value="Contactar"/></NavLink>
                    </div>
                </div>
            </div>
            <div className="columnServicios">
                <div className="cardServicios">
                    <div className="cardServicios2">
                        <h3 >INSTALACION</h3>
                        <p> Lorem ipsum dolor, sit amet consectetur    </p> 
                        <NavLink to="/contacto" className={({isActive})  => isActive ? "activo" : undefined}> <input type="submit" value="Contactar"/></NavLink>
                        
                </div>
            </div>
            </div>

        </div>
    
  );
 }



export default Servicios;

