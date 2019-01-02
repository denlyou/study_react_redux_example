import * as types from "../actions/ActionTypes";

const initState = {
    number: 0 ,
    dummy: "쓰레기값" ,
    dumbObj: {
        d: 0,
        u: 1,
        m: 2
    }
};

export default function counter(state = initState /* ES6-Default Args */, action) {
    switch(action.type) {
        case types.INCREMENT:
            const newState = { // 개념상 새 상태를 복사 생성
                ...state , // ES6에서 spread 문법 활용
                number: state.number + 1, // 기존에서 중복되면 덮어 씌우게 됨
                dumbObj: { // 오브젝트 하위 값만 수정할 대
                    ...state.dumbObj,
                    m: 9 
                }
            }
            return newState;
            // break;
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            }
        default: 
            return state;
    }
}