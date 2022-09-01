import { actionTypes } from "./reduxConstant";

export const cartBucket = (data = [], action) => {
	console.log(action);
	switch (action.type) {
		case actionTypes.AddToCart:
			console.log("f");
			return [action.data, ...data];
		case actionTypes.RemoveToCart:
			data.length = data.length - 1;
			return [...data];
		case actionTypes.EmptyCart:
			data = [];
			return [...data];

		default:
			return data;
	}
};
