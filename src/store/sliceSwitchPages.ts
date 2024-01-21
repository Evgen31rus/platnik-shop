import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

export interface CounterState {
  MainPages: boolean,
  ProductPages: boolean,
  DeleveryPages:boolean,
  BuscketPages:boolean,
  likesPages:boolean


}

const initialState: CounterState = {
  MainPages: true,
  ProductPages: false,
  DeleveryPages:false,
  BuscketPages: false,
  likesPages: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HandleSwitchMainPages: (state) => {
      state.MainPages = true
      state.ProductPages = false
      state.DeleveryPages= false
      state.BuscketPages = false
      state.likesPages = false
    },
    HandleSwitchProductPages: (state) => {
      state.MainPages = false
      state.ProductPages = true
      state.DeleveryPages= false
      state.BuscketPages = false
      state.likesPages = false
    },
    HandleSwitchDeleveryPages: (state) => {
      state.MainPages = false
      state.ProductPages = false
      state.DeleveryPages= true      
      state.BuscketPages = false
      state.likesPages = false
    },
    HandleSwitchBuscketPages: (state)=>{
      state.MainPages = false
      state.ProductPages = false
      state.DeleveryPages= false
      state.BuscketPages = true
      state.likesPages = false
    },
    HandleSwitchLikesPages: (state)=>{
      state.MainPages = false
      state.ProductPages = false
      state.DeleveryPages= false
      state.BuscketPages = false
      state.likesPages = true
    }

}
}
)


export const { HandleSwitchMainPages, HandleSwitchDeleveryPages, HandleSwitchProductPages, HandleSwitchBuscketPages, HandleSwitchLikesPages } = counterSlice.actions

export default counterSlice.reducer