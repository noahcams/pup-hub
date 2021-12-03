import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'pup-list',
  styleUrl: 'pup-list.css',
  shadow: true,
})
export class PupList {
  @Prop() dogs: string[];

  render() {
    return (
      <Host class="container">
        {this.dogs && this.dogs.map((dog, i) => (
          <pup-pic dogURL={dog} key={i} />
        ))}
      </Host>
    );
  }
}
