// utils/common-utils.ts
import { Page, expect } from '@playwright/test';

export class CommonUtils {
    constructor(private page: Page) {}

    async alertHandler(page: Page, errorMessage: string ): Promise<void> {
        page.on('dialog', async dialog => {
            expect(dialog.type()).toContain('alert');
            expect(dialog.message()).toContain(errorMessage);
            await dialog.accept();
        });
    }

    async validateErrorMessage(actualMessage: string, expectedMessage: string) {
        await expect(actualMessage).toContain(expectedMessage);
    }
}