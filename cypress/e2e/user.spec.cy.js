import userData from "../fixtures/users/userData.json"
import userInfoData from "../fixtures/userInfo/userInfoData.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"
import MyInfoPage from "../pages/myInfoPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    genericDateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    saveButton: "[type='submit']",
    genericComboBox: ".oxd-select-text",
    thirdItemComboBox: ":nth-child(10) > span"
  }

  it.only('User Info Update - Success', () => { 
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(userInfoData.validNameInfoDetails.firstName, userInfoData.validNameInfoDetails.lastName)

    myInfoPage.fillEmployeeDetails(
      userInfoData.validEmployeeInfoDetails.employeeId, 
      userInfoData.validEmployeeInfoDetails.anotherId,
      userInfoData.validEmployeeInfoDetails.numberLicense,
      userInfoData.validEmployeeInfoDetails.expirationDateLicense,
    )

    myInfoPage.fillPersonalDetails(userInfoData.validPersonalInfoDetails.birthday)

    myInfoPage.fillCustomFields(userInfoData.validCustomFieldsInfoDetails.testField)

    myInfoPage.saveForm()
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
