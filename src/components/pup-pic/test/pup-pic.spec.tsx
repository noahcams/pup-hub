import { newSpecPage } from '@stencil/core/testing';
import { PupPic } from '../pup-pic';

describe('pup-pic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PupPic],
      html: `<pup-pic></pup-pic>`,
    });
    expect(page.root).toEqualHtml(`
      <pup-pic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pup-pic>
    `);
  });
});
