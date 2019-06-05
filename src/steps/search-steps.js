/* eslint-disable */
import { Given, When, Then } from "cucumber";

import SearchPage from "../components/search-page";

Then("the search page for {string} should be displayed", string => {
    SearchPage.searchResults.waitForVisible();
    expect(SearchPage.searchResults.getText()).to.include(
        `results for ${string}`
    );
});

Then("the test should be sorted by {string}", orderPreference => {
    const sortedBy = SearchPage.orderedBy[orderPreference].getAttribute(
        "class"
    );
    if (sortedBy.indexOf("coveo-selected") <= -1) {
        SearchPage.orderedBy[orderPreference].click();
        expect(
            SearchPage.orderedBy[orderPreference].getAttribute("class")
        ).to.include("coveo-selected");
    }
});

When("I refine the search by the Transportation industry", () => {
    const industryFilterLocation = Object.values(
        SearchPage.industryFilter.getLocation()
    );
    const [x, y] = industryFilterLocation;
    try {
        browser.scroll(x, y);
    } catch (error) {
        // console.error(error);
    }

    SearchPage.transportationCheckBox.click();
    SearchPage.filterSearchTitle.waitForVisible();
    expect(SearchPage.filterSearchTitle.getText())
        .to.include("Industry")
        .to.include("Transportation");
});

Then("the following result headers should be displayed", headerText => {
    const expectedHeaderText = [].concat(...headerText.raw());
    SearchPage.filterSearchTitle.waitForVisible();
    const actualdHeaderText = SearchPage.getAllResultHeaders();

    for (let i = 0; i < expectedHeaderText; i++) {
        expect(expectedHeaderText[i]).to.equal(
            actualdHeaderText[i],
            "The results header titles are not as expected"
        );
    }
});
