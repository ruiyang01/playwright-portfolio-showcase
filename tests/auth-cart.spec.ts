import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPapge';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Auth + Cart (SauceDemo)', () => {
    test('valid login and add to cart', async({page}) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.loginAs('standard_user', 'secret_sauce');

        const inv = new InventoryPage(page);
        await inv.expectedLoaded();
        await inv.addItem('any');
        await inv.openCart();
        await expect(page.locator('.cart_item')).toHaveCount(1);
    })

    test('invalid login shows error', async({page}) => {
        const login = new LoginPage(page);
        await login.goto();
        await login.loginAs('locked_out_user', 'secret_sauce');
        await login.expectErrorShown('locked out');
    })
})