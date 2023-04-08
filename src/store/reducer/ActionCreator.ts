import { IWeatherReport } from './../model/IWeatherReport'
import axios from 'axios'
import { AppDispatch } from './../store'
import { weatherSlice } from './weatherSlice'

const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: 'samara' },
    headers: {
        'X-RapidAPI-Key':
            'c421a14b1fmsha29ccc8aa2792dap1b5093jsn1d7e17edd090',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
}

export const fetchReport = (name: string) => async (dispatch: AppDispatch) => {
    if (name) {
        options.params.q = name
    }
    try {
        dispatch(weatherSlice.actions.weatherFetching())
        const responce = await axios.request<IWeatherReport>(options)
        dispatch(weatherSlice.actions.weatherFetchingSuccess(responce.data))
    } catch (error) {
        dispatch(weatherSlice.actions.weatherFetchingError(error.message))
    }
}


