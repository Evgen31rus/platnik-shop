import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: boolean
}

const initialState: CounterState = {
  value: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HandleOpenModal: (state) => {
   state.value = true
    },
    HabdleDisOpenModal: (state)=>{
    state.value=false
    }
}
}
)


export const { HandleOpenModal, HabdleDisOpenModal } = counterSlice.actions

export default counterSlice.reducer