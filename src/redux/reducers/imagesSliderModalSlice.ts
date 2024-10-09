import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IInitialState {
  isHide: boolean
  currentPictureIndex: number
}

const initialState: IInitialState = {
  isHide: true,
  currentPictureIndex: 0
}

const imagesSliderModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onToggleModal(state) {
      state.isHide = !state.isHide
    },
    onShowModal(
      state,
      { payload }: PayloadAction<{ currentPictureIndex: number }>
    ) {
      state.isHide = false
      state.currentPictureIndex = payload.currentPictureIndex
    },
    onHideModal(
      state,
    ) {
      state.isHide = true
    },
    incrementCurrentPictureIndex(state) {
      state.currentPictureIndex++
    },
    decrementCurrentPictureIndex(state) {
      state.currentPictureIndex--
    }
  }
})

export const { actions: imagesSliderModalAction, reducer: imagesSliderModalReducer } = imagesSliderModalSlice