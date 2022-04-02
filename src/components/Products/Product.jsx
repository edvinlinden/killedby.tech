import React from "react";
import styles from "./Products.module.scss";
import { AppleLogo, GoogleLogo, MicrosoftLogo } from "./../Logos/Logos";

const Logo = ({ company }) => {
	if (company == "google") {
		return <GoogleLogo />;
	}

	if (company == "microsoft") {
		return <MicrosoftLogo />;
	}

	if (company == "apple") {
		return <AppleLogo />;
	}

	return null;
};

const Tag = ({ type, children, ...rest }) => {
	const getStyleByType = (type) => {
		if (type == "software") {
			return styles.software;
		}

		if (type == "hardware") {
			return styles.hardware;
		}

		if (type == "app") {
			return styles.app;
		}

		if (type == "service") {
			return styles.service;
		}

		return null;
	};

	return (
		<div className={`${styles.tag} ${getStyleByType(type)}`} {...rest}>
			{type ? type : children}
		</div>
	);
};

export default Product = ({ product }) => {
	const { name, dateOpen, dateClose, link, description, type, company } =
		product;

	return (
		<div className={styles.product}>
			<h3 className={styles.name}>
				<Logo company={company} />
				<a href={`${link}`} target="_blank" rel="noopener noreferrer">
					{name}
				</a>
			</h3>
			<div className={styles.metaData}>
				<Tag title={`${dateOpen} – ${dateClose}`}>
					{dateOpen.substr(0, 4)} – {dateClose.substr(0, 4)}
				</Tag>
				<Tag type={type} />
			</div>
			<p>{description}</p>
		</div>
	);
};
