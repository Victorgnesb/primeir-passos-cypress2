import userData from '../fixtures/users/userData.json'


describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField : "[name='username']",
    passwordField : "[name='password']",
    submitButton : "[type='submit']",
    sectionTitleTopBar : '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid : ".orangehrm-dashboard-grid",
    wrongCredentialAlert : '.oxd-alert',
    myInfoButton  : "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField : "[name='firstName']",
    middleNameField : "[name='middleName']",
    lastNameField : "[name='lastName']",
    nickNameField: ".oxd-input--active",
    myInfoSubmit : "[type='submit']",
    employeeIdField : ".oxd-input--active",
    driversLicField : ".oxd-input--active"
  }
  
  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.submitButton).click()
    cy.location('pathname') .should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton) .click()
    cy.get(selectorsList.firstNameField) .clear() .type("Monkey")
    cy.get(selectorsList.middleNameField) .clear() .type("D.")
    cy.get(selectorsList.lastNameField) .clear() .type("Luffy")
    cy.get(selectorsList.nickNameField) .eq(3)  .clear() .type ("Duffy")
    cy.get(selectorsList.employeeIdField) .eq(4)  .clear() .type ("KOTP")
    cy.get(selectorsList.nickNameField) .eq(5)  .clear() .type ("551998")
    cy.get(selectorsList.driversLicField) .eq(6)  .clear() .type ("1234569")
    cy.get(selectorsList.myInfoSubmit) .eq(0).click()
    
  })

    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})