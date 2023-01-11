import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	Card,
	Container,
	Table,
	Row,
	Button,
	Accordion,
	ListGroup,
	Modal,
	Col,
} from "react-bootstrap";
import { Toaster, toast } from "react-hot-toast";
import { OrderDetail } from "../OrderDetail/OrderDetail";
import { faCheck } from "@fortawesome/fontawesome-free-solid";
/**
 * @author
 * @function OrdersList
 **/

export const OrdersList = (props) => {
	const [OrderList, setOrderList] = useState([]);
	const [Orderdetail, setOrderdetail] = useState([]);
	const [Orderdetailcom, setOrderdetailcom] = useState({});
	const [modalShow, setModalShow] = useState(false);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get("/Carts/fetchOrders");
			console.log("dffd", data);
			if (data.status == 200) {
				toast.success("Order List fetched successfully");
				setOrderList(data.data);
			} else {
				toast.error("Unable to fetch orders list. try again");
			}
		};

		fetchData();
	}, []);
	const getDetails = (item) => {
		console.log(item);
		setOrderdetailcom(item);
		setOrderdetail(JSON.parse(item.Items));
		setModalShow(true);
	};

	return (
		<Container>
			<Toaster position='top-center' reverseOrder={false} />
			<Modal show={modalShow} onHide={() => setModalShow(false)} fullscreen>
				<Modal.Header
					className='justify-content-center border-0'
					style={{ backgroundColor: "gray" }}
					closeButton></Modal.Header>
				<Modal.Body style={{ backgroundColor: "gray" }}>
					<div className='text-center text-white fw-bolder'>
						<h5> Customer Name: {Orderdetailcom.firstName}</h5>
					</div>
					<Container>
						<Accordion>
							{Orderdetail?.map((item, index) => {
								console.log(item);
								return (
									<Accordion.Item key={index} eventKey={index}>
										<Accordion.Header>
											<span
												style={{ marginRight: "10px" }}
												className='mr-3 fw-bold'>
												{index}.{" "}
											</span>
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
													<Card className='h-100'>
														<Card.Body>
															<p className='fw-bold mb-0'>Color</p>
															<p
																className='mb-0'
																style={{
																	backgroundColor: item.color,
																	height: "30px",
																}}></p>
															<p className='fw-bold mb-0'> Category</p>
															<p className='mb-1'>{item.category}</p>
															<p className='fw-bold mb-0'> Description</p>
															<p className='mb-1'>{item.description}</p>
														</Card.Body>
													</Card>
												</Col>
												<Col md={3} sm={12}>
													<Card>
														<Card.Img
															style={{ height: "285px" }}
															variant='top'
															src={item.images}
														/>
													</Card>
												</Col>
											</Row>
										</Accordion.Body>
									</Accordion.Item>
								);
							})}
						</Accordion>
					</Container>
				</Modal.Body>
			</Modal>

			<Row className='mt-3'>
				<Card className='text-center bg-dark text-white'>
					<Card.Body>
						<h3>ORDERS LIST</h3>
					</Card.Body>
				</Card>
			</Row>
			<Table className='mb-5'>
				<thead>
					<tr>
						<th>No</th>
						<th>Order#</th>
						<th>Order Date</th>
						<th>Customer Name</th>
						<th>Customer#</th>
						<th>Total Amount</th>
						<th>Order Status</th>
						<th>View Detail</th>
					</tr>
				</thead>
				{OrderList.map((item, index) => {
					let array = JSON.parse(item.Items);
					let t = array.reduce((total, obj) => obj.price + total, 0);
					return (
						<tbody className='bg-white'>
							<tr>
								<td>{index + 1}</td>
								<td>{item.OrderID}</td>
								<td>{new Date(item.OrderDate).toLocaleDateString()}</td>
								<td className='text-success'>{item.firstName}</td>
								<td className='text-success'>{item.phone}</td>
								<td className='text-success'>$ {t}</td>
								<td className='text-success'>
									<FontAwesomeIcon className='text-success' icon={faCheck} />
									{item.OrderStatus}
								</td>
								<td className='text-success'>
									<>
										<Button
											variant='secondary'
											onClick={() => getDetails(item)}
											className='me-2 mb-2'>
											View Details
										</Button>
									</>
								</td>
							</tr>
						</tbody>
					);
				})}
			</Table>
		</Container>
	);
};
