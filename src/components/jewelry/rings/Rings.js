import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./Rings.css";

/**
 * @author
 * @function Rings
 **/

export const Rings = (props) => {
	const [JewelryList, setJewelryList] = useState([]);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get("jewelry/rings");

			setJewelryList(data.data);
		};

		fetchData();
	}, []);
	return (
		<Container fluid>
			<Row className=' px-2 mt-5 mb-5'>
				{JewelryList.map((item, index) => {
					return (
						<Col key={index + "Rings"} sm={4} className='mb-5 px-5'>
							<Card key={index + "RingsCard"} className='jewelry-card-Rings'>
								<Card.Img
									style={{ height: "30rem" }}
									variant='top'
									src={item.images}
								/>
								<Card.Body className=' jewelry-Rings'>
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
