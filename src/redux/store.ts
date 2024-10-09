import { AnyAction, Store, ThunkDispatch, combineReducers, configureStore } from '@reduxjs/toolkit'
import { imagesSliderModalReducer } from './reducers/imagesSliderModalSlice'

const rootReducer = combineReducers({
  imagesSliderModalReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>
export type AppStore = Omit<Store<RootState, AnyAction>, "dispatch"> & {
  dispatch: AppThunkDispatch
}

const setupStore: AppStore = configureStore({
  reducer: rootReducer,
})

export default setupStore