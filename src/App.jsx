import { Routes, Route } from 'react-router'
import { CartProvider } from "@/context/CartProvider";
import { Home } from './pages/Home.jsx'
import { NotFound } from "@/pages/NotFound.jsx";
import { Layout } from './pages/layout/Layout.jsx';
import { ProductDetails } from './pages/ProductDetails.jsx';

function App() {

    return (
        <CartProvider>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Home />} />
                    <Route path='/products/:id' element={<ProductDetails />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Layout>
        </CartProvider>
    )
}

export default App;