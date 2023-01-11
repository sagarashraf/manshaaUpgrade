import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./Brides.css";
import { Link } from "react-router-dom";
import Anime from "react-anime";
import { NavBar } from "../../navbar/NavBar";

/**
 * @author
 * @function Brides
 **/

export const Brides = (props) => {
	const [ClothsList, setClothsList] = useState([]);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get("women/bridal");

			setClothsList(data.data);
		};

		fetchData();
	}, []);
	return (
		<Container fluid>
			<NavBar />
			<Row className=' px-2 mt-5 mb-5'>
				{ClothsList.map((item, index) => {
					return (
						<Col key={index + "Brides"} sm={4} className='mb-5 px-5'>
							<Link to={`WomenDetails/${item.id}`}>
								<Anime
									easing='easeInSine'
									delay={(el, index) => index * 1040}
									scale={[0.01, 0.9]}>
									<Card key={index + "bridesCard"} className='main-card-brides'>
										<Card.Img
											style={{ height: "30rem" }}
											variant='top'
											src={item.images}
										/>
										<Card.Body className=' cloth-brides'>
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
