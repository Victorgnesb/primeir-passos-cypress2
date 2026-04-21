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
    genericField: ".oxd-input--active",
    myInfoSubmit : "[type='submit']",
    dateField : "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    comboBox : ".oxd-select-text--arrow",
    genderBox : ".oxd-radio-wrapper"
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
    cy.get(selectorsList.genericField) .eq(3)  .clear() .type ("Duffy")
    cy.get(selectorsList.genericField) .eq(4)  .clear() .type ("KOTP")
    cy.get(selectorsList.genericField) .eq(5)  .clear() .type ("551998")
    cy.get(selectorsList.dateField) .eq(0) .clear() .type ("2026-5-05")
    cy.get(selectorsList.dateCloseButton) .click()
    cy.get(selectorsList.comboBox) .eq(0) .click() 
    cy.contains('Brazilian') .click()
    cy.get(selectorsList.comboBox) .eq(1) .click() 
    cy.contains('Married') .click()
    cy.get(selectorsList.dateField) .eq(1) .clear() .type ("2077-5-05")
    cy.get(selectorsList.dateCloseButton) .click()
    cy.get(selectorsList.genderBox) .eq(1) .click()
    cy.get(selectorsList.comboBox) .eq(2) .click() 
    cy.contains('O+') .click()
    cy.get(selectorsList.genericField) .eq(9) .clear() .type('Lume')    
    cy.wait (1000)
    cy.get(selectorsList.myInfoSubmit)  .eq(0)  .click()
    cy.get('body') .should('contain', 'Successfully Updated')
    
  })

    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})