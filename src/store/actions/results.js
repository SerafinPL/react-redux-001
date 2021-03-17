
import * as actionTypes from './actionTypes.js';


export const saveResult = ( res ) => {
	// const upDatedResult = res * 2;
	return {
		type: actionTypes.STORE_RESULT,
		result: res //upDatedResult
	};
}

export const storeResult = (res) => {

	return (dispatch/*, getState*/) => {
		setTimeout(() => {
			/*const oldCounter = getState().ctr.counter;
			console.log(oldCounter);*/
			dispatch( saveResult(res) );
		}, 2000);
	}
	/*return {
		type: STORE_RESULT,
		result: res
	};*/
};

export const deleteResult = (id) => {
	return{
		type: actionTypes.DELETE_RESULT,
		elementId: id
	};
};