import React from "react";
import { Container } from "react-bootstrap";
import { CarouselItems } from "./components/carousel/CarouselItems";
import { Reviews } from "./components/carousel/reviews/Reviews";
import { NavBar } from "./components/navbar/NavBar";
import { Threeoptions } from "./components/threeOptions/Threeoptions";

/**
 * @author
 * @function App
 **/

export const App = (props) => {
	return (
		<Container fluid>
			<NavBar />
			<CarouselItems />
			<Threeoptions />
			<Reviews />
		</Container>
	);
};
