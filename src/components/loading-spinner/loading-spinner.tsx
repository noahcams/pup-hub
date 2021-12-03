import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'loading-spinner',
  styleUrl: 'loading-spinner.css',
  shadow: true,
})
export class LoadingSpinner {
  render() {
    return (
      <Host>
        <img id="loading" src="https://cutewallpaper.org/21/loading-gif-transparent-background/Update-throbber-icon-in-Seven-theme-2775725-Drupalorg.gif" alt="loading spinner" />
      </Host>
    );
  }
}
