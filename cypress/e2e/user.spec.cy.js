import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfo.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashBoardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  
  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashBoardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalInfo(chance.first(), 'D.', chance.last())
    myInfoPage.fillEmployeeDetails(chance.bb_pin(), chance.ssn(), chance.ssn(), '2030-05-05')
    myInfoPage.fillPersonalDetails('Brazilian','Single', 'Female', '2003-05-05', '+A', chance.string())
    myInfoPage.saveForm()
    
  })

})