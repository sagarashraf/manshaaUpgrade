import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./Threeoptions.css";

/**
 * @author
 * @function Threeoptions
 **/

export const Threeoptions = (props) => {
	return (
		<div>
			<br />
			<hr />
			<br />
			<br />
			<Row className='text-center justify-content-center'>
				<Col sm={4} xs={11} className='px-md-5 px-sm-1 mb-5'>
					{" "}
					<Card className='h-100 card-design'>
						<Card.Img
							className='h-100'
							variant='top'
							src='https://i.ibb.co/grcF585/9-B120447-4-E2-B-45-BA-9801-BCCD2-E4-AF8-D8.jpg'
						/>
						<Card.Body>
							<Card.Text>
								<h6>Bold</h6>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={4} xs={11} className='px-md-5 px-sm-1 mb-5'>
					<Card className='h-100 card-design'>
						<Card.Img
							className='h-100'
							variant='top'
							src='https://i.ibb.co/T0HGrtd/1.jpg'
						/>
						<Card.Body>
							<Card.Text>
								<h6>Traditional</h6>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col sm={4} xs={11} className='px-md-5 px-sm-1 mb-5'>
					<Card className='h-100 card-design'>
						<Card.Img
							className='h-100'
							variant='top'
							src='https://i.ibb.co/CzN9Dtj/IMG-7274.jpg'
						/>
						<Card.Body>
							<Card.Text>
								<h6>Fusion</h6>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
};
