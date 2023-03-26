import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit'
import weatherSlice from './reducer/weatherSlice'

const rootReducer = combineReducers({
    weatherSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
