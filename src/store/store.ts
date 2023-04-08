import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit'
import  gymSlice  from './reducer/gymSlice'
import weatherSlice from './reducer/weatherSlice'

const rootReducer = combineReducers({
    weatherSlice,
    gymSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
