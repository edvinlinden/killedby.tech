import { format, formatDistanceStrict } from "date-fns";

describe("Single product page", () => {
	const stadia = {
		name: "Google Stadia",
		dateOpen: "2019-11-19",
		dateClose: "2023-01-18",
		link: "https://en.wikipedia.org/wiki/Google_Stadia",
		description:
			"Google Stadia was a cloud gaming service accessible through Chromecast Ultra, Android TV devices and on personal computers via the Google Chrome web browser. It featured up to 4K resolution at 60 frames per second with support for high-dynamic-range (HDR).",
		type: "service",
		company: "google",
	};

	const lifespan =
		stadia.dateOpen && stadia.dateClose
			? formatDistanceStrict(
					new Date(stadia.dateOpen),
					new Date(stadia.dateClose)
			  )
			: null;

	it("should have the correct page title", () => {
		cy.visit("http://localhost:4321/google/google-stadia/?ref=cypress");
		cy.title().should(
			"eq",
			"Google Stadia was a product killed by Google in 2023"
		);

		cy.get("[data-cy=product-information]").contains(stadia.name);
		cy.get("[data-cy=product-information]").contains(stadia.description);
		cy.get("[data-cy=product-information]").contains(stadia.type);
		cy.get("[data-cy=product-information]").contains(stadia.company);
		cy.get("[data-cy=product-information]").contains(
			format(new Date(stadia.dateOpen), "d MMMM, yyyy")
		);
		cy.get("[data-cy=product-information]").contains(
			format(new Date(stadia.dateClose), "d MMMM, yyyy")
		);
		cy.get("[data-cy=product-information]").contains(lifespan);
		cy.get("[data-cy=product-information]")
			.contains("en.wikipedia.org")
			.should("have.attr", "href", stadia.link + "?ref=killedby.tech");
	});
});
