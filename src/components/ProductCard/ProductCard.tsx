import React from "react";
import styles from "./ProductCard.module.scss";
import toSlug from "@utils/toSlug";

interface ProductCardInterface {
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

const ProductCard: React.FC<ProductCardInterface> = ({ product }) => {
	const { name, dateOpen, dateClose, description, link, type, company } =
		product;

	const category =
		["apple", "google", "microsoft"].indexOf(company) == -1
			? "other"
			: company;

	return (
		<a
			className={styles.productCard}
			href={`/${category}/${toSlug(name)}/`}
			rel="noopener noreferrer"
			title={name}
		>
			<div>
				<h2 className={styles.title}>{name}</h2>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.readMore}>
				Read more
				<img
					src="/images/arrow-right-long-solid.svg"
					width={24}
					height={24}
					alt="Icon of arrow pointing to the right"
					className={styles.readMoreArrow}
				/>
			</div>
		</a>
	);
};

interface ArticleCardInterface {
	link: string;
	title: string;
	description: string;
}

const ArticleCard: React.FC<ArticleCardInterface> = ({
	link,
	title,
	description,
}) => {
	return (
		<a className={styles.articleCard} href={link} title={title}>
			<div>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.readMore}>
				Read more
				<img
					src="/images/arrow-right-long-solid.svg"
					width={24}
					height={24}
					alt="Icon of arrow pointing to the right"
					className={styles.readMoreArrow}
				/>
			</div>
		</a>
	);
};

export default ProductCard;
