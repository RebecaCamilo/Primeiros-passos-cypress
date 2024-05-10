import userData from "../fixtures/users/userData.json"

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    genericDateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    saveButton: "[type='submit']",
    genericComboBox: ".oxd-select-text",
    thirdItemComboBox: ":nth-child(3) > span"
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index")
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.firstNameField).clear().type("FirstName")
    // cy.get(selectorsList.lastNameField).clear().type("LastName")
    // cy.get(selectorsList.genericField).eq(3).clear().type("Employee")
    // cy.get(selectorsList.genericField).eq(4).clear().type("Id TEST")
    // cy.get(selectorsList.genericField).eq(5).clear().type("Driver's L Num")
    // cy.get(selectorsList.genericField).eq(8).clear().type("Test_Field TEST")
    // cy.get(selectorsList.genericDateField).eq(0).clear().type("2025-05-01") // data 1
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.saveButton).eq(0).click()
    // cy.get("body").should("contain", "Successfully Updated")
    // cy.get('.oxd-toast-close')
    // cy.get(selectorsList.selectTextField).click();
    // cy.get(selectorsList.selectTextField).eq(1)
    // cy.get(selectorsList.selectTextField).eq(2)
    cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get(selectorsList.thirdItemComboBox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.get(selectorsList.thirdItemComboBox).click()
  })


  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})