import { configureStore } from '@reduxjs/toolkit'

import reducers from './rootReducer'
import { ENABLE_REDUX_DEV_TOOLS } from '../constants'

const store = configureStore({
    reducer: reducers,
    devTools: ENABLE_REDUX_DEV_TOOLS
})

export type RootState = ReturnType<typeof reducers>

export default store
