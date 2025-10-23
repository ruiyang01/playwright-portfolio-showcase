import {test, expect} from '@playwright/test';
import { mockTransfer } from '../utils/apiMock';

test.skip('transfer funds(mocked API)', async({page}) => {
    await mockTransfer(page, {status: 200, balance: 950});
    await page.goto('https://example.com/transfer');

    await page.getByLabel('Recipient').fill('Alice');
    await page.getByLabel('Amount').fill('50');
    await page.getByRole('button', {name: 'Send'}).click();

    await expect(page.getByText('Transfer successful')).toBeVisible();
    await expect(page.getByText('Balance: 950')).toBeVisible();
})