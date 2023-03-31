import "@4tw/cypress-drag-drop";
import {
  DROP_BUN_SELECTOR,
  DROP_INGREDIENTS_SELECTOR,
  EMAIL_SELECTOR,
  INGREDIENT_NAME_SELECTOR,
  INGREDIENT_SELECTOR,
  INPUT_SELECTOR,
  MODAL_CLOSE_SELECTOR,
  MODAL_DETAILS_SELECTOR,
  MODAL_NAME_SELECTOR,
  ORDER_BUTTON_SELECTOR,
  ORDER_NUMBER_SELECTOR,
  PASSWORD_SELECTOR,
  SECTION_BUNS_SELECTOR,
  SECTION_MAIN_SELECTOR,
  SECTION_SAUSE_SELECTOR,
  SUBMIT_SELECTOR,
} from "./selectors";
const user = {
  email: "i@rm17.ru",
  password: "123456",
};

describe("service is available", () => {
  before(function () {
    cy.visit("/");
  });

  it("add bun to new order", () => {
    cy.visit(`/login`);
    cy.get(EMAIL_SELECTOR).find(INPUT_SELECTOR).type(user.email);
    cy.get(PASSWORD_SELECTOR).find(INPUT_SELECTOR).type(user.password);
    cy.get(SUBMIT_SELECTOR).click();

    // // cy.visit(url);
    cy.get(SECTION_BUNS_SELECTOR).find(INGREDIENT_SELECTOR).first().drag(DROP_BUN_SELECTOR);
    cy.get(SECTION_SAUSE_SELECTOR).find(INGREDIENT_SELECTOR).first().drag(DROP_INGREDIENTS_SELECTOR);
    cy.get(SECTION_MAIN_SELECTOR).find(INGREDIENT_SELECTOR).first().drag(DROP_INGREDIENTS_SELECTOR);

    cy.get(ORDER_BUTTON_SELECTOR).should("contain", "Оформить заказ").click();
    cy.get(ORDER_NUMBER_SELECTOR, { timeout: 30000 }).should("be.visible");
    cy.get(MODAL_CLOSE_SELECTOR).click();
  });

  it("show ingredient modal dialog", () => {
    cy.visit("/");
    cy.get(SECTION_BUNS_SELECTOR)
      .find(INGREDIENT_SELECTOR)
      .first()
      .then(element => {
        const nameIngredient = element.find(INGREDIENT_NAME_SELECTOR).text();
        element.trigger("click");
        cy.get(MODAL_DETAILS_SELECTOR).find(MODAL_NAME_SELECTOR).should("have.text", nameIngredient);
      });
    cy.get(MODAL_CLOSE_SELECTOR, { timeout: 50000 }).click();
  });
});
