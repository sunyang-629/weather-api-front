import { combineReducers } from "redux";
import forecast from "./weatherReducers";

const reducers = combineReducers({ weather:forecast });

export default reducers;
