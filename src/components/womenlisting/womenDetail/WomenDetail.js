import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ColorModal } from "../../common/ColorModal";
import { MeasurementModal } from "../../common/MeasurementModal";
import "../../menList/menDetails/MenDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/CartBucketAction";
import { Toaster, toast } from "react-hot-toast";
import { NavBar } from "../../navbar/NavBar";
/**
 * @author
 * @function WomenDetail
 **/

export const WomenDetail = (props) => {
	const result = useSelector((state) => state.MeasurementControl);
	console.log("redux full state of measure", result);
	const dispatched = useDispatch();
	const [details, setDetails] = useState([]);
	const [modalShow, setModalShow] = useState(false);
	const [measurementCheck, setmeasurementCheck] = useState(true);
	const params = useParams();

	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get(
				`http://localhost:5000/women/WomenDetails/${params.id}`
			);
			console.log(data);
			setDetails(data.data[0]);
		};

		fetchData();
	}, []);

	const checkMeasurement = () => {
		setmeasurementCheck(false);
		setModalShow(false);
	};

	const AddToCartDetails = (details) => {
		if (measurementCheck) {
			toast.error("Please Add Measurement First ");
		} else {
			console.log("redux full state of measure in function", result);
			let orderWithMesure = { ...details, ...result[0] };
			dispatched(addToCart(orderWithMesure));
		}
	};

	return (
		<>
			<NavBar />
			<Container>
				<Toaster position='top-center' reverseOrder={false} />
				<MeasurementModal
					cat={details.category}
					price={details.price}
					show={modalShow}
					title={details.title}
					des={details}
					onHide={() => setModalShow(false)}
					measurementflag={checkMeasurement}
				/>
				<Row className='my-5'>
					<Col lg={6} sm={12}>
						<Card className='card-detail-image'>
							<Card.Body className='text-center'>
								<Image
									className='image-class-detail'
									src={details.images}></Image>
							</Card.Body>
						</Card>
					</Col>
					<Col lg={6} sm={12}>
						<Card>
							<Card.Body>
								<div class='hr-sect'>
									<Image
										width={40}
										height={40}
										src={require("../../../assets/images/manshaa.png")}></Image>
								</div>
								<div className='ruler-class'>
									<span className='text-ruler'>{details.title}</span>
								</div>
								<Card.Text className='details-text'>
									{details.description}
								</Card.Text>
								<div className='d-flex justify-content-around mb-5 mt-2'>
									<Button
										onClick={() => setModalShow(true)}
										className='select-buttons-details '
										variant='secondary'>
										Add Measuremnt
									</Button>
									<Button
										onClick={() => AddToCartDetails(details)}
										className='select-buttons-details '
										variant='secondary'>
										Add to Cart $ {details.price}
									</Button>
								</div>

								<div class='hr-sect'>
									<Image
										width={40}
										height={40}
										src={require("../../../assets/images/manshaa.png")}></Image>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};
