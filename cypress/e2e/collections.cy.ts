import loginPage from "../pages/loginPage";
import collectionsPage from "../pages/collectionsPage";
import { slowCypressDown } from 'cypress-slow-down';
slowCypressDown(1000);

describe('Collections', () => {
  beforeEach(() => {
    cy.viewport('iphone-8', 'landscape')
    loginPage.login('hello@fake.com', '1234567890')
  })

  it('create a new collection', () => {

    collectionsPage.createCollection({
      collectionName: 'products',
      fields: [
        { type: 'text', value: 'name' },
        { type: 'number', value: 'cost' },
      ]
    })

    cy.contains('Successfully created collection').should('be.visible');


  });

  it('delete a collection', () => {

    collectionsPage.deleteCollection('products');

    cy.contains('Successfully deleted').should('be.visible');

  })


  it('take a screenshot', () => {
    cy.screenshot('collection-created', { overwrite: true, capture: 'runner' });
  });
});
