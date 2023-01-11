import { actionTypes } from "./reduxConstant";

export const cartBucket = (data = [], action) => {
	console.log(action.data);
	switch (action.type) {
		case actionTypes.AddToCart:
			console.log("f");
			return [action.data, ...data];
		case actionTypes.RemoveToCart:
			console.log("remove Id====", action.data);
			console.log("data====", data);
			let newData = RemoveItem(data, action.data);

			return [...newData];
		case actionTypes.EmptyCart:
			data = [];
			return [...data];

		default:
			return data;
	}
};

const RemoveItem = (data, id) => {
	for (let i = 0; i < data.length; i++) {
		if (data[i].id === id) {
			id = i;
			break;
		}
	}
	if (id !== undefined) {
		data.splice(id, 1);
	}
	return data;
};
