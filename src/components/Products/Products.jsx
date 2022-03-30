import React from "react";
import Product from "./Product";
import {products, yearsWithProducts} from './products';
import styles from "./Products.module.scss";

const Year = ({ year }) => {
	return (
		<>
			<a id={year}>
				<h2>{year}</h2>
			</a>
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
			{yearsWithProducts.map((year) => (
				<Year year={year} key={year} />
			))}
		</>
	);
};
