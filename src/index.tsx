import React from 'react'
import ReactDOM from 'react-dom/client'

interface ITitleProps {
    text: string
}

type ContentProps = {
    text: string
    text2: string
    year: number
}

const Title = (props: ITitleProps) => {
    return <h1>Hello {props.text}</h1>
}

const Content = (props: ContentProps) => {
    return (
        <React.Fragment>
            <p>{props.text}</p>
            <p>{props.text2}</p>
            <div> {props.year}</div>
        </React.Fragment>
    )
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
