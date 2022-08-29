import React from "react";
import useScrollPosition from "@hooks/useScrollPosition";
import styles from "./OverlayButtons.module.scss";

const OverlayButtons = () => {
	const scrollPosition = useScrollPosition();
	const shouldShowToTopButton = scrollPosition > 400;

	return (
		<>
			{shouldShowToTopButton && (
				<a className={styles.toTheTop} href="#top" title="To the top">
					To the top
				</a>
			)}
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
