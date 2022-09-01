import axios from "axios";
import React, { useEffect, useState } from "react";
import Anime from "react-anime";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MenList.css";

/**
 * @author
 * @function MenList
 **/

export const MenList = (props) => {
	const [menClothsList, setMenClothsList] = useState([]);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get("Men/men");
			console.log(data.data);
			setMenClothsList(data.data);
		};

		fetchData();
	}, []);
	return (
		<Container fluid>
			<Row className=' px-2 mt-5 mb-5'>
				{menClothsList.map((item, index) => {
					return (
						<Col key={index + "menCloth"} sm={4} className='mb-5 px-5'>
							<Link to={`viewDetails/${item.id}`}>
								<Anime
									easing='easeInSine'
									delay={(el, index) => index * 1040}
									scale={[0.01, 0.9]}>
									<Card key={index + "menCard"} className='main-card-listing'>
										<Card.Img
											style={{ height: "30rem" }}
											variant='top'
											src={item.images}
										/>
										<Card.Body className=' cloth-name'>
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
