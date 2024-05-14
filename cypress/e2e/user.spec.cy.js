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

  it('User Info Update - Success', () => { 
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillNameDetails(userInfoData.validNameInfoDetails.firstName, userInfoData.validNameInfoDetails.lastName)

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

})
