export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
	return{
		type: INCREMENT
	};
};

export const decrement = () => {
	return{
		type: DECREMENT
	};
};

export const add = (valueAdd) => {
	return{
		type: ADD,
		value: valueAdd
	};
};

export const subtract = (valueSub) => {
	return{
		type: SUBTRACT,
		value: valueSub
	};
};

export const saveResult = ( res ) => {
	return {
		type: STORE_RESULT,
		result: res
	};
}

export const storeResult = (res) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(saveResult(res));
		}, 2000);
	}
	/*return {
		type: STORE_RESULT,
		result: res
	};*/
};

export const deleteResult = (id) => {
	return{
		type: DELETE_RESULT,
		elementId: id
	};
};