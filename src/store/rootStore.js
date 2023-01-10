import {combineReducers} from "redux";
import foodReducer from "./reducers/foodReducer";
import tableReducer from "./reducers/tableReducer";

const rootReducer = combineReducers({
    food: foodReducer,
    table: tableReducer
})

export default rootReducer