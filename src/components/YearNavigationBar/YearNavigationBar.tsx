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

	let onYearChange = (event: any) => {
		event.preventDefault();
		location.hash = "#" + event.target.value;
	};

	return (
		<div className={styles.container}>
			<label for="year-select">Go to year</label>
			<select
				className={styles.select}
				onChange={onYearChange}
				id="year-select"
			>
				{yearsWithProducts(productList).map((year: string) => (
					<option key={year}>{year}</option>
				))}
			</select>
		</div>
	);
};

export default YearNavigationBar;
