import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    tabbarIndex: number
}

const initialState: CounterState = {
    tabbarIndex: 0,
}

export const tabbarSlice = createSlice({
  initialState,
  name: 'tabbar',
  reducers: {
    changeTabbar: (state, action: PayloadAction<number>) => {
      state.tabbarIndex = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTabbar } = tabbarSlice.actions

export default tabbarSlice.reducer
