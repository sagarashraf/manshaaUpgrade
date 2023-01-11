import React, { useEffect } from "react";

/**
 * @author
 * @function Testing
 **/

export const Testing = (props) => {
	useEffect(() => {
		// let a = document.createElement("a");
		// a.target = "_blank";
		// a.href = "https://support.wwf.org.uk/";
		// a.click();
		window.location.href = "http://www.google.com";
	}, []);

	return <div>Testing</div>;
};
