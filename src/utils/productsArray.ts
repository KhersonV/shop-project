type Product ={
    title: string
    description: string
    type: string
    capacity: string
    price: number
    id: number
    image: string
}

const productsArray:Product[] = [
    {
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '512',
        price: 2000,
        id: 1,
        image: "/images/blakPRO.jpg"
    },
    {
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '256',
        price: 1200,
        id: 2,
        image: "/images/iBlack.jpg"
    },
    {
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '256',
        price: 1100,
        id: 3,
        image: "/images/iGold.webp"
    },
    {
        title: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: '256',
        price: 1000,
        id: 4,
        image: "/images/iGrey.jpg"
    },
    {
        title: 'iPhone X Pro',
        description: 'This is iPhone X Pro',
        type: 'phone',
        capacity: '256',
        price: 600,
        id: 5,
        image: "/images/iPurple.jpg"

    },
    {
        title: 'iPhone 8 Pro',
        description: 'This is iPhone 8 Pro',
        type: 'phone',
        capacity: '64',
        price: 500,
        id: 6,
        image: "/images/iSilverPro.jpg"
    },

]

export default productsArray