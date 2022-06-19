import React from "react";
import { format, formatDistanceStrict } from "date-fns";
import styles from "./ProductInformation.module.scss";

interface InformationRowInterface {
	title: string;
	value: any;
	noformat?: boolean;
}

const InformationRow: React.FC<InformationRowInterface> = ({
	title,
	value,
	noformat,
}) => {
	return (
		<div className={styles.informationRow}>
			<div className={styles.informationRowTitle}>{title}</div>
			<div
				className={`${styles.informationRowValue} ${
					noformat ? styles.noFormat : null
				}`}
			>
				{value}
			</div>
		</div>
	);
};

interface ProductInformationInterface {
	dateOpen?: string;
	dateClose?: string;
	link?: string;
	type?: string;
	company?: string;
}
const ProductInformation: React.FC<ProductInformationInterface> = ({
	dateOpen,
	dateClose,
	link,
	type,
	company,
}) => {
	let linkElement = null;
	if (link) {
		const linkDomain: String = new URL(link).hostname.replace("www.", "");
		linkElement = (
			<a
				href={`${link}?ref=killedby.tech`}
				target="_blank"
				rel="noopener noreferrer"
			>
				{linkDomain}
			</a>
		);
	}

	const formattedDateOpen = dateOpen
		? format(new Date(dateOpen), "d MMMM, yyyy")
		: null;

	const formattedDateClose = dateClose
		? format(new Date(dateClose), "d MMMM, yyyy")
		: null;

	const lifespan =
		dateOpen && dateClose
			? formatDistanceStrict(new Date(dateOpen), new Date(dateClose))
			: null;

	return (
		<div className={styles.productInformation}>
			{company && <InformationRow title="Developer" value={company} />}
			{formattedDateOpen && (
				<InformationRow title="Released" value={formattedDateOpen} />
			)}
			{formattedDateClose && (
				<InformationRow
					title="Discontinued"
					value={formattedDateClose}
				/>
			)}
			{formattedDateClose && (
				<InformationRow title="Lifespan" value={lifespan} />
			)}
			{type && <InformationRow title="Type" value={type} />}
			{linkElement && (
				<InformationRow
					title="Source"
					value={linkElement}
					noformat={true}
				/>
			)}
		</div>
	);
};

export default ProductInformation;
