import CartProductList from 'copmonents/CartProductList/CartProductList'
import CartTotal from 'copmonents/CartTotal/CartTotal'
import { useAppSelector } from 'copmonents/redux/hooks'

const CartHeader = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <div className="">
            <CartProductList productsInCart={productsInCart} />

            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartHeader
