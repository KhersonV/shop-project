import { Grid, Typography } from '@mui/material'
import productsArray from 'utils/productsArray'
import ProductsListItem from './ProductsListItem'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" align="center" component="h2">
                Products List
            </Typography>

            <Grid container spacing={3}>
                {productsArray.map(
                    ({ title, description, type, capacity, price, id }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            {' '}
                            <ProductsListItem
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
