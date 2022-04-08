/// <reference types="cypress" />
import googleProducts from "./../../src/assets/products/google.json";
import microsoftProducts from "./../../src/assets/products/microsoft.json";
import appleProducts from "./../../src/assets/products/apple.json";
import otherProducts from "./../../src/assets/products/other.json";

describe("Products", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("should display correct count for each company", () => {
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

		cy.get("h3").contains("All").next().should("have.text", allSumText);
		cy.get("h3").contains("Apple").next().should("have.text", appleSumText);
		cy.get("h3")
			.contains("Google")
			.next()
			.should("have.text", googleSumText);
		cy.get("h3")
			.contains("Microsoft")
			.next()
			.should("have.text", microsoftSumText);
		cy.get("h3").contains("Other").next().should("have.text", otherSumText);
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
		cy.visit("http://localhost:3000/apple/");
		const productsCount = appleProducts.length;

		cy.get("[data-cy=product]").should("have.length", productsCount);
	});

	it("should only display Google products", () => {
		cy.visit("http://localhost:3000/google/");
		const productsCount = googleProducts.length;

		cy.get("[data-cy=product]").should("have.length", productsCount);
	});

	it("should only display Microsoft products", () => {
		cy.visit("http://localhost:3000/microsoft/");
		const productsCount = microsoftProducts.length;

		cy.get("[data-cy=product]").should("have.length", productsCount);
	});

	it("should only display other products", () => {
		cy.visit("http://localhost:3000/other/");
		const productsCount = otherProducts.length;

		cy.get("[data-cy=product]").should("have.length", productsCount);
	});

	it("should display correct product information", () => {
		cy.visit("http://localhost:3000/other/");
		const firstProduct = [...otherProducts].sort(
			(a, b) => new Date(b.dateClose) - new Date(a.dateClose)
		)[0];

		cy.get("[data-cy=product]")
			.eq(0)
			.find("h3>a")
			.should("have.text", firstProduct.name)
			.should("have.attr", "href", firstProduct.link);
		cy.get("[data-cy=product]").eq(0).find("h3>img").should("exist");
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