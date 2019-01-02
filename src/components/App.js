import React, { Component } from 'react';
import Counter from './Counter';

// import PropTypes from 'prop-types'; // https://reactjs.org/docs/typechecking-with-proptypes.html
// import Counter from './Counter';
// const propTypes = { }
// const defaultProps = { }

class App extends Component {

    render(){
        return (
            <div>
                <Counter />
            </div>
        );
    }
}

// App.defaultProps = defaultProps;

export default App;