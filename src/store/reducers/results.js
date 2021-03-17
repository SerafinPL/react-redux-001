import * as actionTypes from '../actions/actionTypes';


const initialState = {
	results: []
}

const reducer = (state = initialState, action) => {



	switch (action.type) {
		case actionTypes.STORE_RESULT:{
				
				// data changing is possible there
			return{

				...state,
				results: state.results.concat({id: new Date().getTime(), value: action.result})

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