import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
	Form,
	Button,
	InputGroup,
	Row,
	Col,
	Card,
	Container,
	Image,
	Modal,
	OverlayTrigger,
	Popover,
	ListGroup,
} from "react-bootstrap";
import * as yup from "yup";
import "./Register.css";
import { useSelector, useDispatch } from "react-redux";
import { schema } from "./registrationSchema";
import {
	openRegistration,
	closeRegistration,
} from "../../redux/SignUpModalAction";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/fontawesome-free-solid";

/**
 * @author
 * @function Register
 **/

const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	phone: "",
};

export const Register = (props) => {
	const dispatched = useDispatch();
	const [Usertag, setUsertag] = useState(false);
	const [UserName, setUserName] = useState("");
	const [ifLoginPress, setLoginPress] = useState(false);

	useEffect(() => {
		let session = sessionStorage.getItem("userManagement");
		console.log(JSON.parse(session));
		if (session) {
			let userData = JSON.parse(session);
			setUserName(userData[0].firstName);
			setUsertag(true);
		} else {
			setUsertag(false);
		}
	}, [Usertag]);
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues,
			validationSchema: schema,
			onSubmit: async (values, action) => {
				console.log("values", values);
				let respotn = await axios.post(
					"http://localhost:5000/api/v1/register",
					values
				);
				console.log("respotn", respotn.data);
				await sessionStorage.setItem(
					"userManagement",
					JSON.stringify(respotn.data)
				);
				UserNamehandler();
				dispatched(closeRegistration());
				action.resetForm();
			},
		});
	console.log("errors", errors);
	const result = useSelector((state) => state.RegistrationModalState);
	console.log("modal full state", result);
	const Logout = () => {
		sessionStorage.clear();
		setUsertag(false);
	};

	const UserNamehandler = () => {
		setUsertag(true);
		let session = sessionStorage.getItem("userManagement");
		console.log(JSON.parse(session));
		let userData = JSON.parse(session);
		setUserName(userData[0].firstName);
	};
	const [inputs, setInputs] = useState({});
	const [tag, settag] = useState("REGISTRATION FORM");

	const handleChangeLogin = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmitLogin = async (event) => {
		event.preventDefault();
		console.log(inputs);
		let respotn = await axios.post(
			"http://localhost:5000/api/v1/login",
			inputs
		);
		console.log("respotn", respotn);
		if (respotn.data.error) {
			toast.error("Login unsuccessful. Check you email or password");
		} else if (respotn.status == 200) {
			console.log("respotn", respotn);
			await sessionStorage.setItem(
				"userManagement",
				JSON.stringify(respotn.data)
			);
			toast.success("Login Successful");
			UserNamehandler();
			dispatched(closeRegistration());
		}
	};
	const loginPress = () => {
		setLoginPress(!ifLoginPress);
		settag(ifLoginPress ? "REGISTRATION FORM" : "LOGIN FORM");
	};
	return (
		<Container>
			<Toaster position='top-center' reverseOrder={false} />
			{Usertag ? (
				<OverlayTrigger
					rootClose
					trigger='click'
					key={"bottom"}
					placement={"bottom"}
					overlay={
						<Popover id={"popover-positioned-bottom"}>
							<Popover.Body>
								<ListGroup>
									<ListGroup.Item>
										<strong className='pointer-class'>Account Details</strong>
									</ListGroup.Item>
									<ListGroup.Item>
										{" "}
										<strong className='pointer-class'>Send Queries</strong>
									</ListGroup.Item>
									<ListGroup.Item>
										<strong className='pointer-class'>Orders History</strong>
									</ListGroup.Item>
									<ListGroup.Item onClick={Logout}>
										<strong className='pointer-class'>Log-Out</strong>
									</ListGroup.Item>
								</ListGroup>
							</Popover.Body>
						</Popover>
					}>
					<Button variant='secondary'>
						<FontAwesomeIcon icon={faUser}></FontAwesomeIcon> {UserName}
					</Button>
				</OverlayTrigger>
			) : (
				<p
					className='pointer-class fw-bold text-white'
					onClick={() => dispatched(openRegistration())}>
					Sign-up
				</p>
			)}

			<Modal size='md' show={result}>
				<Row className='justify-content-center'>
					<Col sm={12} xs={12} className='px-0'>
						<Card className='card-registration'>
							<Card.Body>
								<div className='text-center'>
									<Image
										width={50}
										height={50}
										fluid
										src={require("../../assets/images/manshaa.png")}></Image>
								</div>
								<div className='ruler-registration'>
									<span className='text-registration'>{tag}</span>
								</div>
								<div className='text-center'>
									{" "}
									<span className='user-select-none text-muted'>
										{" "}
										<u onClick={loginPress} className='login-class'>
											{ifLoginPress
												? "New Member? Sign-up"
												: " Already have Account? LogIn"}
										</u>
									</span>
								</div>
								{ifLoginPress ? (
									<Form onSubmit={handleSubmitLogin} className='mt-3'>
										<Form.Group className='mb-3' controlId='formBasicEmail'>
											<Form.Label>Email address</Form.Label>
											<Form.Control
												name='emailLogin'
												value={inputs.emailLogin || ""}
												onChange={handleChangeLogin}
												type='email'
												placeholder='Enter email'
											/>
										</Form.Group>

										<Form.Group className='mb-3' controlId='formBasicPassword'>
											<Form.Label>Password</Form.Label>
											<Form.Control
												required
												name='PasswordLogin'
												value={inputs.PasswordLogin || ""}
												onChange={handleChangeLogin}
												type='password'
												placeholder='*********'
												//pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
												//	title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
											/>
										</Form.Group>
										<div className='text-center'>
											<Button
												style={{ marginRight: "12px" }}
												variant='success'
												type='submit'>
												Log-in
											</Button>
											<Button
												variant='danger'
												className='mx-auto '
												onClick={() => dispatched(closeRegistration())}>
												Cancel
											</Button>
										</div>
									</Form>
								) : (
									<Form noValidate onSubmit={handleSubmit}>
										<Row className='mt-2 mb-1 justify-content-center'>
											<Form.Group
												as={Col}
												md='11'
												controlId='validationFormikUsername'>
												<Form.Label>First Name</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='First Name'
														aria-describedby='inputGroupPrepend'
														name='firstName'
														value={values.firstName}
														onChange={handleChange}
														isInvalid={touched.firstName && !!errors.firstName}
													/>
													<Form.Control.Feedback type='invalid'>
														{errors.firstName}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='11'
												controlId='validationFormik02'>
												<Form.Label>Last name</Form.Label>
												<Form.Control
													type='text'
													name='lastName'
													value={values.lastName}
													onChange={handleChange}
													isValid={touched.lastName && !errors.lastName}
												/>
											</Form.Group>
											<Form.Group
												as={Col}
												md='11'
												controlId='validationFormikUsername'>
												<Form.Label>Email</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='Username'
														aria-describedby='inputGroupPrepend'
														name='email'
														value={values.email}
														onChange={handleChange}
														isInvalid={touched.email && !!errors.email}
													/>
													<Form.Control.Feedback type='invalid'>
														{errors.email}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='11'
												controlId='validationFormikUsername'>
												<Form.Label>Password</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='password'
														placeholder='*******'
														aria-describedby='inputGroupPrepend'
														name='password'
														value={values.password}
														onChange={handleChange}
														isInvalid={!!errors.password}
													/>
													<Form.Control.Feedback type='invalid'>
														{errors.password}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
											<Form.Group
												as={Col}
												md='11'
												controlId='validationFormikUsername'>
												<Form.Label>Phone #</Form.Label>
												<InputGroup hasValidation>
													<Form.Control
														type='text'
														placeholder='phone'
														aria-describedby='inputGroupPrepend'
														name='phone'
														value={values.phone}
														onChange={handleChange}
														isInvalid={!!errors.phone}
													/>
													<Form.Control.Feedback type='invalid'>
														{errors.phone}
													</Form.Control.Feedback>
												</InputGroup>
											</Form.Group>
										</Row>
										<div className='text-center'>
											<Button
												variant='success'
												className='mx-5 mt-4 w-25'
												type='submit'>
												Submit
											</Button>
											<Button
												variant='danger'
												className='mx-auto mt-4 w-25'
												onClick={() => dispatched(closeRegistration())}>
												Cancel
											</Button>
										</div>
									</Form>
								)}
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Modal>
		</Container>
	);
};
