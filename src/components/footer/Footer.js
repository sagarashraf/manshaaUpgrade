import {
	faEnvelope,
	faPhone,
	faSeedling,
} from "@fortawesome/fontawesome-free-solid";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import "./Footer.css";

/**
 * @author
 * @function Footer
 **/

export const Footer = (props) => {
	return (
		<Card className='footer-theme'>
			<Card.Body>
				<Row className='pt-5 '>
					<Col sm={4} xs={12} className='text-center h-100'>
						<Image
							className='footer-image'
							src='https://i.ibb.co/sb7KpyP/Profile-Circle.jpg'></Image>
					</Col>
					<Col sm={4} xs={12} className='h-100 pt-3'>
						<div className='mb-2'>
							<Image
								style={{ marginRight: "15px" }}
								className='footer-image-icons'
								src={require("../../assets/images/tailor.png")}></Image>
							<span className='pl-5  footer-icon-text-fs'>
								Custom Tailoring
							</span>
						</div>
						<div className='mb-2'>
							<Image
								style={{ marginRight: "15px" }}
								className='footer-image-icons'
								src={require("../../assets/images/shipping.png")}></Image>
							<span className='pl-5    footer-icon-text-fs'>
								World Wide Shipping
							</span>
						</div>
						<div>
							<Image
								style={{ marginRight: "15px" }}
								className='footer-image-icons'
								src={require("../../assets/images/price.png")}></Image>
							<span className='pl-5  footer-icon-text-fs'>
								Best Prices Guaranteed
							</span>
						</div>
					</Col>
					<Col sm={4} xs={12} className='pt-4 h-100'>
						<div className='mb-3'>
							<Image
								style={{ marginRight: "15px" }}
								className='footer-icon-social'
								src={require("../../assets/images/instagram.png")}></Image>
							<span className='footer-icon-text-social'>Instagram</span>
						</div>
						<div className='mb-3'>
							<Image
								style={{ marginRight: "15px" }}
								className='footer-icon-social'
								src={require("../../assets/images/facebook.png")}></Image>
							<span className='footer-icon-text-social'>Facebook</span>
						</div>
						<div className='mb-3'>
							<Image
								style={{ marginRight: "15px" }}
								className='footer-icon-social'
								src={require("../../assets/images/email.png")}></Image>
							<span className='footer-icon-text-social'>
								Email: manshaa@gmail.com
							</span>
						</div>
						<div className='mb-2'>
							{" "}
							<Image
								style={{ marginRight: "15px" }}
								className='footer-icon-social'
								src={require("../../assets/images/phone.png")}></Image>
							<span className='footer-icon-text-social'>+(555) 555-1234</span>
						</div>{" "}
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};
