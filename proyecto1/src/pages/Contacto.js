import '../styles/components/pages/Contacto.css';

import React from 'react';
const Contacto = (props)=> {
    return (
      <div className="Contacto">
        <div className="divContacto">
  <form action="">
    <label for="nombre" >Nombre</label>
    <input type="text" name="nombre" placeholder="Nombre"></input>

    <label for="apellido">Apellido</label>
    <input type="text" name="lastname" placeholder="Apellido"></input>
    <label for="telefono">Numero Telefonico</label>
    <input type="number"  name="telefono" placeholder="Ingrese su numero de telefono"></input>
    <label for="motivo">Motivo</label>
    <select name="motivo">
      <option value="reparacion">Reparacion</option>
      <option value="mantenimiento">Mantenimiento</option>
      <option value="instalacion">Instalacion</option>
    </select>
 

    <input type="submit" value="Contactar"></input>
  </form>
  </div>
       </div>
  );
 }



export default Contacto;

