Feature: Wills Towers Watson
    I want to carry out a search, confirm the results and order accordingly

    Background:
        Given I navigate to the Willis Towers Watson page
        And I search for the word 'test'

    Scenario: String search
        Then the search page for 'test' should be displayed
        And the test should be sorted by 'date'

    Scenario: Refine search
        When I refine the search by the Transportation industry
        Then the following result headers should be displayed
            | Spotlight on Revised NY Financial Regulations                           |
            | Innovating rotorcraft: the connected helicopter                         |
            | Negotiating Brexit: customs, tariffs & the transportation industry      |
            | Empowered employees: The frontline against cyber threats                |
            | Decoding cyber risk: Driving a cyber-savvy workforce                    |
            | Risk megatrends in a changing world                                     |
            | Blockchain ledgers and smart contracts: the future of marine insurance? |