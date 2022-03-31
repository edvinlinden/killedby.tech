import React from "react";
import styles from "./YearSelect.module.scss";
import { products, yearsWithProducts } from "../Products/productList";

export default YearSelect = ({ company }) => {
	let productList = products(company);

	return (
		<div className={styles.yearSelectContainer}>
			<div className={styles.yearSelect}>
				{yearsWithProducts(productList).map((year) => (
					<a href={`#${year}`} className={styles.year}>
						{year}
					</a>
				))}
			</div>
		</div>
	);
};
