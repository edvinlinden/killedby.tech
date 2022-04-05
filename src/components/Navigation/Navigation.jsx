import { AllLogo, AppleLogo, GhostLogo, GoogleLogo, MicrosoftLogo } from "./../Logos/Logos";
import { products } from "./../Products/products.utility";
import styles from "./Navigation.module.scss";

export default Navigation = () => {
    const sumOfAllProducts = products("all").length;
    const sumOfAppleProducts = products("apple").length;
    const sumOfGoogleProducts = products("google").length;
    const sumOfMicrosoftProducts = products("microsoft").length;
	const sumOfOtherProducts = products("other").length;

	return (
		<div className={styles.navigation}>
			<h3>
				<a href="/">
					<AllLogo />
					All 
				</a>
                <div className={styles.sum}>({sumOfAllProducts})</div>
			</h3>
			<h3>
				<a href="/apple/">
					<AppleLogo />
					Apple
				</a>
                <div className={styles.sum}>({sumOfAppleProducts})</div>
			</h3>
			<h3>
				<a href="/google/">
					<GoogleLogo />
					Google
				</a>
                <div className={styles.sum}>({sumOfGoogleProducts})</div>
			</h3>
            <h3>
				<a href="/microsoft/">
					<MicrosoftLogo />
					Microsoft
				</a>
                <div className={styles.sum}>({sumOfMicrosoftProducts})</div>
			</h3>
			<h3>
				<a href="/other/">
					<GhostLogo />
					Other
				</a>
                <div className={styles.sum}>({sumOfOtherProducts})</div>
			</h3>
		</div>
	);
};
