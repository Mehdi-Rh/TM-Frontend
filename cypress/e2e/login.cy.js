/// <reference types="cypress" />

describe("Login and visit Home", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    // const baseUrl = process.env.REACT_APP_API_URL;

    const baseUrl = "http://localhost:3000";
    cy.visit(`${baseUrl}/login`);
    cy.get("#login-email").should("exist");
    cy.get("#login-email").click().clear().type("rahal.mehdi2@gmail.com");
    cy.get("#login-password").click().clear().type("dddD1/!qqq2");
    cy.get("#login-cta-submit").click();
  });

  it("Navigate Home", () => {
    cy.get("#home").should("exist");
  });

  //     cy.get("#labs-sidebar-item").click();
  //     cy.get("#labs-page").should("exist");

  //     cy.get("#paths-sidebar-item").click();
  //     cy.get("#paths-page").should("exist");

  //     cy.get("#sandboxes-sidebar-item").click();
  //     cy.get("#sandboxes-page").should("exist");

  //     cy.get("#catalog-sidebar-item").click();
  //     cy.get("#catalog-page").should("exist");

  //     cy.get("#managed-students-sidebar-item").click();
  //     cy.get("#students-page").should("exist");

  //     cy.get("#skill-tests-manager-page").click();
  //     cy.get("#skill-tests-manager-page").should("exist");

  //     cy.get("#history-reports-sidebar-item").click();
  //     cy.get("#history-reports-page").should("exist");

  //     cy.get("#help-center-sidebar-item").click();
  //     cy.get("#help-center-page").should("exist");

  //     cy.get("#settings-sidebar-item").click();
  //     cy.get("#settings-page").should("exist");

  //     cy.get("#dashboard-sidebar-item").click();
  //     cy.get("#dashboard-page").should("exist");
  //   });
});
