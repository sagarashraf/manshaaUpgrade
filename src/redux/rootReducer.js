import { combineReducers } from "redux";
//import { productsData } from "./ProductsReducer";
import { cartBucket } from "./CartBucketReducer";
import { MeasurementControl } from "./MeasurementReducer";

export default combineReducers({
	cartBucket,
	MeasurementControl,
});
