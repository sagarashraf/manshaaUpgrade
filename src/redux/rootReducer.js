import { combineReducers } from "redux";
//import { productsData } from "./ProductsReducer";
import { cartBucket } from "./CartBucketReducer";
import { MeasurementControl } from "./MeasurementReducer";
import { RegistrationModalState } from "./SignUpModalReducer";

export default combineReducers({
	cartBucket,
	MeasurementControl,
	RegistrationModalState,
});
