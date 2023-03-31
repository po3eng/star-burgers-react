import "@4tw/cypress-drag-drop";

const user = {
  email: "i@rm17.ru",
  password: "123456",
};
const url = "http://localhost:3000";
describe("service is available", () => {
  before(function () {
    cy.visit(url);
  });

  it("add bun to new order", () => {
    cy.visit(`${url}/login`);
    // cy.get("a[href='/profile']").click();
    cy.get(".input_type_email").find(`input`).type(user.email);
    cy.get(".input_type_password").find(`input`).type(user.password);
    cy.get("button[type='submit']").click();

    // // cy.visit(url);
    cy.get(`section[class^="burger-ingredients_buns_section"]`)
      .find(`div[class^="burger-ingredient_card__"]`)
      .first()
      .drag('div[class^="burger-constructor_bun"]');

    cy.get(`section[class^="burger-ingredients_sauce_section"]`)
      .find(`div[class^="burger-ingredient_card__"]`)
      .first()
      .drag('div[class^="burger-constructor_main"]');

    cy.get(`section[class^="burger-ingredients_main_section"]`)
      .find(`div[class^="burger-ingredient_card__"]`)
      .first()
      .drag('div[class^="burger-constructor_main"]');

    cy.get("button").should("contain", "Оформить заказ").click();
    cy.get("p[class^='order-details_order_number__']", { timeout: 30000 }).should("be.visible");
    cy.get(`div[class^="modal_close_"]`).click();
  });
  it("show ingredient modal dialog", () => {
    cy.visit(url);
    cy.get(`section[class^="burger-ingredients_buns_section"]`)
      .find(`div[class^="burger-ingredient_card__"]`)
      .first()
      .then(element => {
        const nameIngredient = element.find("p[class^='burger-ingredient_caption__']").text();
        element.trigger("click");
        cy.get("div[class^='ingredient-details_content__']")
          .find("p[class^='text text_type_main-medium']")
          .should("have.text", nameIngredient);
      });
    cy.get(`div[class^="modal_close_"]`, { timeout: 50000 }).click();
  });
});
