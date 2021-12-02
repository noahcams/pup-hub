import { newE2EPage } from '@stencil/core/testing';

describe('pup-pic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pup-pic></pup-pic>');

    const element = await page.find('pup-pic');
    expect(element).toHaveClass('hydrated');
  });
});
