import {Page, Locator, expect} from '@playwright/test';

export class TodoPage {
    readonly page: Page;
    readonly input: Locator;

    constructor(page: Page) {
        this.page = page;
        this.input = page.getByPlaceholder('What needs to be done?');
    }

    async goto() {
        await this.page.goto('/todomvc');
    }

    async addTodo(text: string) {
        await this.input.fill(text);
        await this.input.press('Enter');
    }

    async toggleFirst(){
        await this.page.locator('.toggle').first().check();
    }

    async deleteFirst() {
        await this.page.locator('.destroy').first().click({force: true});
    }

    async expectCount(n: number) {
        await expect(this.page.getByText(`${n} item`)).toBeVisible();
    }
}