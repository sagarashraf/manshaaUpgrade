import { actionTypes } from "./reduxConstant";

export const getMeasurement = (data) => {
	console.log("Action called to add measure", data);
	return {
		type: actionTypes.AddMeasurement,
		data: data,
	};
};
export const removeMeasurement = (data) => {
	console.log("Action called remove", data);
	return {
		type: actionTypes.RemoveMeasurement,
		data: data,
	};
};
