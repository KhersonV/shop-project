import { Grid, Typography } from '@mui/material'
import ProductsListItem from './ProductsListItem'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Typography variant="h3" align="center" component="h2">
                Products List
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem title="iPhone 14 pro" description='This iPhone 14 pro' type=' phone' capacity="512 " price={1300}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem title="iPhone 13 pro" description='This iPhone 13 pro' type=' phone' capacity="256 "  price={1200}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem title="iPhone 12 pro" description='This iPhone 12 pro'type=' phone' capacity="128 "  price={1100}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    {' '}
                    <ProductsListItem title="iPhone 11 pro" description='This iPhone 11 pro'type=' phone' capacity="128 "  price={1000}/>
                </Grid>
            </Grid>
        </>
    )
}
export default ProductsList
