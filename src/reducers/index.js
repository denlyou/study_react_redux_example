/* 리듀서는 
 * 비동기 작업 x, 인수 변경 x, 동일한 인수를 반환
 * 이전 상태를 복사하고, 변화를 준 다음 그 상태를 반환한다.
 */
// 리뉴서는 함쳐져야 한다.
import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combineReducers({
    counter, // ES6 exObjLiteral
    ui
})
export default reducers;