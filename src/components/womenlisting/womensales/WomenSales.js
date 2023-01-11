import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { NavBar } from "../../navbar/NavBar";
import "./WomenSales.css";

/**
 * @author
 * @function WomenSales
 **/

export const WomenSales = (props) => {
	const [ClothsList, setClothsList] = useState([]);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get("women/womenSale");
			console.log(data);
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
						<Col key={index + "WomenSales"} sm={4} className='mb-5 px-5'>
							<Card
								key={index + "WomenSalesCard"}
								className='main-card-WomenSales'>
								<Card.Img
									style={{ height: "30rem" }}
									variant='top'
									src={item.images}
								/>
								<Card.Body className=' cloth-WomenSales'>
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
