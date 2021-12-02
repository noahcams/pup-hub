import { newE2EPage } from '@stencil/core/testing';

describe('pup-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pup-list></pup-list>');

    const element = await page.find('pup-list');
    expect(element).toHaveClass('hydrated');
  });
});
