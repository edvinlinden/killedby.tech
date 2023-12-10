import React from "react";
import styles from "./OverlayButtons.module.scss";

const OverlayButtons = () => {
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

export default OverlayButtons;
