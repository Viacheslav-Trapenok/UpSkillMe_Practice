const pastebinPage = require('../pages/pastebin.page');

describe ("Test suite", () => {

    /*it("I Can Win test", async () => {
        await browser.url("https://pastebin.com/");
        await pastebinPage.doCookieAccept();
        await browser.maximizeWindow();
        await pastebinPage.pasteText("Hello from WebDriver");
        await browser.pause (1000);
        await pastebinPage.do10minPasteExpiration();
        await pastebinPage.pasteTitle("helloweb")
        await browser.pause (5000);
    });*/

    it("Bring It On test", async () => {
        await browser.url("https://pastebin.com/");
        await pastebinPage.doCookieAccept();
        await browser.maximizeWindow();
        await pastebinPage.pasteText(
            'git config --global user.name "New Sheriff in Town"\n\n'+
            'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\n\n'+
            'git push origin master --force');
        await pastebinPage.doBashSyntaxHighlighting();
        await pastebinPage.do10minPasteExpiration();
        await pastebinPage.pasteTitle("how to gain dominance among developers");
        await pastebinPage.createNewPaste();
        await pastebinPage.pageTitleCheck("how to gain dominance among developers");
        await pastebinPage.highlightingCheck('Bash');
        await pastebinPage.codeMatchCheck(
            'git config --global user.name "New Sheriff in Town"',
            'git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")',
            'git push origin master --force');
        await browser.pause (3000);
    });

})