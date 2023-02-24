import { Grid, Typography } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'

type Props = { addProductToCart: (count: number, price: number) => void }
const ProductsList = ({ addProductToCart }: Props) => {
    return (
        <>
            <Typography variant="h3" align="center" component="h2">
                Products List
            </Typography>

            <Grid container spacing={3}>
                {productsArray.map(
                    ({
                        image,
                        title,
                        description,
                        type,
                        capacity,
                        price,
                        id,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            {' '}
                            <ProductsListItem
                                
                                addProductToCart={addProductToCart}
                                image={image}
                                id={id}
                                title={title}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
