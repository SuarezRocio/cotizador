import Formulario from "../components/Formulario"
import Spinner from "./Spinner"
import Resultado from "./Resultado"
import useCotizador from "../hooks/useCotizador"
//import { useContext } from "react"
//import CotizadorContext from "../context/CotizadorProvider"
//import React from 'react'
//useContext(CotizadorContext)
const AppSeguro = () => {

    const { cargando } = useCotizador()

    // const { modal } = useCotizador()
    // console.log(modal)
    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl 
                font-black">Cotizador de Seguros de Auto</h1>
            </header>
            <main className="bg-white md:w-2/3 lg:w2/4 
            mx-auto shadow rounded-lg p-10">
                <Formulario />
                {cargando ? <Spinner /> : <Resultado />}
            </main>
        </>
    )
}
// <p>Contenido Principal</p>
export default AppSeguro