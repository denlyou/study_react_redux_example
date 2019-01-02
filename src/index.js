import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { Provider } from 'react-redux'; 
/// import * as actions from './actions';
// 리덕스의 스토어를 만들 것이다 (앱내에 1개만 존재해야 한다.)
import { createStore } from 'redux';
import reducers from './reducers/index';
const store = createStore(reducers);
// 하는 일
// 1. dispatch(action)
// 2. getState() 현재 상태 반환
// 3. subscribe(listener) : 상태가 바뀔때마다 수행할 콜백함수(listener)

// console.log(store.getState()); // 초기 상태 확인용
// 변화가 있을때 상태 로그 표시
// const unsubscribeLogState = store.subscribe( ()=>{
//     console.log(store.getState());
// });
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor(0,0,0));
// unsubscribeLogState(); // 구독 해제
// store.dispatch(actions.decrement());
/* react-redux */
// 뷰 레이어 바인딩

ReactDOM.render( 
    <Provider  store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);