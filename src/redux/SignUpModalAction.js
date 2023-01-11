import { actionTypes } from "./reduxConstant";

export const openRegistration = (data) => {
	console.log("Action called", data);
	return {
		type: actionTypes.RegisterationModalStateTrue,
		data: data,
	};
};
export const closeRegistration = (data) => {
	console.log("Action called remove", data);
	return {
		type: actionTypes.RegisterationModalStateFalse,
		data: data,
	};
};
