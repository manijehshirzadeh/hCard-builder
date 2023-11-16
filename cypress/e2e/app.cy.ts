describe("Navigation", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/")
	})
	it("should navigate to the home page", () => {
		cy.get("h4").contains("hCard Builder")
	})

	it("should be able to fill the form fields", () => {
		cy.get("#given-name").type("test")
		cy.get("#surname").type("test")
		cy.get("#fullname").contains("test test")
		cy.get("#email").type("test@test.com")
		cy.get("#EMAIL-preview-value").contains("test@test.com")
		cy.get("#phone").type("044444444")
		cy.get("#PHONE-preview-value").contains("044444444")
		cy.get("#street-number").type("2")
		cy.get("#street-name").type("Cambridge Street")
		cy.get("#ADDRESS-preview-value").contains("2 Cambridge Street")
		cy.get("#suburb").type("Box Hill")
		cy.get("#state").type("VIC")
		cy.get("#-preview-value").contains("Box Hill, VIC")
		cy.get("#postcode").type("3128")
		cy.get("#POSTCODE-preview-value").contains("3128")
		cy.get("#country").type("Australia")
		cy.get("#COUNTRY-preview-value").contains("Australia")
		cy.get("#submit-hcard-form").click()
	})
})
