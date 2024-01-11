describe('sample render test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title text', () => {
    cy.get('h1').contains('A Decade of Leadership: Harshit Mehul Propels Horizon Unlimited with Groundbreaking Cost-Saving Product Launch');
  });
});
