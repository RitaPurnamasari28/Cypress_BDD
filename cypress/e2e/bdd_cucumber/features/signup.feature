Feature: signup

Background: 
Given I navigate to demoblaze website

Scenario: signup user with correct email and password
When Click Sign Up Menu
When I enter signup credentials
Then Click Sign Up button