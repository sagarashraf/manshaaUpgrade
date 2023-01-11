import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./MenSales.css";
import Anime from "react-anime";
import { Link } from "react-router-dom";
import { NavBar } from "../../navbar/NavBar";

/**
 * @author
 * @function MenSales
 **/

export const MenSales = (props) => {
	const [menClothsList, setMenClothsList] = useState([]);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get("men/menSale");

			setMenClothsList(data.data);
		};

		fetchData();
	}, []);
	return (
		<Container fluid>
			<NavBar />
			<Row className=' px-2 mt-5 mb-5'>
				{menClothsList.map((item, index) => {
					return (
						<Col key={index + "mensales"} sm={4} className='mb-5 px-5'>
							<Link to={`viewSalesDetails/${item.id}`}>
								<Anime
									easing='easeInSine'
									delay={(el, index) => index * 1040}
									scale={[0.01, 0.9]}>
									<Card
										key={index + "menCard"}
										className='main-card-listing-sales'>
										<Card.Img
											style={{ height: "30rem" }}
											variant='top'
											src={item.images}
										/>
										<Card.Body className=' cloth-name-sales'>
											<Card.Text>
												<h6>{item.title}</h6>
											</Card.Text>
										</Card.Body>
									</Card>
								</Anime>
							</Link>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
