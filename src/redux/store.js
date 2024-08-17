import { configureStore } from "@reduxjs/toolkit";
import weatherDataSlice from "./reducer/weatherDataSlice";

export default configureStore({
    reducer: {
        weatherDatastate: weatherDataSlice
    }
});