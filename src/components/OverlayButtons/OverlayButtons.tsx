import React from "react";
import styles from "./OverlayButtons.module.scss";

const OverlayButtons = () => {
	return (
		<>
			<a className={styles.toTheTop} href="#top" title="To the top">
				To the top
			</a>
			<a
				className={styles.aboutButton}
				href="#about"
				title="About this project"
			>
				?
			</a>
		</>
	);
};

export default OverlayButtons;
