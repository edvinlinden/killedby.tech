import React, { useEffect } from "react";
import Product from "./Product";
import { products, yearsWithProducts } from "./products.utility";
import styles from "./Products.module.scss";

const Year = ({ year, productList }) => {
	return (
		<>
			<a id={year} className={styles.productListTitle}>
				<h2>{year}</h2>
			</a>
			<div className={styles.productList}>
				{productList.map((product) =>
					product.dateClose.startsWith(year) ? (
						<Product product={product} key={product} />
					) : null
				)}
				{productList.filter((product) => product.dateClose.startsWith(year)).length % 3 == 2 ? (
					<div className={styles.product} />
				) : null}
			</div>
		</>
	);
};

export default Products = ({ company }) => {
	let productList = products(company);

	return (
		<>
			{yearsWithProducts(productList).map((year) => (
				<Year year={year} productList={productList} key={year} />
			))}
		</>
	);
};
