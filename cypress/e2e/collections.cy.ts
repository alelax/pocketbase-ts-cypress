import loginPage from "../pages/loginPage";

describe('Collections', () => {
  beforeEach(() => {
    loginPage.login('hello@fake.com', '1234567890')
  })

  it('create a new collection', () => {

    // click on button to create a new collection
    cy.get('.page-sidebar').contains('New collection').click();


    cy
      .get('.overlay-panel-container')
      .within(() => {
        // type products as collection name
        cy
          .contains('Name')
          .siblings('input')
          .type('products');

        // create a new plain text field
        cy.contains('New field').click();
        cy.get('.dropdown').contains('Plain text').click();
        cy.get('input[placeholder="Field name"]').last().type('name');

        // create a new number field
        cy.contains('New field').click();
        cy.get('.dropdown').contains('Number').click();
        cy.get('input[placeholder="Field name"]').last().type('cost');


        cy.contains('Create').click();
      });

    cy.contains('Successfully created collection').should('be.visible');

  });

  it('delete a collection', () => {
    cy.get('.page-sidebar').contains('products').click();

    cy.get('.page-header [aria-label="Edit collection"]').get('[aria-label="Edit collection"]').click();

    cy
      .get('.overlay-panel-container')
      .within(() => {
        cy.get('[aria-label="More"]').click();
        cy.contains('Delete').click();
        cy.contains('Yes').click();
      });

    cy.contains('Successfully deleted').should('be.visible');

  })
});
