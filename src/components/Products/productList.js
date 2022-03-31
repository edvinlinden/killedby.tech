import googleProducts from "../../assets/google.json";
import microsoftProducts from "../../assets/microsoft.json";
import appleProducts from "../../assets/apple.json";

const products = (company) => {
	let productList = [];
	if (company == "all") {
		productList = [
			...googleProducts,
			...microsoftProducts,
			...appleProducts,
		];
	}

	if (company == "apple") {
		productList = [...appleProducts];
	}

	if (company == "microsoft") {
		productList = [...microsoftProducts];
	}

	if (company == "google") {
		productList = [...googleProducts];
	}

	return productList.sort(
		(a, b) => new Date(b.dateClose) - new Date(a.dateClose)
	);
};

const yearsWithProducts = (productList) => [
	...new Set(productList.map((product) => product.dateClose.substring(0, 4))),
];

export { products, yearsWithProducts };
