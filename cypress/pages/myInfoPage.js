class MyInfoPage {
    selectorsList() {
        return {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            genericDateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            saveButton: "[type='submit']",
            genericComboBox: ".oxd-select-text",
            thirdItemComboBox: ":nth-child(3) > span",
            genericRadio: ".oxd-radio-wrapper"
        }
    }

    fillNameDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, id, numberLicense, expirationDateLicense) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(id)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(numberLicense)
        cy.get(this.selectorsList().genericDateField).eq(0).clear().type(expirationDateLicense)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillPersonalDetails(birthday) {
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().thirdItemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().thirdItemComboBox).click()
        cy.get(this.selectorsList().genericDateField).eq(1).clear().type(birthday)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericRadio).eq(1).click()
    }

    fillCustomFields(test) {
        cy.get(this.selectorsList().genericComboBox).eq(2).click({ force: true })
        cy.get(':nth-child(5) > span').click({ force: true })
        cy.get(this.selectorsList().genericField).eq(9).clear().type(test)
    }

    saveForm() {
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get("body").should("contain", "Successfully Updated")
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage
