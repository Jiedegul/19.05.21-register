const initailState = {}

const detail = (state=initailState,action)=>{
    if (action.type === "ADD_NEWS_DETAIL"){
        return action.detail
    }
    return state
}

export default detail;