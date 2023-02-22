import CartTotal from "copmonents/CartTotal/CartTotal"
import productsArray, { getProductsObject, Product } from 'utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}
const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div className="">
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].title}:{' '}
                        {productsInCart[parseInt(productId)]}
                    </div>
                ))}
            </div>

            <div className="">
            <CartTotal productsInCart={productsInCart}/>
            </div>
        </div>
    )
} 
export default CartHeader
