import { createSlice } from "@reduxjs/toolkit";

const weatherData = createSlice({
    name: "weatherData",
    initialState: {
        dropDownDiv: false,
        cityName: "",
        searchedCityString: "",
        data: null
    },
    reducers: {
        setDropDownDiv: (state, action) => {
            state.dropDownDiv = action.payload;
        },
        setCityName: (state, action) => {
            state.cityName = action.payload;
        },
        setSearchedCityString: (state, action) => {
            state.searchedCityString = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const {setDropDownDiv , setCityName , setSearchedCityString, setData} = weatherData.actions
export default weatherData.reducer