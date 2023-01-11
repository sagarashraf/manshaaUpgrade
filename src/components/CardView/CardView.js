import React, { useState } from "react";
import { Container, Table, Button, Modal, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openRegistration } from "../../redux/SignUpModalAction";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavBar } from "../navbar/NavBar";
import { removeToCart } from "../../redux/CartBucketAction";

/**
 * @author
 * @function CardView
 **/
export const CardView = (props) => {
	const [confirm, setconfirm] = useState(false);
	const result = useSelector((state) => state.cartBucket);
	console.log("redux full state view cart", result);
	let navigate = useNavigate();

	const dispatched = useDispatch();
	const placeOrder = async () => {
		let session = JSON.parse(sessionStorage.getItem("userManagement"));
		console.log(session);
		console.log(result);
		let orderList = await JSON.stringify(result);
		if (session) {
			let obj = {
				OrderStatus: "Confirmed",
				OrderDate: new Date(),
				Items: JSON.stringify(result),
				userId: session[0].userId,
			};
			console.log(obj);
			let respotn = await axios.post(
				"http://localhost:5000/Carts/saveOrder",
				obj
			);
			setconfirm(true);
			console.log("respotn", respotn.data);
		} else {
			dispatched(openRegistration());
		}
	};

	const removeItem = (index) => {
		dispatched(removeToCart(index));
	};

	const goBackHome = () => {
		setconfirm(false);
		window.location.href = "/";
	};

	return (
		<Container fluid>
			<NavBar />

			<Modal
				size='md'
				show={confirm}
				aria-labelledby='example-modal-sizes-title-sm'>
				<Modal.Header className='text-center justify-content-center'>
					<Modal.Title id='example-modal-sizes-title-sm'>Thank you</Modal.Title>
				</Modal.Header>
				<Modal.Body className='text-center'>
					<img
						height={150}
						src={require("../../assets/images/Confirmed.gif")}></img>
					<h4>Order Confirmed!</h4>
				</Modal.Body>
				<div className='text-center mb-3'>
					<Button onClick={goBackHome} variant='success'>
						Redirect to Home Page
					</Button>
				</div>
			</Modal>
			<Card className='text-center bg-dark text-white mt-5'>
				<Card.Body>
					<h3>CART DETAIL</h3>
				</Card.Body>
			</Card>
			<Table
				style={{ backgroundColor: "white" }}
				className='fw-bolder'
				striped
				hover
				responsive
				size='large'>
				<thead style={{ backgroundColor: "lightgray" }}>
					<tr>
						<th>No#</th>
						<th>Product Name</th>
						<th>Category</th>
						<th>Description</th>
						<th>Discount Applied</th>
						<th>Final Price</th>
						<th className='text-danger'></th>
					</tr>
				</thead>
				<tbody>
					{result.map((item, index) => {
						return (
							<tr>
								<td>{index + 1}</td>
								<td>{item.title}</td>
								<td>{item.category}</td>
								<td className='text-success'>{item.description}</td>
								<td className='text-error'>0%</td>
								<td className='text-success'>$ {item.price}</td>
								<td className='text-danger'>
									<Button onClick={() => removeItem(item.id)} variant='danger'>
										x
									</Button>
								</td>
							</tr>
						);
					})}

					<tr>
						<td colSpan='4'>Total Items: {result.length}</td>
						<td>Grand Total:</td>
						<td colSpan='5'>
							$ {result.reduce((total, obj) => obj.price + total, 0)}
						</td>
					</tr>
				</tbody>
			</Table>
			<div className='text-center mb-3'>
				<Button variant='success' onClick={placeOrder}>
					<h5>Place an Order</h5>
				</Button>
			</div>
		</Container>
	);
};
