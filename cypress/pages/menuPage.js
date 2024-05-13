class MenuPage {
    selectorsList() {
        return {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']"
        }
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }
}

export default MenuPage
