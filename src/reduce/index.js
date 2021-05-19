import {combineReducers} from "redux"
import news from "./news"
import detail from "./detail"
import {reducer as form } from "redux-form"

const reduce = combineReducers({
    news,
    detail,
    form
})

export default reduce;