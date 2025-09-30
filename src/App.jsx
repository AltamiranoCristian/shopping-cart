import { Routes, Route } from 'react-router'
import { CartProvider } from "@/context/CartProvider";
import { Home } from './pages/Home.jsx'
import { NotFound } from "@/pages/NotFound.jsx";
import { Layout } from './pages/layout/Layout.jsx';
import { ProductDetails } from './pages/ProductDetails.jsx';
import { ScrollToTop } from './components/common/ScrollToTop.js';

function App() {

    return (
        <CartProvider>
            <ScrollToTop/>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Home />} />
                    <Route path='/products/:id' element={<ProductDetails />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </CartProvider>
    )
}

export default App;