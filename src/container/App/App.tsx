import Header from 'container/Header/Header'
import Footer from 'container/Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import Home from 'pages/Home/Home'
import { Container } from '@mui/system'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import CheckOutPage from 'pages/CheckOut/CheckOutPage'
import HomeWork from 'pages/HomeWork/HomeWork'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container sx={{ padding: '60px 0' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckOutPage />} />
                    <Route path="homeWork" element={<HomeWork />} />
                </Routes>
            </Container>

            <Footer />
        </StyledEngineProvider>
    )
}
export default App
