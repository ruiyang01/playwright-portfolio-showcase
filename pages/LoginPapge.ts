import {Page, Locator, expect} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly submit: Locator;
    readonly error: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder('');
        this.password = page.getByPlaceholder('');
        this.submit = page.getByRole('button', {name: 'Login'});
        this.error = page.locator('[data-test="error"]');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async loginAs(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submit.click();
    }

    async expectErrorShown(msg: string) {
        await expect(this.error).toContainText(msg);
    }


}