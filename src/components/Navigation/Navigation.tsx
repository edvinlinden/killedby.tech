import React from "react";
import {
	AllLogo,
	AppleLogo,
	GhostLogo,
	GoogleLogo,
	MicrosoftLogo,
} from "./../Logos/Logos";
import { products } from "./../Products/products.utility";
import styles from "./Navigation.module.scss";

const Navigation = () => {
	const sumOfAllProducts = products("all").length;
	const sumOfAppleProducts = products("apple").length;
	const sumOfGoogleProducts = products("google").length;
	const sumOfMicrosoftProducts = products("microsoft").length;
	const sumOfOtherProducts = products("other").length;

	return (
		<div className={styles.navigation}>
			<div className={styles.link} data-cy="navigation-link">
				<a href="/">
					<AllLogo />
					All
				</a>
				<div className={styles.sum}>({sumOfAllProducts})</div>
			</div>
			<div className={styles.link} data-cy="navigation-link">
				<a href="/apple/">
					<AppleLogo />
					Apple
				</a>
				<div className={styles.sum}>({sumOfAppleProducts})</div>
			</div>
			<div className={styles.link} data-cy="navigation-link">
				<a href="/google/">
					<GoogleLogo />
					Google
				</a>
				<div className={styles.sum}>({sumOfGoogleProducts})</div>
			</div>
			<div className={styles.link} data-cy="navigation-link">
				<a href="/microsoft/">
					<MicrosoftLogo />
					Microsoft
				</a>
				<div className={styles.sum}>({sumOfMicrosoftProducts})</div>
			</div>
			<div className={styles.link} data-cy="navigation-link">
				<a href="/other/">
					<GhostLogo />
					Other
				</a>
				<div className={styles.sum}>({sumOfOtherProducts})</div>
			</div>
		</div>
	);
};

export default Navigation;
