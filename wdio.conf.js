/* eslint-disable */
const debug = process.env.DEBUG;

exports.config = {
    debug: false,
    execArgv: debug ? ["--inspect=127.0.0.1:5859"] : [],
    deprecationWarnings: false,
    specs: ["./src/features/**/*.feature"],
    exclude: [],
    maxInstances: 5,
    capabilities: [
        {
            maxInstances: 5,
            browserName: "chrome"
        }
    ],
    sync: true,
    logLevel: "error",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "https://www.willistowerswatson.com",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ["selenium-standalone"],
    framework: "cucumber",
    reporters: ["spec"],
    cucumberOpts: {
        backtrace: false,
        compiler: ["js:babel-register"],
        failAmbiguousDefinitions: true,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        snippets: true,
        source: true,
        profile: [],
        require: ["./src/steps/home-steps.js", "./src/steps/search-steps.js"],
        snippetSyntax: undefined,
        strict: true,
        tagExpression: "not @Pending",
        tagsInTitle: false,
        timeout: debug ? 9000000 : 90000
    },

    before: function before() {
        const chai = require("chai");

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    }
};
