import CartTotal from 'copmonents/CartTotal/CartTotal'
import CartProductList from 'copmonents/CartProductList/CartProductList'
type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartPage = ({ productsInCart }: Props) => {
    return (
        <div className="">
            <CartProductList productsInCart={productsInCart} />

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
