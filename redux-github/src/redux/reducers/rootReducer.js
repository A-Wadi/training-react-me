const initState = {
    count: 0,
    result: 5
}

const reducer = (state = initState, action) => {
    if (action.type === 'INC') {
        return {
            ...state,
            count: state.count + action.num
        }
    } else if (action.type === 'MIN') {
        return {
            ...state,
            count: state.count - action.num
        }
    }
    return state;
}

export default reducer;