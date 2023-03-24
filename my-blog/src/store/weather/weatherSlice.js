import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: 'samara' },
    headers: {
        'X-RapidAPI-Key': 'c421a14b1fmsha29ccc8aa2792dap1b5093jsn1d7e17edd090',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export const fetchReport = (name) => async (dispatch) => {
    console.log(name);
    if (name) {
        options.params.q = name
    }
    try {
        dispatch(weatherSlice.actions.fetch())
        const responce = await axios.request(options)
        dispatch(weatherSlice.actions.fetchReports(responce.data))
    } catch (error) {
        console.log(error);
    }

}

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: [],
        status: "",
        error: '',
    },
    reducers: {
        fetch(state) {
            state.status = 'loading',
                state.error = null
        },
        fetchReports(state, action) {
            state.status = 'done',
                state.weather = action.payload
        },
        fetchReport(state, actions) { },
    },
},
)

export const { getReport } = weatherSlice.actions
export default weatherSlice.reducer
