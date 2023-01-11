import * as yup from "yup";
const Errors = "This Field is Required";
export const MeasurementSchema = yup.object().shape({
	Shoulder: yup.string().required(Errors),
	HipRound: yup.string().required(Errors),
	Armhole: yup.string().required(Errors),
	AnkleRound: yup.string().required(Errors),
	BustRound: yup.string().required(Errors),
	AcrossFront: yup.string().required(Errors),
	BustRound: yup.string().required(Errors),
	CalfRound: yup.string().required(Errors),
	UpperBustRound: yup.string().required(Errors),
	WaistRound: yup.string().required(Errors),
	UnderBustRound: yup.string().required(Errors),
	ThighRound: yup.string().required(Errors),
	MidThighRound: yup.string().required(Errors),
	KneeRound: yup.string().required(Errors),
	LowWaistRound: yup.string().required(Errors),
});
