/// <reference types="cypress" />
import googleProducts from "./../../src/assets/products/google.json";
import microsoftProducts from "./../../src/assets/products/microsoft.json";
import appleProducts from "./../../src/assets/products/apple.json";
import otherProducts from "./../../src/assets/products/other.json";
import toSlug from "./../../src/utils/toSlug.ts";

describe("Products", () => {
	it("should display correct count for each company", () => {
		cy.visit("http://localhost:3000/?ref=cypress");

		const allSumText = `(${
			[
				...googleProducts,
				...microsoftProducts,
				...appleProducts,
				...otherProducts,
			].length
		})`;

		const appleSumText = `(${appleProducts.length})`;
		const googleSumText = `(${googleProducts.length})`;
		const microsoftSumText = `(${microsoftProducts.length})`;
		const otherSumText = `(${otherProducts.length})`;

		cy.get("[data-cy=navigation-link]")
			.contains("All")
			.next()
			.should("have.text", allSumText);
		cy.get("[data-cy=navigation-link]")
			.contains("Apple")
			.next()
			.should("have.text", appleSumText);
		cy.get("[data-cy=navigation-link]")
			.contains("Google")
			.next()
			.should("have.text", googleSumText);
		cy.get("[data-cy=navigation-link]")
			.contains("Microsoft")
			.next()
			.should("have.text", microsoftSumText);
		cy.get("[data-cy=navigation-link]")
			.contains("Other")
			.next()
			.should("have.text", otherSumText);
	});

	it("should display all products", () => {
		const productsCount = [
			...googleProducts,
			...microsoftProducts,
			...appleProducts,
			...otherProducts,
		].length;

		cy.get("[data-cy=product]").should("have.length", productsCount);
	});

	it("should only display Apple products", () => {
		cy.visit("http://localhost:3000/apple/?ref=cypress");
		const productsCount = appleProducts.length;

		cy.get("[data-cy=product]").should("have.length", productsCount);
	});

	it("should only display Google products", () => {
		cy.visit("http://localhost:3000/google/?ref=cypress");
		const productsCount = googleProducts.length;

		cy.get("[data-cy=product]").should("have.length", productsCount);
	});

	it("should only display Microsoft products", () => {
		cy.visit("http://localhost:3000/microsoft/?ref=cypress");
		const productsCount = microsoftProducts.length;

		cy.get("[data-cy=product]").should("have.length", productsCount);
	});

	it("should only display other products", () => {
		cy.visit("http://localhost:3000/other/?ref=cypress");
		const productsCount = otherProducts.length;

		cy.get("[data-cy=product]").should("have.length", productsCount);
	});

	it("should display correct product information", () => {
		cy.visit("http://localhost:3000/other/?ref=cypress");

		const firstProduct = [...otherProducts].sort(
			(a, b) => new Date(b.dateClose) - new Date(a.dateClose)
		)[0];

		const category =
			["apple", "google", "microsoft"].indexOf(firstProduct.company) == -1
				? "other"
				: firstProduct.company;

		const firstProductLink = `/${category}/${toSlug(firstProduct.name)}/`;

		cy.get("[data-cy=product]")
			.eq(0)
			.find("h2>a")
			.should("have.text", firstProduct.name)
			.should("have.attr", "href", firstProductLink);
		cy.get("[data-cy=product]").eq(0).find("h2>img").should("exist");
		cy.get("[data-cy=product]")
			.eq(0)
			.find("[data-cy=product-tag]")
			.eq(0)
			.should(
				"have.text",
				`${firstProduct.dateOpen.substring(
					0,
					4
				)} – ${firstProduct.dateClose.substring(0, 4)}`
			)
			.should(
				"have.attr",
				"title",
				`${firstProduct.dateOpen} – ${firstProduct.dateClose}`
			);
		cy.get("[data-cy=product]")
			.eq(0)
			.find("[data-cy=product-tag]")
			.eq(1)
			.should("have.text", firstProduct.type);
		cy.get("[data-cy=product]")
			.eq(0)
			.find("p")
			.should("have.text", firstProduct.description);
	});
});
