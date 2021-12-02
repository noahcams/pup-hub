import { newSpecPage } from '@stencil/core/testing';
import { PupApp } from '../pup-app';

describe('pup-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PupApp],
      html: `<pup-app></pup-app>`,
    });
    expect(page.root).toEqualHtml(`
      <pup-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pup-app>
    `);
  });
});
