import productsArray, { getProductsObject, Product } from 'utils/productsArray'

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
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div className="test" key={productId}>
                    {productsObject[parseInt(productId)].title}:{' quantity '}
                    {productsInCart[parseInt(productId)]}:
                    {' price for 1 product: '}
                    {productsObject[parseInt(productId)].price}
                </div>
            ))}
        </div>
    )
}
export default CartPage
