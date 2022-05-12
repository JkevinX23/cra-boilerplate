import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../types'

import { initialState } from '.'

const selectSlice = (state: RootState) => state.kevin || initialState

export const selectKevin = createSelector([selectSlice], (state) => state)
