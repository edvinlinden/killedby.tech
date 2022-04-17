import React from "react";
import styles from "./YearNavigationBar.module.scss";
import { products, yearsWithProducts } from "./../Products/products.utility.ts";

interface YearNavigationBarInterface {
	company: string;
}

const YearNavigationBar: React.FC<YearNavigationBarInterface> = ({
	company,
}) => {
	let productList = products(company);

	return (
		<div className={styles.yearNavigationBarContainer}>
			<div className={styles.yearNavigationBar}>
				{yearsWithProducts(productList).map((year: string) => (
					<a key={year} href={`#${year}`} className={styles.year}>
						{year}
					</a>
				))}
			</div>
		</div>
	);
};

export default YearNavigationBar;
