import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get alertBox () {
        return $('.error-message-container');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * to login
     */
    //to set values in username and password
    async setInput (input, value) {
        await input.setValue(value);
    }
    //to clear inputs
    async clearInput (input) {
        if(input !== null){
            input.clearValue();
        }
    }

    async login () {
        await this.btnSubmit.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    async open () {
        return super.open();
    }
}

export default new LoginPage();
