import * as types from "./ActionTypes";

// 액션 생성자는 카멜케이스 사용
export function increment(){
    return {
        type: types.INCREMENT
    }
}

export function decrement(){
    return {
        type: types.DECREMENT
    }
}

export function setColor(color){
    return {
        type: types.SET_COLOR,
        color // es6
    }
}