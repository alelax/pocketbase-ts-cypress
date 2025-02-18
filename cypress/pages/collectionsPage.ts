export interface CollectionConfig {
  collectionName: string;
  fields: { type: string | number, value: string }[];
}

class CollectionsPage {
  elements = {
    sideBar: () => cy.get('.page-sidebar'),
    collectionPanelOverlay: () => cy.get('.overlay-panel-container')
  }

  createCollection(cfg: CollectionConfig) {

    // click on button to create a new collection
    this.elements.sideBar()
      .contains('New collection')
      .click();

    // type products as collection name
    cy
      .get('label')
      .contains('Name')
      .invoke('prop', 'for')
      .then(value => {
        cy.get(`#${value}`).type(cfg.collectionName);
      })

    this.elements.collectionPanelOverlay()
      .within(() => {
        cfg.fields.forEach(field =>  {
          switch (field.type) {
            case 'text':
              this.createFieldPlainText(field.value);
              break;
            case 'number':
              this.createFieldNumber(field.value);
              break
          }
        })

        cy.contains('Create').click();
      });

  }

  deleteCollection(collectionName: string) {
    this.elements.sideBar().contains('products').click();
    cy.get('.page-header [aria-label="Edit collection"]').get('[aria-label="Edit collection"]').click();

    this.elements
      .collectionPanelOverlay()
      .within(() => {
        cy.get('[aria-label="More"]').click();
        cy.contains('Delete').click();
        cy.contains('Yes').click();
      });
  }


  private createFieldPlainText(value: string) {
    // create a new plain text field
    cy.contains('New field').click();
    cy.get('.dropdown').contains('Plain text').click();
    cy.get('input[placeholder="Field name"]').last().type(value);
  }

  private createFieldNumber(value: string) {
    // create a new number field
    cy.contains('New field').click();
    cy.get('.dropdown').contains('Number').click();
    cy.get('input[placeholder="Field name"]').last().type(value);
  }
}

export default new CollectionsPage();
