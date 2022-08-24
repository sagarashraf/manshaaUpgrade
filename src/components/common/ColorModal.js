import React, { useState } from "react";
import { SketchPicker, BlockPicker } from "react-color";

/**
 * @author
 * @function ColorModal
 **/

export const ColorModal = (props) => {
	const [sketchPickerColor, setSketchPickerColor] = useState({
		r: "241",
		g: "112",
		b: "19",
		a: "1",
	});
	const { r, g, b, a } = sketchPickerColor;

	return (
		<div className=''>
			<h6>Select Color : {`rgba(${r},${g},${b},${a})`}</h6>

			<div
				className='mb-4'
				style={{
					backgroundColor: `rgba(${r},${g},${b},${a})`,
					width: "80%",
					height: 50,
					border: "2px solid white",
				}}></div>

			<SketchPicker
				className='w-75 mr-5'
				onChange={(color) => {
					setSketchPickerColor(color.rgb);
				}}
				color={sketchPickerColor}
			/>
		</div>
	);
};
