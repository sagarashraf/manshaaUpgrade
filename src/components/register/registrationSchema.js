import * as yup from "yup";
export const schema = yup.object().shape({
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
	phone: yup.string().min(2).max(25).required(),
});
