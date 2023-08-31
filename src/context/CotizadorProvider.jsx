import React, { useState, createContext } from 'react';
import {
    calcularMarca, obtenerDiferenciaYear,
    calcularPlan, formatearDinero
} from '../helpers'; // Asegúrate de importar las funciones correctamente

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    };

    // Función para obtener la diferencia en años entre el año actual y el año proporcionado
    /*   export function obtenerDiferenciaYear = (year, callback) => {
           const currentYear = new Date().getFullYear();
           const diferencia = currentYear - parseInt(year, 10);
           return callback ? callback(diferencia) : diferencia;
       };
    */// Función flecha para obtener la diferencia en años entre el año actual y el año proporcionado
    /*    const obtenerDiferenciaYear = (year) => {
            const currentYear = new Date().getFullYear();
            const diferencia = currentYear - parseInt(year, 10);
            return diferencia;
        };
        obtenerDiferenciaYear()
    */

    const cotizarSeguro = () => {
        let resultado = 2000;

        /*const diferencia = obtenerDiferenciaYear(datos.year);
    
        resultado -= ((diferencia * 3) * resultado) / 100;*/
        resultado = obtenerDiferenciaYear(datos.year);

        resultado *= calcularMarca(datos.marca);

        resultado *= calcularPlan(datos.plan);

        resultado = formatearDinero(resultado);

        setCargando(true);

        setTimeout(() => {
            setResultado(resultado);
            setCargando(false);
        }, 3000);
    };

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    );
};

export { CotizadorProvider };
export default CotizadorContext;


{/*
    //    console.log(e.target.name)
    //    console.log(e.target.value)


    //const [modal, setModal] = useState(false)
    /**
                    hola,
                    fnHolaMundo */
    /**
                    modal,
                    cambiarState 
        const cambiarState = () => {
            setModal(!modal)

const hola = "hola mundo
    const fnHolaMundo = () => {
        console.log("Hola mundo desde una funcion")
    }
*/ }

{/**import { useState, createContext } from 'react'
import {
    calcularMarca, obtenerDiferenciaYear,
    calcularPlan, formatearDinero
} from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        let resultado = 2000

        const diferencia = obtenerDiferenciaYear
            (datos.year)

        resultado -= ((diferencia * 3) * resultado) / 100

        resultado *= calcularMarca(datos.marca)

        resultado *= calcularPlan(datos.plan)

        resultado = formatearDinero(resultado)

        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 3000);
    }
    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext */}