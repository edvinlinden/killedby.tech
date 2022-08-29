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
				<a href="/" title="Discontinued products from all companies">
					<AllLogo />
					All
				</a>
				<div
					className={styles.sum}
					title={`${sumOfAllProducts} discontinued products`}
				>
					({sumOfAllProducts})
				</div>
			</div>
			<div className={styles.link} data-cy="navigation-link">
				<a href="/apple/" title="Discontinued products from Apple">
					<AppleLogo />
					Apple
				</a>
				<div
					className={styles.sum}
					title={`${sumOfAppleProducts} discontinued Apple products`}
				>
					({sumOfAppleProducts})
				</div>
			</div>
			<div className={styles.link} data-cy="navigation-link">
				<a href="/google/" title="Discontinued products from Google">
					<GoogleLogo />
					Google
				</a>
				<div
					className={styles.sum}
					title={`${sumOfGoogleProducts} discontinued Google products`}
				>
					({sumOfGoogleProducts})
				</div>
			</div>
			<div className={styles.link} data-cy="navigation-link">
				<a
					href="/microsoft/"
					title="Discontinued products from Microsoft"
				>
					<MicrosoftLogo />
					Microsoft
				</a>
				<div
					className={styles.sum}
					title={`${sumOfMicrosoftProducts} discontinued Microsoft products`}
				>
					({sumOfMicrosoftProducts})
				</div>
			</div>
			<div className={styles.link} data-cy="navigation-link">
				<a
					href="/other/"
					title="Discontinued products from other companies"
				>
					<GhostLogo />
					Other
				</a>
				<div
					className={styles.sum}
					title={`${sumOfOtherProducts} discontinued products from other companies`}
				>
					({sumOfOtherProducts})
				</div>
			</div>
		</div>
	);
};

export default Navigation;
