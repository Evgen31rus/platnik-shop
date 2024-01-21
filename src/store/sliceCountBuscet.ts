import { createSlice } from '@reduxjs/toolkit'
import IBackendObject from '../modle'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: IBackendObject[]
valueBuscket: Number[]
}

const initialState: CounterState = {
  value: [],
  valueBuscket:[]
  
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HandleAddProduct: (state, action) => {
      const data:IBackendObject = action.payload
      state.value.push(data)
      state.valueBuscket.push(1)
    },
    HandleRemoveProduct: (state, action) => {
      const data:string = action.payload
     state.value.splice(state.value.map(el => el.id).indexOf(data),1)
   
       },
   
}
}
)


export const { HandleAddProduct , HandleRemoveProduct} = counterSlice.actions

export default counterSlice.reducer