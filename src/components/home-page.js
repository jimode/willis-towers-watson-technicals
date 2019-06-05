/* eslint-disable */
import Page from "./page";

const orderedBySelectors = Symbol("orderedBySelectors");

class HomePage extends Page {
    get pageHeader() {
        return browser.$("#wtw-header");
    }

    get countrySelector() {
        return browser.$("#btnCountrySelector");
    }

    get countryToggleSelector() {
        return browser.$('[data-target="#navbar"]');
    }

    get globalEnglishLink() {
        return browser.$('a[title="Global | English"]');
    }

    get searchForm() {
        return browser.$$('input[name="site_search"]')[1];
    }
    get searchButton() {
        return browser.$$('[class="input-group"] button')[1];
    }

    get cookieHeader() {
        return browser.$("[class*='consentHeader']");
    }

    get modal() {
        return browser.$("[class='mainContent']");
    }

    get modalButton() {
        return browser.$("[class='pdynamicbutton'] a[class='call']");
    }

    get iframe() {
        return browser.$('iframe[id^="pop-frame"]');
    }

    open(path) {
        browser.url(path);
    }

    submitSearch(string) {
        this.searchForm.click();
        this.searchForm.keys(string);
        this.searchButton.click();
    }

    getAllResultHeaders() {
        const resultHeaders = [];
        this.resultsListHeaders.forEach(header => {
            resultHeaders.push(header.getText());
        });
        return resultHeaders;
    }
}

export default new HomePage();
