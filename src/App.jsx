import { CotizadorProvider } from './context/CotizadorProvider'
import AppSeguro from "./components/AppSeguro"

function App() {
    return (
        <CotizadorProvider>
            <AppSeguro />
        </CotizadorProvider>
    )
}

//<h1>App</h1>
export default App