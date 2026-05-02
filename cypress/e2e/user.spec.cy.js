import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfo.js'

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

    myInfoPage.fillPersonalInfo('Monkey', 'D.', 'Luffy')
    myInfoPage.fillEmployeeDetails('12345678', '31234', '88493723', '2004-04-05')
    myInfoPage.fillPersonalDetails('Brazilian','Single', 'Female', '2004-04-04', '+A', 'Teste Lume')
    myInfoPage.saveForm()
    
  })

})