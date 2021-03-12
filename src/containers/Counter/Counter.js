import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions.js';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResult.map( result => (
                            <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                        )
                    )}
                    
                    
                </ul>
            </div>
        );
    }
}
// after class
const mapStateToProps = state => {
    return { //dodane elementy z combineReducers
        ctr: state.ctr.counter,
        storeResult: state.res.results
    };
};

const mapDispatchToProps = dispach => {
    return {
        onIncrementCounter: () => dispach({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispach({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispach({type: actionTypes.ADD, value: 5}),
        onSubtractCounter: () => dispach({type: actionTypes.SUBTRACT, value: 5}),
        onStoreResult: (resultIn) => dispach({type: actionTypes.STORE_RESULT, result: resultIn}),
        onDeleteResult: (id) => dispach({type: actionTypes.DELETE_RESULT, elementId: id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);