import { getGreeting, getTodos, getAddTodoButton } from '../support/app.po';

describe('todos-todos', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to todos-todos!');
  });

  it('should display todos', () => {
    getTodos().should(t => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTodos().should(t => expect(t.length).equal(3));
  });
});
