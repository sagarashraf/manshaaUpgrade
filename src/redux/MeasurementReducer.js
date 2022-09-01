import { actionTypes } from "./reduxConstant";

export const MeasurementControl = (data = [], action) => {
	console.log(action);
	switch (action.type) {
		case actionTypes.AddMeasurement:
			console.log("inside measurement reducer", action.data);
			return [action.data, ...data];
		case actionTypes.RemoveMeasurement:
			data = [];
			return [...data];
		default:
			return data;
	}
};
