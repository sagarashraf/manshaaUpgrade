import React from "react";
import "./CarouselItems.css";
import { Container, Image } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
/**
 * @author
 * @function CarouselItems
 **/
export const CarouselItems = (props) => {
	return (
		<div>
			<Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
				<div>
					<img
						className='image-class '
						src='https://i.ibb.co/YPJ4Dvq/Amber-Mack-W-0039.jpg'
					/>
					<p className='legend'>Legend 1</p>
				</div>
				<div>
					<img
						className='image-class'
						src='https://i.ibb.co/XbMpyv7/Amber-Mack-W-0076.jpg'
					/>
					<p className='legend'>Legend 2</p>
				</div>
				<div>
					<img
						className='image-class'
						src='https://i.ibb.co/9pMqT6W/Banner1-2.jpg'
					/>
					<p className='legend'>Legend 3</p>
				</div>
			</Carousel>{" "}
		</div>
	);
};
