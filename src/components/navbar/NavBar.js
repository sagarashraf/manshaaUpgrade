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
	faCartArrowDown,
	faCartPlus,
} from "@fortawesome/fontawesome-free-solid";
import "./NavBar.css";
import { navigationPaths } from "../../constants/navigation";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Register } from "../register/Register";
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
	const result1 = useSelector((state) => state.RegistrationModalState);
	console.log("modal full state", result1);
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
								<select
									className='dropdown-design '
									onChange={(event) => handleChange(event.target.value)}>
									<option disabled selected>
										Men Collections
									</option>
									{navigationPaths.menURLs.map((item, index) => {
										return <option value={item.url}>{item.LABEL}</option>;
									})}
								</select>
								<select
									className='dropdown-design '
									onChange={(event) => handleChange(event.target.value)}>
									<option disabled selected>
										Women Collections
									</option>
									{navigationPaths.womenURLs.map((item, index) => {
										return <option value={item.url}>{item.LABEL}</option>;
									})}
								</select>
								<select
									className='dropdown-design '
									onChange={(event) => handleChange(event.target.value)}>
									<option disabled selected>
										Jewelry Collections
									</option>
									{navigationPaths.jewelryURLs.map((item, index) => {
										return <option value={item.url}>{item.LABEL}</option>;
									})}
								</select>

								<div className='ml-5 d-flex pt-2'>
									<div style={{ width: "200px" }}>
										<div className='mb-0 fw-bold '>
											<FontAwesomeIcon
												size='lg'
												style={{ color: "white" }}
												icon={faCartPlus}
											/>{" "}
											{" " + result.length} Items
										</div>
									</div>

									{result.length != 0 && (
										<div className='w-50'>
											<Link style={{ color: "white" }} to={"/CartView"}>
												{" "}
												<FontAwesomeIcon
													size='lg'
													style={{ color: "white" }}
													icon={faCartArrowDown}
												/>{" "}
												View Cart
											</Link>
										</div>
									)}
									<div className='w-50'>
										<Register />
									</div>
								</div>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};
