import { createSlice } from "@reduxjs/toolkit";

export const formStateSlice = createSlice({
    name: "formState",
    initialState: {
        selectedStartDate: null,
        selectedEndDate: null,
        duration: null,
        selectedActivities: [],
        description: null,
        aiPlan: null
    },
    reducers: {
        setSelectedStartDate: (state, action) => {
            state.selectedStartDate = action.payload
        },
        setSelectedEndDate: (state, action) => {
            state.selectedEndDate = action.payload
        },
        setDuration: (state, action) => {
            state.duration = action.payload
        },
        setSelectedActivities: (state, action) => {
            state.selectedActivities = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        },
        setAiPlan: (state, action) => {
            state.aiPlan = action.payload
        }
    }
})

export const { setSelectedStartDate, setSelectedEndDate, setSelectedActivities, setDescription, setDuration, setAiPlan } = formStateSlice.actions;
export default formStateSlice.reducer;