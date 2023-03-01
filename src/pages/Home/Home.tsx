import ProductsList from 'copmonents/ProductsList/ProductsList'
import Reviews from 'copmonents/Reviews/Reviews'

type Props = {
    addProductToCart: (count: number, price: number) => void
}
const Home = ({ addProductToCart }: Props) => {
    return (
        <div>
            {' '}
            <ProductsList addProductToCart={addProductToCart} />
            <Reviews />
        </div>
    )
}
export default Home
