describe("Pages", () => {
	it("startpage should have the correct page title", () => {
		cy.visit("http://localhost:4321/?ref=cypress");
		cy.title().should(
			"eq",
			"Killed by Apple, Google and Microsoft - Discontinued products and services"
		);
	});

	it("Apple page should have the correct page title", () => {
		cy.visit("http://localhost:4321/apple/?ref=cypress");
		cy.title().should(
			"eq",
			"Killed by Apple - Discontinued products and services"
		);
	});

	it("Google page should have the correct page title", () => {
		cy.visit("http://localhost:4321/google/?ref=cypress");
		cy.title().should(
			"eq",
			"Killed by Google - Discontinued products and services"
		);
	});

	it("Microsoft page should have the correct page title", () => {
		cy.visit("http://localhost:4321/microsoft/?ref=cypress");
		cy.title().should(
			"eq",
			"Killed by Microsoft - Discontinued products and services"
		);
	});

	it("other page should have the correct page title", () => {
		cy.visit("http://localhost:4321/other/?ref=cypress");
		cy.title().should(
			"eq",
			"Killed by other companies - Discontinued products and services"
		);
	});
});
