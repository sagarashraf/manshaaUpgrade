import React, { useState } from "react";
import {
	Button,
	Col,
	Container,
	Row,
	Table,
	Accordion,
	ListGroup,
	Modal,
} from "react-bootstrap";
/**
 * @author
 * @function OrderDetail
 **/

export const OrderDetail = (props) => {
	const [data, setData] = useState([]);

	// const buttonHandle = async () => {
	// 	await props.showhandle();
	// 	console.log("====?", JSON.parse(props.data));
	// 	await setData(JSON.parse(props.data));
	// };
	return (
		<>
			<Button
				variant='secondary'
				//	onClick={() => setModalShow(true)}
				className='me-2 mb-2'>
				View Details
			</Button>
			{/* <Modal show={modalShow} onHide={() => setModalShow(false)} fullscreen>
				<Modal.Header closeButton>
					<Modal.Title>Modal</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{JSON.parse(props.data)?.map((item, index) => {
						return (
							<Container>
								<Accordion>
									<Accordion.Item eventKey={index}>
										<Accordion.Header>
											<div className='fw-bolder'>
												<div>Title: {item.title}</div>
												<div className='text-danger'>Price: $ {item.price}</div>
											</div>
										</Accordion.Header>
										<Accordion.Body>
											<Row>
												<Col md={3} sm={12}>
													<ListGroup>
														<ListGroup.Item>
															Across Front: {item.AcrossFront}
														</ListGroup.Item>
														<ListGroup.Item>
															Ankle Round:{item.AnkleRound}
														</ListGroup.Item>
														<ListGroup.Item>
															Armhole:{item.Armhole}
														</ListGroup.Item>
														<ListGroup.Item>
															Bust Round:{item.BustRound}
														</ListGroup.Item>
														<ListGroup.Item>
															Calf Round:{item.CalfRound}
														</ListGroup.Item>
														<ListGroup.Item>
															Hip Round:{item.HipRound}
														</ListGroup.Item>
														<ListGroup.Item>
															Knee Round:{item.KneeRound}
														</ListGroup.Item>
													</ListGroup>
												</Col>
												<Col md={3} sm={12}>
													<ListGroup>
														<ListGroup.Item>
															LowWaist Round: {item.LowWaistRound}
														</ListGroup.Item>
														<ListGroup.Item>
															MidThigh Round: {item.MidThighRound}
														</ListGroup.Item>
														<ListGroup.Item>
															Shoulder: {item.Shoulder}
														</ListGroup.Item>
														<ListGroup.Item>
															Thigh Round: {item.ThighRound}
														</ListGroup.Item>
														<ListGroup.Item>
															UnderBust Round: {item.UnderBustRound}
														</ListGroup.Item>
														<ListGroup.Item>
															UpperBust Round: {item.UpperBustRound}
														</ListGroup.Item>
														<ListGroup.Item>
															Waist Round: {item.WaistRound}
														</ListGroup.Item>
													</ListGroup>
												</Col>

												<Col md={3} sm={12}>
													<ListGroup>
														<ListGroup.Item>Cras justo odio</ListGroup.Item>
														<ListGroup.Item>
															Dapibus ac facilisis in
														</ListGroup.Item>
														<ListGroup.Item>Morbi leo risus</ListGroup.Item>
														<ListGroup.Item>
															Porta ac consectetur ac
														</ListGroup.Item>
														<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
													</ListGroup>
												</Col>
												<Col md={3} sm={12}>
													<ListGroup>
														<ListGroup.Item>Cras justo odio</ListGroup.Item>
														<ListGroup.Item>
															Dapibus ac facilisis in
														</ListGroup.Item>
														<ListGroup.Item>Morbi leo risus</ListGroup.Item>
														<ListGroup.Item>
															Porta ac consectetur ac
														</ListGroup.Item>
														<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
													</ListGroup>
												</Col>
											</Row>
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</Container>
						);
					})}
				</Modal.Body>
			</Modal> */}
		</>
	);
};
