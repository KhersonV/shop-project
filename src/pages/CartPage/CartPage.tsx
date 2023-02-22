import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import './CartPage.scss'
import CartTotal from 'copmonents/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartPage = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div className="">
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div className="test" key={productId}>
                        {' '}
                        {productsObject[parseInt(productId)].title} :{' '}
                        {productsInCart[parseInt(productId)]}:{' '}
                        {productsObject[parseInt(productId)].price}
                    </div>
                ))}
            </div>

            <div className="">
            <CartTotal productsInCart={productsInCart}/>
            </div>
        </div>
    )
}
export default CartPage
