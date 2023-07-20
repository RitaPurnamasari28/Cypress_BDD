Feature: Login

Background: 
Given User navigate to demoblaze website

Scenario: Login user with correct email and password
When Click login menu
When I enter login credentials
Then Click login button