import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
/**
 * @author
 * @function Reviews
 **/

export const Reviews = (props) => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};
	return (
		<Container>
			<br />
			<br />
			<br />
			<br />
			<Row className='justify-content-center'>
				<Col xs={8}>
					<Slider {...settings}>
						<div>
							<img src='https://i.ibb.co/4S0Stp5/review1.png'></img>
						</div>
						<div>
							<img src='https://i.ibb.co/G97pWvr/review2.png'></img>
						</div>
						<div>
							<img src='https://i.ibb.co/LpygKPs/review3.png'></img>
						</div>
						<div>
							<img src='https://i.ibb.co/jZ1VY43/review4.png'></img>
						</div>
						<div>
							<img src='https://i.ibb.co/n8yDzp7/review5.png'></img>
						</div>
					</Slider>
				</Col>
			</Row>
		</Container>
	);
};
