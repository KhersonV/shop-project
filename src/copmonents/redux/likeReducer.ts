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
    reducers: {
        addLike: (state, action) => ({ ...state, [action.payload]: true }),
        removeLike: (state, action) => ({ ...state, [action.payload]: false }),
    },
})

export const { addLike, removeLike } = likeSlice.actions
export default likeSlice.reducer
