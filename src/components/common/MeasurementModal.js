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
import { useDispatch } from "react-redux";
import { getMeasurement } from "../../redux/MeasurementAction";
/**
 * @author
 * @function MeasurementModal
 **/
export const MeasurementModal = (props) => {
	const dispatched = useDispatch();
	const [sketchPickerColor, setSketchPickerColor] = useState({
		r: "241",
		g: "112",
		b: "19",
		a: "1",
	});
	const { r, g, b, a } = sketchPickerColor;
	const [Summary, setSummary] = useState(false);
	const [Shoulder, setShoulder] = useState("");
	const [Armhole, setArmhole] = useState("");
	const [BustRound, setBustRound] = useState("");
	const [CalfRound, setCalfRound] = useState("");
	const [WaistRound, setWaistRound] = useState("");
	const [ThighRound, setThighRound] = useState("");
	const [KneeRound, setKneeRound] = useState("");
	const [HipRound, setHipRound] = useState("");
	const [AnkleRound, setAnkleRound] = useState("");
	const [AcrossFront, setAcrossFront] = useState("");
	const [UpperBust, setUpperBust] = useState("");
	const [UnderBust, setUnderBust] = useState("");
	const [MidThigh, setMidThigh] = useState("");
	const [LowWaist, setLowWaist] = useState("");
	const submit = () => {
		let obj = {
			Shoulder: Shoulder,
			Armhole: Armhole,
			BustRound: BustRound,
			CalfRound: CalfRound,
			WaistRound: WaistRound,
			ThighRound: ThighRound,
			KneeRound: KneeRound,
			HipRound: HipRound,
			AnkleRound: AnkleRound,
			AcrossFront: AcrossFront,
			UpperBust: UpperBust,
			UnderBust: UnderBust,
			MidThigh: MidThigh,
			LowWaist: LowWaist,
			Color: `rgba(${r},${g},${b},${a})`,
		};
		dispatched(getMeasurement(obj));
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
						Add Measurement
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col sm={4} xs={12}>
							<h6 className='mb-4'>Please Enter your Measurements!</h6>
							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Shoulder:{" "}
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setShoulder(e.target.value)}
									type='number'
									value={Shoulder}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Armhole:
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setArmhole(e.target.value)}
									type='number'
									value={Armhole}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Bust Round:
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setBustRound(e.target.value)}
									type='number'
									value={BustRound}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>

							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Calf Round:
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setCalfRound(e.target.value)}
									type='number'
									value={CalfRound}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Waist Round:{" "}
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setWaistRound(e.target.value)}
									type='number'
									value={WaistRound}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Thigh Round:{" "}
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setThighRound(e.target.value)}
									type='number'
									value={ThighRound}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Knee Round:
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setKneeRound(e.target.value)}
									type='number'
									value={KneeRound}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
						</Col>
						<Col sm={4} xs={12}>
							<h6 className='mb-4'>Please Enter your Measurements!</h6>

							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Hip Round:{" "}
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setHipRound(e.target.value)}
									type='number'
									value={HipRound}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Ankle Round:{" "}
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setAnkleRound(e.target.value)}
									type='number'
									value={AnkleRound}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>

							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Across Front:{" "}
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setAcrossFront(e.target.value)}
									type='number'
									value={AcrossFront}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>

							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Upper Bust Round:{" "}
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setUpperBust(e.target.value)}
									type='number'
									value={UpperBust}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Under Bust Round:{" "}
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setUnderBust(e.target.value)}
									type='number'
									value={UnderBust}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Mid Thigh Round:{" "}
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setMidThigh(e.target.value)}
									type='number'
									value={MidThigh}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>

							<InputGroup className='mb-4'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Low Waist Round:{" "}
								</InputGroup.Text>
								<Form.Control
									onChange={(e) => setLowWaist(e.target.value)}
									type='number'
									value={LowWaist}
									min='0.1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
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
					<Row>
						<Col>
							{Summary && (
								<Form.Group
									className='mb-3'
									controlId='exampleForm.ControlTextarea1'>
									<Form.Label>Measurement Summary</Form.Label>
									<Card>
										<Card.Body>
											<Row>
												<Col sm={4} xs={12}>
													Shoulder: {Shoulder}
												</Col>
												<Col sm={4} xs={12}>
													Armhole: {Armhole}
												</Col>
												<Col sm={4} xs={12}>
													BustRound: {BustRound}
												</Col>
												<Col sm={4} xs={12}>
													CalfRound: {CalfRound}
												</Col>
												<Col sm={4} xs={12}>
													WaistRound: {WaistRound}
												</Col>
												<Col sm={4} xs={12}>
													ThighRound: {ThighRound}
												</Col>
												<Col sm={4} xs={12}>
													KneeRound: {KneeRound}
												</Col>
												<Col sm={4} xs={12}>
													HipRound: {HipRound}
												</Col>
												<Col sm={4} xs={12}>
													AnkleRound: {AnkleRound}
												</Col>
												<Col sm={4} xs={12}>
													AcrossFront: {AcrossFront}
												</Col>
												<Col sm={4} xs={12}>
													UpperBust: {UpperBust}
												</Col>
												<Col sm={4} xs={12}>
													UnderBust: {UnderBust}
												</Col>
												<Col sm={4} xs={12}>
													MidThigh: {MidThigh}
												</Col>
												<Col sm={4} xs={12}>
													LowWaist: {LowWaist}
												</Col>
												<Col sm={4} xs={12} className='d-flex '>
													<div>Color: </div>
													<div
														className='mb-4 ml-5'
														style={{
															backgroundColor: `rgba(${r},${g},${b},${a})`,
															width: "50%",
															height: 25,
															border: "2px solid white",
														}}></div>
												</Col>
											</Row>
										</Card.Body>
									</Card>
								</Form.Group>
							)}
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
					<Button onClick={() => setSummary(true)}>View Summary</Button>
					<Button onClick={submit}>Submit</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
