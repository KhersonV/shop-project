import productsArray, { getProductsObject, Product } from 'utils/productsArray'
import './CartPage.scss'

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
                <div className="cont-test">
                    <div className="test" key={productId}>
                        <div className="">
                            {' '}
                            <img
                                className="img-in-cart"
                                src={productsObject[parseInt(productId)].image}
                                alt=""
                            />{' '}
                        </div>
                        <div className="">
                            {' '}
                            {productsObject[parseInt(productId)].title}:{' '}
                        </div>
                        <div className="">
                            {productsObject[parseInt(productId)].description}:{' '}
                        </div>
                        <div className="">
                            {' Capacity: '}{' '}
                            {productsObject[parseInt(productId)].capacity}{' '}
                            {'GB'}
                        </div>
                        <div className="">
                            {' Price: '}
                            {productsObject[parseInt(productId)].price}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CartPage
