class DashboardPage {
    selectorsList() {
        return {
            dashboardPath: "/web/index.php/dashboard/index",
            dashboardGrid: ".orangehrm-dashboard-grid"
        }
    }

    checkDashboardPage() {
        cy.location("pathname").should("equal", this.selectorsList().dashboardPath)
        cy.get(this.selectorsList().dashboardGrid).should("be.visible")
    }

}

export default DashboardPage
