import CartTotal from 'copmonents/CartTotal/CartTotal'
import CartProductList from 'copmonents/CartProductList/CartProductList'
import { Grid, Typography } from '@mui/material'
import CartProductListItemExtended from 'copmonents/CartProductList/CartProductListItemExtended'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    removeProductFromCart: (id:number) => void
    changeProductQuantity: (id:number ,count:number) =>void
}

const CartPage = ({ productsInCart, removeProductFromCart,changeProductQuantity}: Props) => {
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
                    changeProductQuantity={changeProductQuantity}
                    removeProductFromCart={removeProductFromCart}
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
