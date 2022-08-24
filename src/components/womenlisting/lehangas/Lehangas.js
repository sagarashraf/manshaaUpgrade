import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./Lehangas.css";

/**
 * @author
 * @function Lehangas
 **/

export const Lehangas = (props) => {
	const [ClothsList, setClothsList] = useState([]);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get("women/lehenga");

			setClothsList(data.data);
		};

		fetchData();
	}, []);
	return (
		<Container fluid>
			<Row className=' px-2 mt-5 mb-5'>
				{ClothsList.map((item, index) => {
					return (
						<Col key={index + "Lehangas"} sm={4} className='mb-5 px-5'>
							<Card key={index + "LehangasCard"} className='main-card-Lehangas'>
								<Card.Img
									style={{ height: "30rem" }}
									variant='top'
									src={item.images}
								/>
								<Card.Body className=' cloth-Lehangas'>
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
