describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h1').contains('Harshit Mehul from Person Darby acquires Horizon Unlimited');
  });
});
