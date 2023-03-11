import CartTotal from 'copmonents/CartTotal/CartTotal'
import CartProductList from 'copmonents/CartProductList/CartProductList'
import { Grid, Typography } from '@mui/material'
import CartProductListItemExtended from 'copmonents/CartProductList/CartProductListItemExtended'
import { useAppSelector } from 'copmonents/redux/hooks'
import { Link } from 'react-router-dom'

const CartPage = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div className="">
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: '30px',
                }}
            >
                Cart
            </Typography>
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout">Proceed to checkout</Link>
        </div>
    )
}
export default CartPage
