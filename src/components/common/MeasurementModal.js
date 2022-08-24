import React from "react";
import { Modal, Button, Row, Col, InputGroup, Form } from "react-bootstrap";
import { ColorModal } from "./ColorModal";
import "./MeasurementModal.css";
/**
 * @author
 * @function MeasurementModal
 **/

export const MeasurementModal = (props) => {
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
							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Shoulder:{" "}
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Armhole:
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Bust Round:
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>

							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Calf Round:
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Waist Round:{" "}
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Thigh Round:{" "}
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Knee Round:
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
						</Col>
						<Col sm={4} xs={12}>
							<h6 className='mb-4'>Please Enter your Measurements!</h6>

							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Hip Round:{" "}
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Ankle Round:{" "}
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>

							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Across Front:{" "}
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>

							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Upper Bust Round:{" "}
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Under Bust Round:{" "}
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Mid Thigh Round:{" "}
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>

							<InputGroup className='mb-3'>
								<InputGroup.Text
									className='width-custom-class'
									id='basic-addon1'>
									Low Waist Round:{" "}
								</InputGroup.Text>
								<Form.Control
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
								<InputGroup.Text id='basic-addon2'>in.</InputGroup.Text>
							</InputGroup>
						</Col>
						<Col sm={4} xs={12}>
							<ColorModal />
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
