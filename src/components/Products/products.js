import googleProducts from "../../assets/google.json";
import microsoftProducts from "../../assets/microsoft.json";
import appleProducts from "../../assets/apple.json";

const products = [
	...googleProducts,
	...microsoftProducts,
	...appleProducts,
].sort((a, b) => new Date(b.dateClose) - new Date(a.dateClose));

const yearsWithProducts = [
	...new Set(products.map((product) => product.dateClose.substring(0, 4))),
];

export { products, yearsWithProducts };
