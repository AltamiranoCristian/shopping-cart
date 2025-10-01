import { Link } from "react-router"
export function NotFound({message}) {

    return (
        <section className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-9xl font-bold">Error</h1>
            <p>{message ?? 'Unknown Error'}</p>
            <Link to='/' className="bg-gradient-to-br from-cyan-500 to-green-500 px-4 py-2 rounded-xl text-white transition-colors duration-300 hover:bg-gradient-to-tl hover:from-pink-500 hover:to-purple-500">Go to Home</Link>
        </section>
    )
}