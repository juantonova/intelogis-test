import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    applications: [],
    currentApplication: {
    },
    currentRoute: []
};

const applicationSlice = createSlice({
    name: 'applications',
    initialState,
    reducers: {
        getApplications: (state, action) => {
            state.applications = action.payload
        },
        setCurrentApplication: (state, action) => {
            state.currentApplication = action.payload
        },
        getRoute: (coordinates) => {
            return coordinates
        },
        setRoute: (state, action) => {
            state.currentRoute = action.payload
        },
    }
})

export const { getApplications, setCurrentApplication, getRoute, setRoute } = applicationSlice.actions;

export default applicationSlice.reducer;