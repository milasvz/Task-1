import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import loginPage from '../po/login.page';
import homePage from '../po/home.page';

//UC1 UC2 UC3
Given('I am on the login page', async ()=> {
    console.log('Opening login page');
    await loginPage.open();
})

When(/^I type credentials of (.*) and (.*)$/, async (username, password) =>{
    console.log(`Typing username: ${username}`);
    await loginPage.setInput(loginPage.inputUsername, username);
    console.log(`Typing password: ${password}`);
    await loginPage.setInput(loginPage.inputPassword, password);    
})


When('I clear the username', async () => {
    console.log('Clearing input-username');
    await loginPage.clearInput(loginPage.inputUsername);
})

//UC1 and UC2
When('I clear the password', async () => {
    console.log('Clearing input-password');
    await loginPage.clearInput(loginPage.inputPassword);
})
//All
When('I click the login button', async () => {
    console.log('Clicking login button');
    await loginPage.login();
})

//All
Then(/^I should see a message saying (.*)$/, async (message) =>{
    console.log('Checking alert');
    const alertBoxText = loginPage.alertBox.getText();
    console.log(`Expected message: "${message}", Actual: "${alertBoxText}"`);

    expect(alertBoxText).toHaveText(expect.stringContaining(message));
})

Then(/^I should see the title (.*) in the dashboard$/, async (title) =>{
    console.log('Checking title of page');
    const actualTitle = await homePage.readTitle();
    console.log(`Expected title: "${title}", Actual: "${actualTitle}"`);

    expect(actualTitle).toBe(title);
})
