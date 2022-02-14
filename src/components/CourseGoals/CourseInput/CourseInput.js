import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		if (event.target.value.trim().length > 0) setIsValid(true);
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length > 0) props.onAddGoal(enteredValue);
		else setIsValid(false);
		setEnteredValue("");
	};

	return (
		<form onSubmit={formSubmitHandler}>
			{/* styles["form-control"] this syntax used because form-control 
			classname has a special character '-' or else styles.className
			syntax will work like used in styles.invalid*/}
			<div
				className={`${styles["form-control"]} ${isValid ? "" : styles.invalid}`}
			>
				<label>Course Goal</label>
				<input
					value={enteredValue}
					type="text"
					onChange={goalInputChangeHandler}
				/>
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
