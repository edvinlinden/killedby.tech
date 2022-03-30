import React from "react";
import styles from "./YearSelect.module.scss";
import googleProducts from "../../assets/google.json";
import microsoftProducts from "../../assets/microsoft.json";

const products = [...googleProducts, ...microsoftProducts].sort(
	(a, b) => new Date(b.dateClose) - new Date(a.dateClose)
);

const yearsWithProducts = [
	...new Set(
		products.map((product) => product.dateClose.substring(0, 4))
	),
];

export default YearSelect = () => {
	return (
		<div className={styles.yearSelectContainer}>
			<div className={styles.yearSelect}>
				{yearsWithProducts.map((year) => (
					<a href={`#${year}`} className={styles.year}>
						{year}
					</a>
				))}
			</div>
		</div>
	);
};
