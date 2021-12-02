import { newE2EPage } from '@stencil/core/testing';

describe('pup-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pup-app></pup-app>');

    const element = await page.find('pup-app');
    expect(element).toHaveClass('hydrated');
  });
});
