import React from "react";
import { Container } from "react-bootstrap";
import { CarouselItems } from "../carousel/carouselItem/CarouselItems";
import { Reviews } from "../carousel/reviews/Reviews";
import { NavBar } from "../navbar/NavBar";
import { Threeoptions } from "../threeOptions/Threeoptions";

/**
 * @author
 * @function LandingPage
 **/

export const LandingPage = (props) => {
	return (
		<Container fluid>
			<NavBar />
			<CarouselItems />
			<Threeoptions />
			<Reviews />
		</Container>
	);
};
