import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
nightTeam: boolean
}


const initialState: CounterState = {
 nightTeam: false
}



export const switchTeamSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    HandleSwitchTeam: (state)=> {
state.nightTeam? state.nightTeam = false: state.nightTeam = true
    },
   
}
}
)


export const { HandleSwitchTeam } = switchTeamSlice.actions

export default switchTeamSlice.reducer