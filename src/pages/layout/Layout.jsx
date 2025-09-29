import { Header } from "./Header"
import { Footer } from "./Footer"
export function Layout({ children }) {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
                {children}
            <Footer />
        </main>
    )
}
