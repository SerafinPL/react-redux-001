import * as actionTypes from './actions.js';


const initialState = {
	counter: 1,
	results: []
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
			return{
		 		...state,
				counter: state.counter + 1
			} 
		case actionTypes.DECREMENT:
			return{
		 		...state,
				counter: state.counter - 1
			} 
		case actionTypes.ADD:
			return{
		 		...state,
				counter: state.counter + action.value
			} 
		case actionTypes.SUBTRACT:
			return{
		 		...state,
				counter: state.counter - action.value
			} 
		case actionTypes.STORE_RESULT:{
				
				console.log(state.results);
			return{

				...state,
				results: state.results.concat({id: new Date().getTime(), value: state.counter})

			}
		}
		case actionTypes.DELETE_RESULT:{
			// One WAY
			// 
			// const newArray = [...state.results];
			// newArray.splice(id, 1);
			//
			//Second WAY
			
			let updatedArray = state.results.filter(result => result.id !== action.elementId)
			return{
		 		...state,
				results: updatedArray
			} 
		}

	}// switch

	
	return state;
}

export default reducer;