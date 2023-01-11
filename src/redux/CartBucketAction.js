import { actionTypes } from "./reduxConstant";

export const addToCart = (data) => {
	console.log("Action called", data);
	return {
		type: actionTypes.AddToCart,
		data: data,
	};
};
export const removeToCart = (data) => {
	console.log("Action called removes", data);
	return {
		type: actionTypes.RemoveToCart,
		data: data,
	};
};

export const emptyCart = (data) => {
	console.log("Action called remove", data);
	return {
		type: actionTypes.EmptyCart,
		data: data,
	};
};
