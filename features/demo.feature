Feature: I am going to validate Calculator App

@protractorsite
Scenario: Protractor testing

Given I will navigate to "Protractor" Site
# When I add two numbers "3" and "5"
# Then the output displayed should be "8"

@caltesting
Scenario: Calculator Add functionality testing

Given I will navigate to "Cal" Site
When I add two numbers "3" and "5"
Then the output displayed should be "7"

@caltesting
Scenario: Calculator Add functionality testing

Given I will navigate to "Cal" Site
When I add two numbers "3" and "5"
Then the output displayed should be "8"
