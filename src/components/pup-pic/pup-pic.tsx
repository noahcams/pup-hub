import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'pup-pic',
  styleUrl: 'pup-pic.css',
  shadow: true,
})
export class PupPic {
  @Prop() dogURL: string;

  render() {
    return (
        <a class="link" href={this.dogURL} target="_blank" download>
          <img src={this.dogURL} alt="dog" />
        </a>
    );
  }

}
