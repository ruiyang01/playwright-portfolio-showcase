import {Page, Locator, expect} from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.title', {hasText: 'Products'})
    }

    async expectedLoaded() {
        await expect(this.title).toBeVisible();
    }

    async addItem(name: string){
        await this.page.getByRole('button', {name: 'Add to cart'}).first().click();
    }

    async openCart() {
        await this.page.locator('#shopping_cart_container').click();
    }
}