import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'copmonents/Quantity/Quantity'
import { useState } from 'react'
import './ProductsListItem.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'copmonents/redux/hooks'
import { addLike, removeLike } from 'copmonents/redux/likeReducer'
import { addProductToCart } from 'copmonents/redux/cartReducer'

type Props = {
    addProductToCart?: (count: number, price: number) => void
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const ProductsListItem = ({
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
    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <Card variant="outlined">
            <CardContent>
                <Button
                    variant="outlined"
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
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
                    onClick={() =>
                        dispatch(
                            addProductToCart({
                                id,
                                count,
                            })
                        )
                    }
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
