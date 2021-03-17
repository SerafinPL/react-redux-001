
import * as actionTypes from './actionTypes.js';

export const increment = () => {
	return{
		type: actionTypes.INCREMENT
	};
};

export const decrement = () => {
	return{
		type: actionTypes.DECREMENT
	};
};

export const add = (valueAdd) => {
	return{
		type: actionTypes.ADD,
		value: valueAdd
	};
};

export const subtract = (valueSub) => {
	return{
		type: actionTypes.SUBTRACT,
		value: valueSub
	};
};