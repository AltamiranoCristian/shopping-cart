import * as React from "react"

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    // eslint-disable-next-line no-unused-vars
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('error catched: ', error, info)
    }

    render() {
        if(this.state.hasError)
            return this.props.fallback
        return this.props.children
    }
}