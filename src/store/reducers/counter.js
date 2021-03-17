import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	counter: 1
}

const reducer = (state = initialState, action) => {



	// if (action.type === 'INCREMENT'){
	// 	return{
	// 		...state,
	// 		counter: state.counter + 1
	// 	}
	// }
	// if (action.type === 'DECREMENT'){
	// 	return{
	// 		...state,
	// 		counter: state.counter - 1
	// 	}
	// }
	// if (action.type === 'ADD'){
	// 	return{
	// 		...state,
	// 		counter: state.counter + action.value
	// 	}
	// }
	// if (action.type === 'SUBTRACT'){
	// 	return{
	// 		...state,
	// 		counter: state.counter - action.value
	// 	}
	// }
	
	switch (action.type) {
		case actionTypes.INCREMENT:
			// const newState = Object.assign({}, state); //another version of solve problem imutable copy
			// newState.counter = state.counter + 1;
			// return newState;

			return updateObject(state, {counter: state.counter + 1});
			// return{
		 	// 	...state,
			// 	counter: state.counter + 1
			// } 
		case actionTypes.DECREMENT:
			return updateObject(state, {counter: state.counter - 1});
			// return{
		 	//	...state,
			// 	counter: state.counter - 1
			// } 
		case actionTypes.ADD:
			return updateObject(state, {counter: state.counter + action.value});
			// return{
		 // 		...state,
			// 	counter: state.counter + action.value
			// } 
		case actionTypes.SUBTRACT:
			return updateObject(state, {counter: state.counter - action.value});
			// return{
			// 	...state,
			// 	counter: state.counter - action.value
			// } 
	}// switch

	
	return state;
}

export default reducer;