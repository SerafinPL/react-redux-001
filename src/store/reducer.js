
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
		case 'INCREMENT':
			// const newState = Object.assign({}, state); //another version of solve problem imutable copy
			// newState.counter = state.counter + 1;
			// return newState;
			return{
		 		...state,
				counter: state.counter + 1
			} 
		case 'DECREMENT':
			return{
		 		...state,
				counter: state.counter - 1
			} 
		case 'ADD':
			return{
		 		...state,
				counter: state.counter + action.value
			} 
		case 'SUBTRACT':
			return{
		 		...state,
				counter: state.counter - action.value
			} 
		case 'STORE_RESULT':{
			return{
				...state,
				results: state.results.concat({id: new Date(), value: state.counter})
			}
		}

	}// switch

	
	return state;
}

export default reducer;