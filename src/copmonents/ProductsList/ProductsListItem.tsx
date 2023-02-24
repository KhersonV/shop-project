import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import Quantity from 'copmonents/Quantity/Quantity'
import { useState } from 'react'
import './ProductsListItem.scss'

type Props = {
    addProductToCart: (count: number, price: number) => void
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductsListItem = ({
    addProductToCart,
    id,
    title,
    description,
    type,
    capacity,
    price,
    image,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onIncrement = () => {
        setCount((prevState) => prevState + 1)
    }

    const onDecrement = () => {
        setCount((prevState) => prevState - 1)
    }

    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-desc">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">{capacity} GB</div>
                <div className="product-price">{price}</div>
                <Quantity
                    count={count}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                />
            </CardContent>
            <CardActions className="product-btn-wrap">
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
