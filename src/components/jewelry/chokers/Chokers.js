import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./Chokers.css";

/**
 * @author
 * @function Chokers
 **/

export const Chokers = (props) => {
	const [JewelryList, setJewelryList] = useState([]);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get("jewelry/chokers");

			setJewelryList(data.data);
		};

		fetchData();
	}, []);
	return (
		<Container fluid>
			<Row className=' px-2 mt-5 mb-5'>
				{JewelryList.map((item, index) => {
					return (
						<Col key={index + "Chokers"} sm={4} className='mb-5 px-5'>
							<Card
								key={index + "ChokersCard"}
								className='jewelry-card-Chokers'>
								<Card.Img
									style={{ height: "30rem" }}
									variant='top'
									src={item.images}
								/>
								<Card.Body className=' jewelry-Chokers'>
									<Card.Text>
										<h6>{item.title}</h6>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
