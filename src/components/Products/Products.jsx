import React from "react";
import Product from "./Product";
import styles from "./Products.module.scss";
import googleProducts from "../../assets/google.json";

const generateYearsBetween = (startYear = 2000, endYear) => {
	const endDate = endYear || new Date().getFullYear();
	let years = [];
	for (var i = startYear; i <= endDate; i++) {
		years.push(startYear);
		startYear++;
	}
	return years;
};

const years = generateYearsBetween(2000, new Date().getFullYear()).reverse();

const products = googleProducts.sort(
	(a, b) => new Date(b.dateClose) - new Date(a.dateClose)
);

const Year = ({ year }) => {
	if (
		products.filter((product) => product.dateClose.startsWith(year))
			.length == 0
	) {
		return null;
	}

	return (
		<>
			<h2>{year}</h2>
			<div className={styles.productList}>
				{products.map((product) =>
					product.dateClose.startsWith(year) ? (
						<Product product={product} key={product} />
					) : null
				)}
			</div>
		</>
	);
};

export default Products = () => {
	return (
		<>
			{years.map((year) => (
				<Year year={year} />
			))}
		</>
	);
};
