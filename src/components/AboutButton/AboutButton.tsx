import React from "react";
import styles from "./AboutButton.module.scss";

const AboutButton = () => {
	return (
		<a
			className={styles.aboutButton}
			href="#about"
			title="About this project"
		>
			?
		</a>
	);
};

export default AboutButton;
