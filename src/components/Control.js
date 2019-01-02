import React, { Component } from 'react';
import PropTypes from 'prop-types'; // https://reactjs.org/docs/typechecking-with-proptypes.html

// props의 prop들의 데이터 타입과 기본값 설정 (하단에 주입)
const propTypes = {
    onPlus: PropTypes.func,
    onMinus: PropTypes.func,
    onChangeBG: PropTypes.func
}
const createWarning = funcName => { // 에러 함수 정의 (반복되서..)
    console.log(`${funcName} is not defined!!`)
}
const defaultProps = {
    onPlus: createWarning('onPuls'),
    onMinus: createWarning('onMinus'),
    onChangeBG: createWarning('onChangeBG')    
}

class Control extends Component {
    render(){
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onMinus}>-</button>
                <button onClick={this.props.onChangeBG}>BG</button>
            </div>
        );
    }
}

Control.defaultProps = defaultProps;
Control.propTypes = propTypes;

export default Control;