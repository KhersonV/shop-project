import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Product } from 'utils/productsArray'
import Quantity from 'copmonents/Quantity/Quantity'
import { useAppDispatch } from 'copmonents/redux/hooks'
import {
    changeProductQuantity,
    removeProductFromCart,
} from 'copmonents/redux/cartReducer'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="">{product.title}</div>
                    <p> Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        count={productCount}
                        onIncrement={() =>
                            dispatch(
                                changeProductQuantity({
                                    id: product.id,
                                    count: productCount + 1,
                                })
                            )
                        }
                        onDecrement={() =>
                            productCount <= 1
                                ? dispatch(removeProductFromCart(product.id))
                                : dispatch(
                                      changeProductQuantity({
                                          id: product.id,
                                          count: productCount - 1,
                                      })
                                  )
                        }
                        minCount={0}
                    />
                </CardContent>
                <CardActions>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            dispatch(removeProductFromCart(product.id))
                        }
                    >
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
