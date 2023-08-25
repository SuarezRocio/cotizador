import useCotizador from "../hooks/useCotizador";

const Error = () => {
    const { error } = useCotizador()

    return (
        <div className="border text-center border-red-400 bg-red-100
        py-3">
            <p>{error}</p>
        </div>
    )
}

export default Error;