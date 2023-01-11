import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { NavBar } from "../../navbar/NavBar";
import "./Bangles.css";

/**
 * @author
 * @function Bangles
 **/

export const Bangles = (props) => {
	const [JewelryList, setJewelryList] = useState([]);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get("jewelry/bangles");

			setJewelryList(data.data);
		};

		fetchData();
	}, []);
	return (
		<Container fluid>
			<NavBar />
			<Row className=' px-2 mt-5 mb-5'>
				{JewelryList.map((item, index) => {
					return (
						<Col key={index + "Bangles"} sm={4} className='mb-5 px-5'>
							<Card
								key={index + "BanglesCard"}
								className='jewelry-card-Bangles'>
								<Card.Img
									style={{ height: "30rem" }}
									variant='top'
									src={item.images}
								/>
								<Card.Body className=' jewelry-Bangles'>
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
