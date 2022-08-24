import React from "react";
import { Card, Row, Image, Col } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./ReviewsCard.css";
/**
 * @author
 * @function ReviewsCard
 **/

export const ReviewsCard = (props) => {
	console.log(props.avatars);
	let URL = props.avatars;
	return (
		<Row>
			<Col>
				<Card className='mb-5 mt-4 card-height-review'>
					<Card.Header className='card-header'>
						<h5>{props.name}</h5>
					</Card.Header>
					<SimpleBar style={{ maxHeight: 350 }}>
						<Card.Body>
							<Card.Text>
								<Row>
									<Col sm={3} xs={12}>
										<Image src={URL}></Image>
									</Col>
									<Col sm={9} xs={12}>
										<Image src={props.stars}></Image>
										<br />
										{props.Des}
									</Col>
								</Row>
							</Card.Text>
						</Card.Body>
					</SimpleBar>
				</Card>
			</Col>
		</Row>
	);
};
