import axios from "axios";
import React, { useEffect, useState } from "react";
import Anime from "react-anime";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavBar } from "../navbar/NavBar";
import "./MenList.css";
import LoadingScreen from "react-loading-screen";
import overlay from "../../assets/images/manshaa.png";

/**
 * @author
 * @function MenList
 **/

export const MenList = (props) => {
	const [menClothsList, setMenClothsList] = useState([]);
	const [loader, setLoader] = useState(true);
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get("Men/men");
			console.log(data.data);
			setMenClothsList(data.data);
			setTimeout(() => setLoader(false), 2000);
		};

		fetchData();
	}, []);
	return (
		<LoadingScreen
			loading={loader}
			bgColor='#b7a684'
			//spinnerColor='#86775f'
			//textColor='#86775f'
			logoSrc={overlay}
			text='MANSHAA'>
			<Container fluid>
				<NavBar />
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
		</LoadingScreen>
	);
};
