import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruevasComponent = () => {

  const [ usuario, setUsuario ] = useState("Andres Felipe");
  const [ fecha, setFecha ] = useState("06-04-2024")

  const [ contador, setContador ] = useState(0);

  const modUsuario = e => {
    setUsuario(e.target.value);

  };

  const cambiarFecha = e => {
    // setFecha(new Date().toLocaleDateString());
    setFecha(Date.now());
  }

  // Funcion anonima:
  // Solo se ejecuta una vez, solo al cargar el componente:
  useEffect(() => {
    console.log("Ha habido un cambio de usuario");
  }, []);

  // Se ejecuta solo si cambia el usuario:
  useEffect(() => {

    setContador(contador + 1);
    console.log("Has modificado el usuario:" + contador);

  }, [ fecha, usuario ]);

  return (
    <div>
      <h1>El efecto - Hook UseEffect</h1>
      <strong >{usuario}</strong>
      <strong className={contador >= 10 ? 'label label-green' : 'label'}>{fecha}</strong>

      {/* <form> */}
      <p>
        <input
          type='text'
          onChange={modUsuario}
          placeholder='cambia el nombre' />
        <button onClick={cambiarFecha}>Cambiar Fecha</button>
      </p>
      {usuario === "ANDRES" && <AvisoComponent />}
      {/* {contador >= 20 && <AvisoComponent />} */}

      {/* </form> */}

    </div>
  )
}

export default PruevasComponent
