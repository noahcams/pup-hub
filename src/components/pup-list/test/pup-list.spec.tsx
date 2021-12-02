import { newSpecPage } from '@stencil/core/testing';
import { PupList } from '../pup-list';

describe('pup-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PupList],
      html: `<pup-list></pup-list>`,
    });
    expect(page.root).toEqualHtml(`
      <pup-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pup-list>
    `);
  });
});
