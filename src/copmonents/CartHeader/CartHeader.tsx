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
            <CartProductList productsInCart={productsInCart} />

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartHeader
