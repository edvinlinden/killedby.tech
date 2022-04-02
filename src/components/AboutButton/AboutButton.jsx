import styles from "./AboutButton.module.scss";

export default AboutButton = () => {
	return (
		<a className={styles.aboutButton} href="#about" title="About this project">
			?
		</a>
	);
};
