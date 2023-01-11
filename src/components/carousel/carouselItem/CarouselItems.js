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
		<div className='mt-5'>
			<Carousel
				className='slide-styling'
				autoPlay={true}
				showThumbs={false}
				infiniteLoop={true}>
				<div>
					<img
						className='image-class '
						src='https://i.ibb.co/YPJ4Dvq/Amber-Mack-W-0039.jpg'
					/>
				</div>
				<div>
					<img
						className='image-class'
						src='https://i.ibb.co/XbMpyv7/Amber-Mack-W-0076.jpg'
					/>
				</div>
				<div>
					<img
						className='image-class'
						src='https://i.ibb.co/9pMqT6W/Banner1-2.jpg'
					/>
				</div>
			</Carousel>{" "}
		</div>
	);
};
