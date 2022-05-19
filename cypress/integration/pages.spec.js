describe("Pages", () => {
	it("startpage should have the correct page title", () => {
		cy.visit("http://localhost:3000/");
		cy.title().should(
			"eq",
			"Killed by Apple, Google and Microsoft - Discontinued products and services"
		);
	});

	it("Apple page should have the correct page title", () => {
		cy.visit("http://localhost:3000/apple/");
		cy.title().should(
			"eq",
			"Killed by Apple - Discontinued products and services"
		);
	});

	it("Google page should have the correct page title", () => {
		cy.visit("http://localhost:3000/google/");
		cy.title().should(
			"eq",
			"Killed by Google - Discontinued products and services"
		);
	});

	it("Microsoft page should have the correct page title", () => {
		cy.visit("http://localhost:3000/microsoft/");
		cy.title().should(
			"eq",
			"Killed by Microsoft - Discontinued products and services"
		);
	});

	it("other page should have the correct page title", () => {
		cy.visit("http://localhost:3000/other/");
		cy.title().should(
			"eq",
			"Killed by other companies - Discontinued products and services"
		);
	});
});
