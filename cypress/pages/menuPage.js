class MenuPage {
    selectosList(){
        const selectors = {
            myInfoButton  : "[href='/web/index.php/pim/viewMyDetails']",
            AdminButton : '[href="/web/index.php/admin/viewAdminModule"]', 
            performanceButton : '[href="/web/index.php/performance/viewPerformanceModule"]',
            pimButton : '[href="/web/index.php/pim/viewPimModule"]',
            leaveButton : '[href="/web/index.php/leave/viewLeaveModule"]',
            timeButton : '[href="/web/index.php/time/viewTimeModule"]',
            recruitmentButton : '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            directoryButton : '[href="/web/index.php/directory/viewDirectory"]',
            maintenanceButtton : '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            claimButton : '[href="/web/index.php/claim/viewClaimModule"]',
            buzzButton : '[href="/web/index.php/buzz/viewBuzz"]'
        }
        return selectors
    }

    accessMyInfo(){
        cy.get(this.selectosList().myInfoButton) .click()
    }

    accessAdmin(){
        cy.get(this.selectosList().performanceButton) .click()
    }

    accessPerformance(){
        cy.get(this.selectosList().performanceButton) .click()

    }

    accessPim(){
        cy.get(this.selectosList().pimButton) .click()
    }

    accessLeave(){
        cy.get(this.selectosList().leaveButton) .click()
    }

    accessTime(){
        cy.get(this.selectosList().timeButton) .click()
    }

    accessRecruitment(){
        cy.get(this.selectosList().recruitmentButton) .click()
    }

    accessDirectory(){
        cy.get(this.selectosList().directoryButton) .click()
    }

    accessMaintenance(){
        cy.get(this.selectosList().maintenanceButtton) .click()
    }

    accessClaim(){
        cy.get(this.selectosList().claimButton) .click()
    }

    accessBuzz(){
        cy.get(this.selectosList().viewButton) .click() 
    }
}

export default MenuPage