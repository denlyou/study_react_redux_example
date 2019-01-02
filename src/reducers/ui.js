import * as types from "../actions/ActionTypes";

const initState = {
    color: [255,255,255] // 초기 색상 white
}

export default function ui(state = initState, action) {
    if ( action.type === types.SET_COLOR) {
        return {
            color: action.color
        }
    } else {
        return state;
    }

}