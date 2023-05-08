const elementUtil = require('../util/elementUtil');

class PastebinPage{

    //page locators:
    get cookieAcceptBtn() {return $("button.sc-ifAKCX:nth-child(2)")};
    get understandBtn() {return $("//span[text()='OK, I Understand']")};
    get xBtn() {return $("vli.vliIgnore > vli:nth-child(1)")};
    get newPasteTextArea() {return $("textarea#postform-text")};
    get syntaxHighlighting() {return $("#select2-postform-format-container")};
    get bashHighlighting() {return $("//li[text()='Bash']")};
    get pasteExpiration() {return $("#select2-postform-expiration-container")};
    get expiration10min() {return $("//li[text()='10 Minutes']")}; 
    get newPasteTitle() {return $("input#postform-name")};
    get createNewPasteBtn() {return $("//button[text()='Create New Paste']")};
    get bashHiglightningBtn() {return $("//a[text()='Bash']")};
    get codeMatch() {return $('div[class="de1"]')};
    get syntaxHighlightingCheck() {return $('a.h_800:nth-child(1)')}


    //page actions:
    async codeMatchCheck(code) {
        await expect(this.codeMatch).toHaveTextContaining(code);
    }
    async doCookieAccept() {
        await elementUtil.doClick(this.cookieAcceptBtn);
        await elementUtil.doClick(this.understandBtn);
        await elementUtil.doClick(this.xBtn);
    }
    async pasteText(text) {
        await elementUtil.doSetValue(this.newPasteTextArea, text);
    }
    async doBashSyntaxHighlighting() {
        await elementUtil.doClick(this.syntaxHighlighting);
        await elementUtil.doClick(this.bashHighlighting);
    }
    async do10minPasteExpiration() {
        await elementUtil.doClick(this.pasteExpiration);
        await elementUtil.doClick(this.expiration10min);
    }
    async pasteTitle(text) {
        await elementUtil.doSetValue(this.newPasteTitle, text);
    }
    async createNewPaste() {
        await elementUtil.doClick(this.createNewPasteBtn);
    }
    async pageTitleCheck(title) {
        await expect(browser).toHaveTitleContaining(title)
    }
    async highlightingCheck(syntax) {
        await expect(this.syntaxHighlightingCheck).toHaveTextContaining(syntax);
    }

}

module.exports = new PastebinPage();