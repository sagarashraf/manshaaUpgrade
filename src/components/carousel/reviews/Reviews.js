import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import { ReviewsCard } from "./ReviewsCard";
import { ReviewsMap } from "./ReviewsMap";
import R1 from "../../../assets/images/Reviews/R1.jpg";
import R2 from "../../../assets/images/Reviews/R2.jpg";
import R3 from "../../../assets/images/Reviews/R3.jpg";
import R4 from "../../../assets/images/Reviews/R4.jpg";
import R5 from "../../../assets/images/Reviews/R5.jpg";
import S1 from "../../../assets/images/Reviews/Star1.jpg";
import S2 from "../../../assets/images/Reviews/Star2.jpg";
import S3 from "../../../assets/images/Reviews/Star3.jpg";
import S4 from "../../../assets/images/Reviews/Star4.jpg";
import S5 from "../../../assets/images/Reviews/Star5.jpg";
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
			<Row className='justify-content-center'>
				<Col md={12} xs={12} className='h-100'>
					<Slider {...settings}>
						{ReviewsMap.map((item, index) => {
							let Avatar;
							let Star;
							if (index == 0) {
								Avatar = R1;
								Star = S1;
							}
							if (index == 1) {
								Avatar = R2;
								Star = S2;
							}
							if (index == 2) {
								Avatar = R3;
								Star = S3;
							}
							if (index == 3) {
								Avatar = R4;
								Star = S4;
							}
							if (index == 4) {
								Avatar = R5;
								Star = S5;
							}
							return (
								<div>
									<ReviewsCard
										key={index}
										name={item.Name}
										avatars={Avatar}
										stars={Star}
										Des={item.Description}
									/>
								</div>
							);
						})}
					</Slider>
				</Col>
			</Row>
		</Container>
	);
};
