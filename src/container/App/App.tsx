import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Home from 'pages/Home/Home'
import { Container } from '@mui/system'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'

type Props = {}



const App = (props: Props) => {
    

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header  />
            <Container sx={{ padding: '60px 0' }}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home  />}
                    />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                
                            />
                        }
                    />
                </Routes>
            </Container>

            <Footer />
        </StyledEngineProvider>
    )
}
export default App
