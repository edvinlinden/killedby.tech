import React from "react";
import { formatDistance } from "date-fns";
import styles from "./Products.module.scss";
import {
	AppleLogo,
	GhostLogo,
	GoogleLogo,
	MicrosoftLogo,
	VineLogo,
} from "./../Logos/Logos";
import toSlug from "@utils/toSlug";

interface LogoInterface {
	company: string;
}

const Logo: React.FC<LogoInterface> = ({ company }) => {
	if (company == "google") {
		return <GoogleLogo />;
	}

	if (company == "microsoft") {
		return <MicrosoftLogo />;
	}

	if (company == "apple") {
		return <AppleLogo />;
	}

	if (company == "vine") {
		return <VineLogo />;
	}

	return <GhostLogo />;
};

interface TagInterface {
	type?: string;
	children?: React.ReactNode;
	title?: string;
}

const Tag: React.FC<TagInterface> = ({ type, children, ...rest }) => {
	const getStyleByType = (type: string = "") => {
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
		<div
			className={`${styles.tag} ${getStyleByType(type)}`}
			data-cy="product-tag"
			{...rest}
		>
			{type ? type : children}
		</div>
	);
};

interface ProductInterface {
	product: {
		name: string;
		description: string;
		dateOpen: string;
		dateClose: string;
		link: string;
		type: string;
		company: string;
	};
}

const Product: React.FC<ProductInterface> = ({ product }) => {
	const { name, dateOpen, dateClose, link, description, type, company } =
		product;

	const timeUntilDead = formatDistance(new Date(dateClose), new Date());
	const isStillAlive = new Date(dateClose) > new Date();
	const randomToBeKilledSentence = () => {
		const sentences = [
			"Running out of power",
			"Will be turned off",
			"Scheduled to die",
			"Walks into the light",
			"Fading into darkness",
			"Done for",
			"Kicking the bucket",
			"Expiring",
			"Getting unplugged",
			"Going poof",
		];

		return sentences[Math.floor(Math.random() * sentences.length)];
	};

	const category =
		["apple", "google", "microsoft"].indexOf(company) == -1
			? "other"
			: company;

	return (
		<div className={styles.product} data-cy="product">
			<h2 className={styles.name}>
				<Logo company={company} />
				<a href={`/${category}/${toSlug(name)}/`}>{name}</a>
			</h2>
			<div className={styles.metaData}>
				<Tag title={`${dateOpen} – ${dateClose}`}>
					{dateOpen.substring(0, 4)} – {dateClose.substring(0, 4)}
				</Tag>
				<Tag type={type} />
			</div>
			<p>
				{isStillAlive
					? `${randomToBeKilledSentence()} in ${timeUntilDead}, `
					: null}
				{description}
			</p>
		</div>
	);
};

export default Product;
