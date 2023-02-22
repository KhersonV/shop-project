import CartProductList from 'copmonents/CartProductList/CartProductList'
import CartTotal from 'copmonents/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div className="">
            <div>
                <CartProductList productsInCart={productsInCart} />
            </div>

            <div className="">
                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default CartHeader
