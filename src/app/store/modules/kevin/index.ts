import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'

import { kevinSaga } from './saga'
import { KevinState } from './types'

export const initialState: KevinState = {}

const slice = createSlice({
  name: 'kevin',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {}
  }
})

export const { actions: kevinActions } = slice

export const useKevinSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: kevinSaga })
  return { actions: slice.actions }
}

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useKevinSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
