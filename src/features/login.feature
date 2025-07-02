Feature: Login Page

Scenario Outline: UC-1 Test Login form with empty credentials

  Given I am on the login page
  When I type credentials of <username> and <password>
  When I clear the username
  When I clear the password
  When I click the login button
  Then I should see a message saying <message>

  Examples:
    | username | password             | message                        |
    | problem_user |  secret_sauce    | Epic sadface: Username is required |

Scenario Outline: UC-2 Test Login form with credentials by passing 

Given I am on the login page
When I type credentials of <username> and <password>
When I clear the password
When I click the login button
Then I should see a message saying <message>

    Examples:
    | username | password             | message                        |
    | problem_user |  secret_sauce    |Epic sadface: Password is required|



Scenario Outline: UC-3 Test Login form with credentials by passing Username & Password

Given I am on the login page
When I type credentials of <username> and <password>
And I click the login button
Then I should see the title <title> in the dashboard

    Examples:
    | username | password             | title                        |
    | problem_user |  secret_sauce    | Swag Labs |
