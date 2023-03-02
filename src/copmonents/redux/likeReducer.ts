import { createSlice } from '@reduxjs/toolkit'

type likeProductsType = {
    [id: number]: boolean
}

export const initialState: likeProductsType = {
    1: true,
    3: true,
}

export const likeSlice = createSlice({
    name: 'Like',
    initialState,
    reducers: {},
})


export default likeSlice.reducer