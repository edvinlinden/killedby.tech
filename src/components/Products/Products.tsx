import React from "react";
import Product from "./Product";
import { products, yearsWithProducts } from "./products.utility";
import styles from "./Products.module.scss";

interface ArticleCardInterface {
	link: string;
	title: string;
	description: string;
}

const ArticleCard: React.FC<ArticleCardInterface> = ({
	link,
	title,
	description,
}) => {
	return (
		<a className={styles.articleCard} href={link} title={title}>
			<div>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.readMore}>
				Read more
				<img
					src="/images/arrow-right-long-solid.svg"
					width={24}
					height={24}
					alt=""
					className={styles.readMoreArrow}
				/>
			</div>
		</a>
	);
};

interface ArticlesInterface {
	year: string;
	company: string;
}

const Articles: React.FC<ArticlesInterface> = ({ year, company }) => {
	if (company == "apple" || company == "all") {
		if (year == "2022") {
			return (
				<ArticleCard
					title="Apple discontinued the iPod after two decades"
					link="/articles/apple-discontinued-the-ipod-after-two-decades/"
					description="For over two decades the iPod was the portable music player, just as big as the Walkman was before it. In 2022 Apple announced that the iPod will be discontinued, this is a trip down memory lane of the most iconic iPods."
				/>
			);
		}
		if (year == "2012") {
			return (
				<ArticleCard
					title="iPod Socks – One of the weirdest Apple products"
					link="/articles/ipod-socks-one-of-the-weirdest-apple-products/"
					description="Apple's history is full of weird and interesting products. however some products are weirder than others. This is a breif history of the iPod Socks, a knitted sock made for the iPod."
				/>
			);
		}
	}

	if (company == "google" || company == "all") {
		if (year == "2019") {
			return (
				<ArticleCard
					title="Google killed these 4 products soon after acquiring them"
					link="/articles/google-killed-these-4-products-soon-after-acquiring-them/"
					description="All of the FAANG companies acquire companies and products and not all of them survive the acqusition. Google however have become the scapegoat for this practice. This is a breif story about four of those acqusitions."
				/>
			);
		}
	}

	return null;
};

interface YearInterface {
	year: string;
	productList: [object];
}

const Year: React.FC<YearInterface> = ({ year, productList }) => {
	return (
		<>
			<div id={year} className={styles.productListTitle}>
				{year}
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
				<>
					<Year year={year} productList={productList} key={year} />
					<Articles year={year} company={company} />
				</>
			))}
		</>
	);
};

export default Products;
