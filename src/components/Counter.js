import React, { Component } from 'react';
// import PropTypes from 'prop-types'; 
// compos 
import Value from './Value';
import Control from './Control';
// redux
import { connect } from 'react-redux';
// import { connect, bindActionCreators } from 'react-redux';
import * as actions from '../actions';

// props의 prop들의 데이터 타입과 기본값 설정 (하단에 주입)
const propTypes = { }
const defaultProps = { }

class Counter extends Component {

    constructor(props){
        super(props);
        
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor(){
        const color = [
            Math.floor(Math.random()*55) + 200,
            Math.floor(Math.random()*55) + 200,
            Math.floor(Math.random()*55) + 200
        ]
        
        this.props.handleSetColor(color);
    }


    render(){
        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        };

        return (
            <div style={style}>
                <Value number={this.props.number} />
                <Control 
                    onPlus={this.props.handleIncrement}
                    onMinus={this.props.handledecrement}
                    onChangeBG={this.setRandomColor}
                />
            </div>
        );
    }

}

Counter.defaultProps = defaultProps;
Counter.propTypes = propTypes;

// 
const mapStateToProps = state => { // 컴포넌트의 state랑 틀림 (redux의 state)
    // console.log("mapStateToProps::state:", state);
    return { // 연결작업
        number: state.counter.number, 
        color: state.ui.color
    };
}
const mapDispatchToProps = dispatch => {
    // console.log("mapDispatchToProps::dispatch:", dispatch);
    return {
        handleIncrement: () => { dispatch(actions.increment()) } , 
        handleDecrement: () => { dispatch(actions.decrement()) } , 
        handleSetColor: (color) => { dispatch(actions.setColor(color)) } 
    }
    // return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // react-redux의 connect