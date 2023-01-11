import React, { useState } from "react";
import {
	Modal,
	Button,
	Row,
	Col,
	InputGroup,
	Form,
	Card,
} from "react-bootstrap";
import { ColorModal } from "./ColorModal";
import "./MeasurementModal.css";
import { SketchPicker, BlockPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { getMeasurement } from "../../redux/MeasurementAction";
import { Formik, Field, ErrorMessage } from "formik";
import { MeasurementSchema } from "./MeasurementSchema";
import { MeasurementValues } from "./MeasurementValues";
import { addToCart } from "../../redux/CartBucketAction";
/**
 * @author
 * @function MeasurementModal
 **/
export const MeasurementModal = (props) => {
	const dispatched = useDispatch();
	const result = useSelector((state) => state.MeasurementControl);
	const [sketchPickerColor, setSketchPickerColor] = useState({
		r: "241",
		g: "112",
		b: "19",
		a: "1",
	});
	const { r, g, b, a } = sketchPickerColor;
	const [Summary, setSummary] = useState(false);

	const submit = async (values) => {
		console.log("fggf", values);
		let Color = `rgba(${r},${g},${b},${a})`;
		values.color = Color;
		values.title = props.title;
		values.price = props.price;
		values.category = props.cat;
		values.description = props.des.description;
		await dispatched(getMeasurement(values));
		// let orderWithMesure = { ...values, ...result[0] };
		// await dispatched(addToCart(orderWithMesure));
		console.log("redux full state of measure in function", result);
		props.measurementflag();
	};
	return (
		<div>
			{" "}
			<Modal
				{...props}
				size='xl'
				aria-labelledby='contained-modal-title-vcenter'
				centered>
				<Modal.Header className='text-center' closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						{props.title}, Price: {props.price}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col sm={8} xs={12}>
							<h6 className='mb-4'>Please Enter your Measurements!</h6>
							<Formik
								validationSchema={MeasurementSchema}
								onSubmit={(values) => submit(values)}
								initialValues={MeasurementValues}>
								{({
									handleSubmit,
									handleChange,
									handleBlur,
									values,
									touched,
									isValid,
									errors,
								}) => (
									<Form noValidate onSubmit={handleSubmit}>
										<Row className='mb-3'>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikUsername'>
												<Form.Label>Shoulder</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Shoulder'
														aria-describedby='inputGroupPrepend'
														name='Shoulder'
														value={values.Shoulder}
														onChange={handleChange}
														isInvalid={!!errors.Shoulder}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.Shoulder}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikHipRound'>
												<Form.Label>Hip Round</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Hip Round'
														aria-describedby='inputGroupPrepend'
														name='HipRound'
														value={values.HipRound}
														onChange={handleChange}
														isInvalid={!!errors.HipRound}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.HipRound}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikArmhole'>
												<Form.Label>Arm hole</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Arm hole'
														aria-describedby='inputGroupPrepend'
														name='Armhole'
														value={values.Armhole}
														onChange={handleChange}
														isInvalid={!!errors.Armhole}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.Armhole}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikAnkleRound'>
												<Form.Label>Ankle Round</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Ankle Round'
														aria-describedby='inputGroupPrepend'
														name='AnkleRound'
														value={values.AnkleRound}
														onChange={handleChange}
														isInvalid={!!errors.AnkleRound}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.AnkleRound}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikBustRound'>
												<Form.Label>Bust Round</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Bust Round'
														aria-describedby='inputGroupPrepend'
														name='BustRound'
														value={values.BustRound}
														onChange={handleChange}
														isInvalid={!!errors.BustRound}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.BustRound}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikAcrossFront'>
												<Form.Label>Across Front</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Across Front'
														aria-describedby='inputGroupPrepend'
														name='AcrossFront'
														value={values.AcrossFront}
														onChange={handleChange}
														isInvalid={!!errors.AcrossFront}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.AcrossFront}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikCalfRound'>
												<Form.Label>Calf Round</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Calf Round'
														aria-describedby='inputGroupPrepend'
														name='CalfRound'
														value={values.CalfRound}
														onChange={handleChange}
														isInvalid={!!errors.CalfRound}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.CalfRound}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikUpperBustRound'>
												<Form.Label>Upper Bust Round</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Upper Bust Round'
														aria-describedby='inputGroupPrepend'
														name='UpperBustRound'
														value={values.UpperBustRound}
														onChange={handleChange}
														isInvalid={!!errors.UpperBustRound}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.UpperBustRound}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikWaistRound'>
												<Form.Label>Waist Round</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Waist Round'
														aria-describedby='inputGroupPrepend'
														name='WaistRound'
														value={values.WaistRound}
														onChange={handleChange}
														isInvalid={!!errors.WaistRound}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.WaistRound}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikUnderBustRound'>
												<Form.Label>Under Bust Round</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Under Bust Round'
														aria-describedby='inputGroupPrepend'
														name='UnderBustRound'
														value={values.UnderBustRound}
														onChange={handleChange}
														isInvalid={!!errors.UnderBustRound}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.UnderBustRound}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikThighRound'>
												<Form.Label>Thigh Round</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Thigh Round'
														aria-describedby='inputGroupPrepend'
														name='ThighRound'
														value={values.ThighRound}
														onChange={handleChange}
														isInvalid={!!errors.ThighRound}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.ThighRound}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikMidThighRound'>
												<Form.Label>Mid Thigh Round</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Mid Thigh Round'
														aria-describedby='inputGroupPrepend'
														name='MidThighRound'
														value={values.MidThighRound}
														onChange={handleChange}
														isInvalid={!!errors.MidThighRound}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.MidThighRound}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikKneeRound'>
												<Form.Label>Knee Round</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Knee Round'
														aria-describedby='inputGroupPrepend'
														name='KneeRound'
														value={values.KneeRound}
														onChange={handleChange}
														isInvalid={!!errors.KneeRound}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.KneeRound}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>

											<Form.Group
												as={Col}
												md='4'
												controlId='validationFormikLowWaistRound'>
												<Form.Label>Low Waist Round</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Low Waist Round'
														aria-describedby='inputGroupPrepend'
														name='LowWaistRound'
														value={values.LowWaistRound}
														onChange={handleChange}
														isInvalid={!!errors.LowWaistRound}
													/>
													<InputGroup.Text id='inputGroupPrepend'>
														In.
													</InputGroup.Text>
													<Form.Control.Feedback type='invalid'>
														{errors.LowWaistRound}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
										</Row>

										<div className='text-center mt-5 mb-4'>
											<Button
												variant='success'
												className='submit-button-meaurement'
												type='submit'>
												Confirm Measurements
											</Button>
											<Button
												variant='dark'
												className='submit-button-meaurement'
												onClick={props.onHide}>
												Close
											</Button>
										</div>
									</Form>
								)}
							</Formik>
						</Col>

						<Col sm={4} xs={12}>
							<div className=''>
								<h6>Select Color : {`rgba(${r},${g},${b},${a})`}</h6>

								<div
									className='mb-4'
									style={{
										backgroundColor: `rgba(${r},${g},${b},${a})`,
										width: "80%",
										height: 50,
										border: "2px solid white",
									}}></div>

								<SketchPicker
									className='w-75 mr-5'
									onChange={(color) => {
										setSketchPickerColor(color.rgb);
									}}
									color={sketchPickerColor}
								/>
							</div>
						</Col>
					</Row>
				</Modal.Body>
				{/* <Modal.Footer>
					<Button onClick={submit}>Submit</Button>
				</Modal.Footer> */}
			</Modal>
		</div>
	);
};
