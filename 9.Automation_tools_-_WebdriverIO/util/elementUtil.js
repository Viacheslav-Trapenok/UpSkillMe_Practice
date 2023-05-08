class ElementUtil{

    async doClick(element) {
        await element.scrollIntoView({block: "center"});
        await element.waitForDisplayed();
        await element.click();
    }
    async doSetValue(element, value) {
        await element.waitForDisplayed();
        await element.setValue(value);
    }
    async doGetText(element) {
        await element.waitForDisplayed();
        await element.getText();
    }
    async doGetPageTitle() {
        await browser.getTitle();;
    }
    async doIsDisplayed(element) {
        await element.waitForDisplayed();
        await element.isDisplayed();
    }
}

module.exports = new ElementUtil();