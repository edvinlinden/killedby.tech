import React from "react";
import Product from "./Product";
import { products, yearsWithProducts } from "./products.utility";
import styles from "./Products.module.scss";

interface YearInterface {
	year: string;
	productList: [object];
}

const Year: React.FC<YearInterface> = ({ year, productList }) => {
	return (
		<>
			<div id={year} className={styles.productListTitle}>
				<h2>{year}</h2>
			</div>
			<div className={styles.productList}>
				{productList.map((product) =>
					product.dateClose.startsWith(year) ? (
						<Product product={product} key={product} />
					) : null
				)}
				{productList.filter((product) =>
					product.dateClose.startsWith(year)
				).length %
					3 ==
				2 ? (
					<div className={styles.product} />
				) : null}
			</div>
		</>
	);
};

interface ProductsInterface {
	company: string;
}

const Products: React.FC<ProductsInterface> = ({ company }) => {
	let productList = products(company);

	return (
		<>
			{yearsWithProducts(productList).map((year) => (
				<Year year={year} productList={productList} key={year} />
			))}
		</>
	);
};

export default Products;
