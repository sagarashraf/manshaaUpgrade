import { actionTypes } from "./reduxConstant";

export const RegistrationModalState = (data = false, action) => {
	console.log(action, data);
	switch (action.type) {
		case actionTypes.RegisterationModalStateTrue:
			data = true;
			return data;
		case actionTypes.RegisterationModalStateFalse:
			data = false;
			return data;
		default:
			return data;
	}
};
