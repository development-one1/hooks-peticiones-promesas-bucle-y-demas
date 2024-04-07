import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        // Cuando el componente se monta:
        alert("El componente AvisoComponent està montado !!");

        // Cuando el componente se desmonta:
        return () => {
            alert("Componte DESMONTADO")
        }

    }, []) // Se ejecuta una vez porque le paso el array vacio

    return (
        <div>
            <hr />
            <h3>Saludos Andres ¿Que tal estas?</h3>
            {/* <h3>Hemos superado los 20 cambios</h3> */}
            <button onClick={e => {
                alert("Bienvenido !!")
            }}>
                Mostrar Alerta
            </button>
        </div>
    )
}
