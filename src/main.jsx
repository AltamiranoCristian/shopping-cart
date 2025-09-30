import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router} from "react-router";
import {PrimeReactProvider} from 'primereact/api'
import 'primereact/resources/themes/lara-light-pink/theme.css'
import 'primeicons/primeicons.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PrimeReactProvider value={{ ripple: true}}>
            <Router>
                <App/>
            </Router>
        </PrimeReactProvider>
    </StrictMode>
)
