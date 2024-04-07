/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'



export const AjaxComponent = () => {

    const [ usuarios, setUsuarios ] = useState([]);

    const [ cargando, setCargando ] = useState(true);

    // Genirico / basico:
    // const getUsuariosEstaticos = () => {
    //     setUsuarios([
    //         {
    //             "id": 7,
    //             "email": "michael.lawson@reqres.in",
    //             "first_name": "Michael",
    //             "last_name": "Lawson",
    //             "avatar": "https://reqres.in/img/faces/7-image.jpg"
    //         },
    //         {
    //             "id": 8,
    //             "email": "lindsay.ferguson@reqres.in",
    //             "first_name": "Lindsay",
    //             "last_name": "Ferguson",
    //             "avatar": "https://reqres.in/img/faces/8-image.jpg"
    //         },
    //         {
    //             "id": 9,
    //             "email": "tobias.funke@reqres.in",
    //             "first_name": "Tobias",
    //             "last_name": "Funke",
    //             "avatar": "https://reqres.in/img/faces/9-image.jpg"
    //         },
    //         {
    //             "id": 10,
    //             "email": "byron.fields@reqres.in",
    //             "first_name": "Byron",
    //             "last_name": "Fields",
    //             "avatar": "https://reqres.in/img/faces/10-image.jpg"
    //         },
    //         {
    //             "id": 11,
    //             "email": "george.edwards@reqres.in",
    //             "first_name": "George",
    //             "last_name": "Edwards",
    //             "avatar": "https://reqres.in/img/faces/11-image.jpg"
    //         },
    //         {
    //             "id": 12,
    //             "email": "rachel.howell@reqres.in",
    //             "first_name": "Rachel",
    //             "last_name": "Howell",
    //             "avatar": "https://reqres.in/img/faces/12-image.jpg"
    //         },
    //     ]);
    // }

    // const getUsuariosAjaxPms = () => {
    //     fetch("https://reqres.in/api/users?page=1")
    //         .then(respuesta => respuesta.json())
    //         .then(
    //             resultado_final => {
    //                 setUsuarios(resultado_final.data);
    //                 console.log(usuarios)
    //             },
    //             error => {
    //                 console.log(error);
    //             })
    // }

    const getUsuariosAjasAW = async () => {
        setTimeout(async () => {
            // alert("Hola")
            // ejecutar el codigo en ves de mostrar el alert:
            const peticion = await fetch("https://reqres.in/api/users?page=1");
            const { data } = await peticion.json();

            setUsuarios(data);
            setCargando(false);
        }, 5000);


    }

    useEffect(() => {
        // getUsuariosEstaticos();
        // getUsuariosAjaxPms();
        getUsuariosAjasAW();
    }, [])

    // condicion:
    if (cargando === true) {
        // Cuando todo esta cargando:
        return (
            <div className='cargando'>
                cargando datos...
            </div>
        );

    } else {
        // Cuando todo a ido bien.
        return (
            <div>
                <h2> Listado de usuarios via Ajax</h2>
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            console.log(usuario);
                            return (<li key={usuario.id}>
                                <img src={usuario.avatar} width="20" />
                                &nbsp;
                                {usuario.first_name} {usuario.last_name}
                            </li>);
                        })
                    }

                </ol>
            </div>
        )
    }
}
