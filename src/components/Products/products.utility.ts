import googleProducts from "@assets/products/google.json";
import microsoftProducts from "@assets/products/microsoft.json";
import appleProducts from "@assets/products/apple.json";
import otherProducts from "@assets/products/other.json";

interface productInterface {
	name: string;
	description: string;
	dateOpen: string;
	dateClose: string;
	link: string;
	type: string;
	company: string;
}

const products = (company: string) => {
	let productList: productInterface[] = [];
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
		(a, b) =>
			new Date(b.dateClose).valueOf() - new Date(a.dateClose).valueOf()
	);
};

const yearsWithProducts = (productList: [productInterface]) =>
	Array.from(
		new Set(productList.map((product) => product.dateClose.substring(0, 4)))
	);

export { products, yearsWithProducts };
