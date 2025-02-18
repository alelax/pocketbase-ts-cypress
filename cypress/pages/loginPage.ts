class LoginPage {
  elements = {
    emailInput: () => cy.get('input[type="email"]'),
    passwordInput: () => cy.get('input[type="password"]'),
    submitButton: () => cy.get('button[type="submit"]'),
  }

  login(email: string, password: string) {
    console.log('CYPRESS ENV', Cypress.env('APIKEY'));
    cy.visit('/_/#/login');
    if (!email || !password) return
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.submitButton().click();
  }
}

export default new LoginPage();
