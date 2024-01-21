import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import backend from '../backend';

export interface CounterState {
  price: priceObject,
  category: CategoryObject[]
}
export interface CategoryObject{
    category: string[];
}
export interface priceObject{
    minPrice: number,
    maxPrice: number,
}

const initialState: CounterState = {
 price:{
    minPrice:0,
    maxPrice: Math.max(...backend.map(el => el.price)) 
 },

category: [
    {
        category: ['videocard', 'keyboard', 'laptop', ]
    }
]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HandleInputMinDate: (state, action)=> {
        const  minDate = action.payload;
      state.price.minPrice = minDate;
    },
    HandleInputMaxDate: (state, action)=> {
      const  maxDate = action.payload;
    state.price.maxPrice = maxDate;
  },
   
}
}
)


export const { HandleInputMinDate, HandleInputMaxDate } = counterSlice.actions

export default counterSlice.reducer