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
import {
	faUser,
	faCartPlus,
	faCartArrowDown,
} from "@fortawesome/fontawesome-free-solid";
import "./NavBar.css";
import { navigationPaths } from "../../constants/navigation";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
/**
 * @author
 * @function NavBar
 **/
export const NavBar = (props) => {
	const nagivate = useNavigate();

	function handleChange(value) {
		nagivate(value);
	}
	const result = useSelector((state) => state.cartBucket);
	console.log("redux full state", result);
	return (
		<>
			<Navbar expand='md' className='mb-3 pt-3 nav-color'>
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
							<Nav className='justify-content-around flex-grow-1 pe-3'>
								<select onChange={(event) => handleChange(event.target.value)}>
									<option disabled selected>
										Men Collections
									</option>
									{navigationPaths.menURLs.map((item, index) => {
										return <option value={item.url}>{item.LABEL}</option>;
									})}
								</select>
								<select onChange={(event) => handleChange(event.target.value)}>
									<option disabled selected>
										Women Collections
									</option>
									{navigationPaths.womenURLs.map((item, index) => {
										return <option value={item.url}>{item.LABEL}</option>;
									})}
								</select>
								<select onChange={(event) => handleChange(event.target.value)}>
									<option disabled selected>
										Jewelry Collections
									</option>
									{navigationPaths.jewelryURLs.map((item, index) => {
										return <option value={item.url}>{item.LABEL}</option>;
									})}
								</select>

								<div className='ml-5 d-flex '>
									<div style={{ width: "200px" }}>
										<FontAwesomeIcon
											size='lg'
											style={{ color: "white" }}
											icon={faCartArrowDown}
										/>
										{" " + result.length} items
									</div>
									<div className='w-50'>dsfs</div>
								</div>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};
