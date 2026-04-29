class MenuPage {
    selectosList(){
        const selectors = {
            myInfoButton  : "[href='/web/index.php/pim/viewMyDetails']",
            AdminButton : '[href="/web/index.php/admin/viewAdminModule"]'
        }
        return selectors
    }

    accessMyInfo(){
        cy.get(this.selectosList().myInfoButton) .click()
    }

    accessAdmin(){
        cy.get(this.selectosList().performanceButton) .click()
    }
}

export default MenuPage