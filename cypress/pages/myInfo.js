class MyInfoPage {
    selectorList(){
        const selectors = {
                firstNameField : "[name='firstName']",
                middleNameField : "[name='middleName']",
                lastNameField : "[name='lastName']",
                genericField: ".oxd-input--active",
                myInfoSubmit : "[type='submit']",
                dateCloseButton: ".--close",
                comboBox : ".oxd-select-text--arrow",
                genderBox : ".oxd-radio-wrapper"
        }
        return selectors
    }

    fillPersonalInfo(firstName, middleName, lastName){
        cy.get(this.selectorList().firstNameField)  .clear() .type(firstName)
        cy.get(this.selectorList().middleNameField)  .clear() .type(middleName)
        cy.get(this.selectorList().lastNameField) .clear()  .type(lastName)
        
    }

    fillEmployeeDetails(employeeId, otherId, driversLNumber, expiryDate){
        cy.get(this.selectorList().genericField) .eq(3) .clear() .type(employeeId)
        cy.get(this.selectorList().genericField) .eq(4) .clear() .type(driversLNumber)
        cy.get(this.selectorList().genericField) .eq(5) .clear() .type(otherId)
        cy.get(this.selectorList().genericField) .eq(6) .clear() .type(expiryDate) 
        cy.get(this.selectorList().dateCloseButton) .click()

    }
    
    fillPersonalDetails(nationality, maritalStatus, gender, dateOfBirth,bloodType, testField ){
        cy.get(this.selectorList().comboBox) .eq(0) .click()
        cy.contains(nationality) .click()
        cy.get(this.selectorList().comboBox) .eq(1) .click()
        cy.contains(maritalStatus) .click()
        cy.get(this.selectorList().genericField) .eq(8) .clear() .type(dateOfBirth)
        cy.get(this.selectorList().genderBox) .eq(1) .click()
        cy.get(this.selectorList().comboBox) .eq(2) .click() 
        cy.contains(bloodType) .click()
        cy.get(this.selectorList().genericField) .eq(9) .clear() .type(testField) 
    }

    saveForm(){
        cy.get(this.selectorList().myInfoSubmit) .eq(0) .click()
        cy.wait (3000)
        cy.get('body') .should('contain', 'Successfully Updated')
    }


}

export default MyInfoPage