import { useState } from "react";
import { Link } from "react-router";
import react from '@/assets/react.svg'
import { Cart } from "@/components/Cart";
import { Button } from "primereact/button";
import { useCart } from "@/hooks/useCart"
import { Badge } from "primereact/badge";

export function Header() {
    const { totalItems } = useCart();
    const [visible, setVisible] = useState(false);

    
    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-lg px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between py-4 lg:px-8">
                    <Link to='/' className="flex items-center gap-2">
                        <img src={react} alt="logo" className="h-8 w-auto" />
                        <h1 className="text-2xl">Virtual <span className="text-cyan-300">Shop</span></h1>
                    </Link>
                    <div className="flex gap-x-12">
                        <Button onClick={() => setVisible(!visible)} className="px-4 py-2 rounded-lg space-x-2 transition duration-350 hover:bg-white/20 border border-white/50 hover:text-yellow-300" icon='pi pi-shopping-cart'>
                            <Badge value={totalItems} severity='primary'></Badge>
                        </Button>
                    </div>
                </nav>
            </header>
            <Cart visible={visible} setVisible={setVisible} />
        </>
    )
}
