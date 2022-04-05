import googleProducts from "@assets/products/google.json";
import microsoftProducts from "@assets/products/microsoft.json";
import appleProducts from "@assets/products/apple.json";
import otherProducts from "@assets/products/other.json";

const products = (company) => {
	let productList = [];
	if (company == "all") {
		productList = [
			...googleProducts,
			...microsoftProducts,
			...appleProducts,
			...otherProducts,
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

	if (company == "other") {
		productList = [...otherProducts];
	}

	return productList.sort(
		(a, b) => new Date(b.dateClose) - new Date(a.dateClose)
	);
};

const yearsWithProducts = (productList) => [
	...new Set(productList.map((product) => product.dateClose.substring(0, 4))),
];

export { products, yearsWithProducts };
