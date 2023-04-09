import { createSlice } from '@reduxjs/toolkit'

export const gymSlice = createSlice({
    name: "gym",
    initialState: {
        day: [
            { id: 1, name: "день ног" },
            { id: 2, name: "день груди" },
            { id: 3, name: "день спины" },
        ]
    },
    reducers: {
        fAddNewDay(state, action) {
            state.day.push(action.payload)
        },
        fRemoveDay(state, actions) {
            state.day = state.day.filter(day => day.id !== actions.payload)
        }
    }

})
export const { fAddNewDay } = gymSlice.actions
export const { fRemoveDay } = gymSlice.actions
export default gymSlice.reducer