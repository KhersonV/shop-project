import React from 'react'
import ReactDOM from 'react-dom/client'
import Content from './Content'
import {Title} from './Title'

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content text="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et asperiores in incidunt," text2=" iste, explicabo dolor culpa at nisi alias excepturi. Ex vero culpa ipsa eligendi optio vitae reiciendis! Est." year={1990} />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
