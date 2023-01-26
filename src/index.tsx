import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Title</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ex dicta voluptatum saepe, natus sit quasi pariatur nulla, nihil
                quisquam quibusdam optio sequi. Deserunt pariatur reiciendis
                fugit odit provident quas.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ex dicta voluptatum saepe, natus sit quasi pariatur nulla, nihil
                quisquam quibusdam optio sequi. Deserunt pariatur reiciendis
                fugit odit provident quas.
            </p>
        </React.Fragment>
    )
}

function App() {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
