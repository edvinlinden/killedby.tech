import styles from "./Logos.module.scss";

const GoogleLogo = () => (
	<img
		src="/images/google-logo.svg"
		alt="Google logo"
		width="16"
		height="24"
		className={styles.logo}
		title="Google"
	/>
);

const AppleLogo = () => (
	<img
		src="/images/apple-logo.svg"
		alt="Apple logo"
		width="16"
		height="24"
		className={styles.logo}
		title="Apple"
	/>
);

const MicrosoftLogo = () => (
	<img
		src="/images/microsoft-logo.svg"
		alt="Microsoft logo"
		width="16"
		height="24"
		className={styles.logo}
		title="Microsoft"
	/>
);

const AllLogo = () => (
	<div className={styles.logo}>
		<div className={styles.all}>*</div>
	</div>
);

export { GoogleLogo, AppleLogo, MicrosoftLogo, AllLogo };
