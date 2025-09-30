import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet } from "react-router"
export function Layout() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
                <Outlet />
            <Footer />
        </main>
    )
}
