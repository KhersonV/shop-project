import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'

interface ITitleProps {
    text: string
}

const Title = (props: ITitleProps) => {
    return <h1>Hello {props.text}</h1>
}

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content text="lorem" text2="lorem2" year={1990} />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
