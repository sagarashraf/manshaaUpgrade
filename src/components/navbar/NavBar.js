import React from "react";
import {
	Container,
	Navbar,
	Offcanvas,
	Nav,
	NavDropdown,
	Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartPlus } from "@fortawesome/fontawesome-free-solid";
import "./NavBar.css";

/**
 * @author
 * @function NavBar
 **/

export const NavBar = (props) => {
	return (
		<>
			<Navbar bg='light' expand='md' className='mb-3 pt-3'>
				<Container fluid>
					<Navbar.Brand href='#'>
						<Image
							style={{ marginTop: "-17px" }}
							width={50}
							height={40}
							fluid
							src={require("../../assets/images/manshaa.png")}></Image>
						<span>
							{" "}
							<b className>ANSHAA </b>
						</span>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xs`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-xs`}
						aria-labelledby={`offcanvasNavbarLabel-expand-xs`}
						placement='end'>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-xs`}>
								<b>MANSHAA </b>
								<Image
									width={50}
									height={50}
									fluid
									src={require("../../assets/images/manshaa.png")}></Image>
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='justify-content-center flex-grow-1 pe-3'>
								<NavDropdown
									style={{ right: "30px" }}
									title='Men COLLECTIONS'
									id={`offcanvasNavbarDropdown-expand-xs`}>
									<NavDropdown.Item className='text-center' href='#action3'>
										MEN WEAR
									</NavDropdown.Item>
									<NavDropdown.Item className='text-center' href='#action4'>
										SALE
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown
									title='WOMEN COLLECTIONS'
									id={`offcanvasNavbarDropdown-expand-xs`}>
									<NavDropdown.Item className='text-center' href='#action3'>
										BRIDAL
									</NavDropdown.Item>
									<NavDropdown.Item className='text-center' href='#action4'>
										BRIDAL
									</NavDropdown.Item>

									<NavDropdown.Item className='text-center' href='#action5'>
										SUITS
									</NavDropdown.Item>
									<NavDropdown.Item className='text-center' href='#action5'>
										LEHANGAS
									</NavDropdown.Item>
									<NavDropdown.Item className='text-center' href='#action5'>
										GHARARAS
									</NavDropdown.Item>
									<NavDropdown.Item className='text-center' href='#action5'>
										BRIDESMAIDS
									</NavDropdown.Item>
									<NavDropdown.Item className='text-center' href='#action5'>
										SALE
									</NavDropdown.Item>
								</NavDropdown>
								<NavDropdown
									style={{ left: "30px" }}
									title='JEWELRY COLLECTIONS'
									id={`offcanvasNavbarDropdown-expand-xs`}>
									<NavDropdown.Item className='text-center' href='#action3'>
										CHOKERS
									</NavDropdown.Item>
									<NavDropdown.Item className='text-center' href='#action4'>
										NECKLACE
									</NavDropdown.Item>
									<NavDropdown.Item className='text-center' href='#action5'>
										EARINGS
									</NavDropdown.Item>
									<NavDropdown.Item className='text-center' href='#action5'>
										BANGLES
									</NavDropdown.Item>
									<NavDropdown.Item className='text-center' href='#action5'>
										RINGS
									</NavDropdown.Item>
									<NavDropdown.Item className='text-center' href='#action5'>
										MATHA PATTI & MANGTIKKA
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};
