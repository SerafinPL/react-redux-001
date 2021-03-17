import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	results: []
}

const deleteResult = (state, action) => {
	const updatedArray = state.results.filter(result => result.id !== action.elementId);
	return updateObject(state, {results: updatedArray});
};


const reducer = (state = initialState, action) => {



	switch (action.type) {
		case actionTypes.STORE_RESULT:{
				
				// data changing is possible there
			return updateObject(state, {results: state.results.concat( {id: new Date().getTime(), value: action.result} )});
			// return{
			// 	...state,
			// 	results: state.results.concat({id: new Date().getTime(), value: action.result})
			// }
		}
		case actionTypes.DELETE_RESULT:{
			// One WAY
			// 
			// const newArray = [...state.results];
			// newArray.splice(id, 1);
			//

			//Second WAY
			// let updatedArray = state.results.filter(result => result.id !== action.elementId);
			// return updateObject(state, {results: updatedArray});
			return deleteResult(state, action);
			// return{
		 	// 	...state,
			// 	results: updatedArray
			// } 
		}

	}// switch

	
	return state;
}

export default reducer;