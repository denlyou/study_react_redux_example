import React, { Component } from 'react';
import PropTypes from 'prop-types'; // https://reactjs.org/docs/typechecking-with-proptypes.html

// props의 prop들의 데이터 타입과 기본값 설정 (하단에 주입)
const propTypes = {
    number: PropTypes.number
}
const defaultProps = {
    number: -1
}

class Value extends Component {
    
    render(){
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }

}

Value.defaultProps = defaultProps;
Value.propTypes = propTypes;

export default Value;