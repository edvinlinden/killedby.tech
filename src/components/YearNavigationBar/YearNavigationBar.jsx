import React from "react";
import styles from "./YearNavigationBar.module.scss";
import {products, yearsWithProducts} from './../Products/products.utility.js';

export default YearNavigationBar = ({ company }) => {
	let productList = products(company);

	return (
		<div className={styles.yearNavigationBarContainer}>
			<div className={styles.yearNavigationBar}>
				{yearsWithProducts(productList).map((year) => (
					<a key={year} href={`#${year}`} className={styles.year}>
						{year}
					</a>
				))}
			</div>
		</div>
	);
};
