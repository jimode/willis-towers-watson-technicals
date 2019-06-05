/* eslint-disable */
import { Given, When, Then } from "cucumber";

import HomePage from "../components/home-page";

Given("I navigate to the Willis Towers Watson page", () => {
    HomePage.open("/");
    // Enough time to manually click and accept Cookies - sorry! :-)
    browser.pause(5000);

    // Note: I am restricted from accessing Cookie iframe content
    // =============================================================
    // browser.refresh();
    // const iframe = HomePage.iframe.selector;
    // browser.waitForExist(iframe);
    // let cookieIFrame = HomePage.iframe.value;
    // browser.frame(cookieIFrame);

    browser.moveToObject(HomePage.pageHeader.selector);

    const countrySelector = HomePage.countrySelector.getText();

    if (countrySelector.indexOf("Global") <= -1) {
        const bigNavButton = HomePage.countrySelector;
        const smallToggleButton = HomePage.countryToggleSelector;
        if (bigNavButton.isVisible()) {
            bigNavButton.click();
        } else {
            smallToggleButton.click();
            bigNavButton.click();
            HomePage.globalEnglishLink.click();
        }
    }
    browser.refresh();
});

When("I search for the word {string}", string => {
    const searchFormLocation = Object.values(HomePage.searchForm.getLocation());
    const [x, y] = searchFormLocation;
    try {
        browser.scroll(x, y);
    } catch (error) {
        // console.error(error);
    }

    HomePage.submitSearch(string);
});
