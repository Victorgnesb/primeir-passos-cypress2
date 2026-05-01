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

  const selectorsList = {
    //sectionTitleTopBar : '.oxd-topbar-header-breadcrumb-module',
    


  }
  
  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashBoardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalInfo('Monkey', 'D.', 'Luffy')
    myInfoPage.fillEmployeeDetails('12345678', '31234', '88493723', '01/05/2026')
    myInfoPage.saveForm()
    //menuPage.accessAdmin()
    // cy.get(selectorsList.firstNameField) .clear() .type("Monkey")
    // cy.get(selectorsList.middleNameField) .clear() .type("D.")
    // cy.get(selectorsList.lastNameField) .clear() .type("Luffy")
    // cy.get(selectorsList.genericField) .eq(3)  .clear() .type ("Duffy")
    // cy.get(selectorsList.genericField) .eq(4)  .clear() .type ("KOTP")
    // cy.get(selectorsList.genericField) .eq(5)  .clear() .type ("551998")
    // cy.get(selectorsList.dateField) .eq(0) .clear()  .type ("05-05-2025")
    // cy.get(selectorsList.dateCloseButton) .click()
    // cy.get(selectorsList.comboBox) .eq(0) .click() 
    // cy.contains('Brazilian') .click()
    // cy.get(selectorsList.comboBox) .eq(1) .click() 
    // cy.contains('Married') .click()
    // cy.get(selectorsList.dateField) .eq(1) .clear() .type ("05-05-2025")
    // cy.get(selectorsList.dateCloseButton) .click()
    // cy.get(selectorsList.genderBox) .eq(1) .click()
    // cy.get(selectorsList.comboBox) .eq(2) .click() 
    // cy.contains('O+') .click()
    // cy.get(selectorsList.genericField) .eq(9) .clear() .type('Lume')    
    // cy.wait (5000)
    // cy.get(selectorsList.myInfoSubmit)  .eq(0)  .click()
    // cy.wait (3000)
    // cy.get('body') .should('contain', 'Successfully Updated')
    
  })

    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})