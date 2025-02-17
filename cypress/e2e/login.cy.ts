describe('Login', () => {

  beforeEach(() => {
    cy.visit('/_/#/login');
  });

  it('user can sign-in', () => {
    cy.get('input[type="email"]').type('hello@fake.com');
    cy.get('input[type="password"]').type('1234567890');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/collections')
  });

  it('user cannot sign-in if credentials are wrong', () => {

    cy.intercept(
      'http://127.0.0.1:8090/api/admins/auth-with-password',
      { method: 'POST' },
      {
        statusCode: 400,
        body: {
          identity: {
            code: "validation_is_email (FAKE)",
            message: "Must be a valid email address."
          }
        }
      }
    )
    cy.get('input[type="email"]').type('asd@asd.com');
    cy.get('input[type="password"]').type('123');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid login credentials').should('be.visible')
  });

});
