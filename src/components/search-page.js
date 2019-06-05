/* eslint-disable */
import Page from "./page";

const orderedBySelectors = Symbol("orderedBySelectors");

class SearchPage extends Page {
    get searchForm() {
        return browser.$$('input[name="site_search"]')[1];
    }
    get searchButton() {
        return browser.$$('[class="input-group"] button')[1];
    }

    get searchResults() {
        return browser.$('[class="coveo-results-header"]');
    }

    get searchResultsOrder() {
        return browser.$('[class="coveo-sort-section"]');
    }

    [orderedBySelectors]() {
        const sortContainer = '[class="coveo-sort-section"]';

        return {
            relevance: browser.element(
                `${sortContainer} div[title="Relevance"]`
            ),
            date: browser.element(`${sortContainer} div[title="Date"]`)
        };
    }

    get orderedBy() {
        return this[orderedBySelectors]();
    }

    get industryFilter() {
        return $('[data-title="Industry"]');
    }

    get filterSearchTitle() {
        return $('[class="coveo-breadcrumb-items"]');
    }

    get resultsListHeaders() {
        return $$('div[class="CoveoResultList"] div[class="coveo-title"]');
    }

    get transportationCheckBox() {
        return $('[data-value="Transportation"]');
    }

    getAllResultHeaders() {
        const resultHeaders = [];
        this.resultsListHeaders.forEach(header => {
            resultHeaders.push(header.getText());
        });
        return resultHeaders;
    }
}

export default new SearchPage();
