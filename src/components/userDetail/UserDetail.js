import React from "react";
import { useFormik } from "formik";
import {
	Form,
	Button,
	InputGroup,
	Row,
	Col,
	Card,
	Container,
} from "react-bootstrap";
import * as yup from "yup";
import axios from "axios";
import { NavBar } from "../navbar/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * @author
 * @function UserDetail
 **/

export const UserDetail = (props) => {
	const params = useParams();
	const [details, setDetails] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		phone: "",
	});
	useEffect(() => {
		// declare the data fetching function
		const fetchData = async () => {
			const data = await axios.get(
				`http://localhost:5000/api/v1/getUserInfo/${params.id}`
			);
			console.log("sdfs", data);
			details.firstName = data.data[0].firstName;
			details.firstName = data.data[0].firstName;
			setDetails(data.data[0]);
		};

		fetchData();
	}, []);

	const schema = yup.object().shape({
		firstName: yup.string().min(2).max(25).required("Please enter your name"),
		lastName: yup.string(),
		email: yup.string().email().required("Please enter your email"),
		password: yup
			.string()
			.required("Please Enter your password")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
				"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Character"
			),
		phone: yup
			.string()
			.min(2)
			.max(25)
			.required("Please enter your phone number"),
	});
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			details,
			validationSchema: schema,
			onSubmit: async (values, action) => {
				console.log("values", values);
				let respotn = await axios.post(
					"http://localhost:5000/api/v1/register",
					values
				);
				console.log("respotn", respotn.data);
				action.resetForm();
			},
		});

	return (
		<>
			<NavBar />
			<Container>
				<Row className='justify-content-center'>
					<Col lg={6} md={12}>
						<Card className='my-3'>
							<Card.Body>
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
										<Form.Group as={Col} md='11' controlId='validationFormik02'>
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
										<Button variant='danger' className='mx-auto mt-4 w-25'>
											Cancel
										</Button>
									</div>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};
