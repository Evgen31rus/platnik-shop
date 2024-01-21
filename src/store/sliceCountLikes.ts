import { createSlice } from '@reduxjs/toolkit'
import IBackendObject from '../modle'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: IBackendObject[]

}

const initialState: CounterState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HandleAddLikes: (state, actions) => {
      let data = actions.payload
   state.value.push(data)
    },
   
}
}
)


export const { HandleAddLikes } = counterSlice.actions

export default counterSlice.reducer