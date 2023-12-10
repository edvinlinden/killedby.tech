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
		const year = event.target.value;
		const disableTracking = import.meta.env.DEV;

		location.hash = "#" + year;

		if (!disableTracking) {
			window.fathom.trackEvent("Change year");
		}
	};

	return (
		<div className={styles.container}>
			<label htmlFor="year-select">Go to year</label>
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
