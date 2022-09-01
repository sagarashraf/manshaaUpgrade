import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ColorModal } from "../../common/ColorModal";
import { MeasurementModal } from "../../common/MeasurementModal";
import "./MenDetails.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/CartBucketAction";
/**
 * @author
 * @function MenDetails
 **/

export const MenDetails = (props) => {
	const dispatched = useDispatch();
	const [details, setDetails] = useState([]);
	const [modalShow, setModalShow] = useState(false);
	const params = useParams();

	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get(
				`http://localhost:5000/men/menDetails/${params.id}`
			);
			console.log(data);
			setDetails(data.data[0]);
		};

		fetchData();
	}, []);

	return (
		<Container>
			<MeasurementModal show={modalShow} onHide={() => setModalShow(false)} />
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
									onClick={() => dispatched(addToCart(details))}
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
	);
};
