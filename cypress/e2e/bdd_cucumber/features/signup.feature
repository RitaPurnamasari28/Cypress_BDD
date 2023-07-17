Feature: Login

Background: 
Given I navigate to demoblaze website

Scenario: Login user with correct email and password
When Click Sign Up Menu
When I enter login credentials
Then Click Sign Up button