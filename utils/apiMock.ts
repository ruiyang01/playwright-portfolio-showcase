import {Page} from '@playwright/test';

export async function mockTransfer(page: Page, {status = 200, balance = 950} = {}) {
    await page.route('**/api/transfer', async( route ) => {
        const request = route.request();

        const body = await request.postDataJSON();

        if (body.amount <= 0) return route.fulfill({
            status: 400,
            body: JSON.stringify({error: 'Invalid amount'})
        })

        return route.fulfill({
            status, 
            body: JSON.stringify({
                ok: true,
                newBalance: balance
            })
        })
    })
}