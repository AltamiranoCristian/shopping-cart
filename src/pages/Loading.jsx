import react from '@/assets/react.svg'

export const Loading = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <img src={react} className="h-1/4 animate-spin" alt="logo" />
        </div>
    )
}
