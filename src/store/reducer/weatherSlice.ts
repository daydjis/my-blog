import { IWeatherReport } from './../model/IWeatherReport'
import {
    createAsyncThunk,
    PayloadAction,
} from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'


interface WeatherState {
    weather: IWeatherReport
    isLoading: boolean
    error: string
}

const initialState: WeatherState = {
    weather: {
        location: null,
        current: null,
    },
    isLoading: false,
    error: '',
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        weatherFetching(state) {
            state.isLoading = true;
        },
        weatherFetchingSuccess(state, action: PayloadAction<IWeatherReport>) {
            state.isLoading = false;
            state.error = "";
            state.weather = action.payload
        },
        weatherFetchingError(
            state,
            action: PayloadAction<string>
        ) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})

export default weatherSlice.reducer
