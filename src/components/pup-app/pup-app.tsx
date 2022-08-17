import { Component, State, Host, h } from '@stencil/core';

@Component({
  tag: 'pup-app',
  styleUrl: 'pup-app.css',
  shadow: true,
})
export class PupApp {
  @State() dogs: string[];
  @State() breed: string = 'affenpinscher';
  @State() breeds: object;

  async componentWillRender() {
    try {
      const res = await fetch(`https://dog.ceo/api/breed/${this.breed}/images/random/10`);
      const data = await res.json();
      this.dogs = data.message;

      const breedsRes = await fetch('https://dog.ceo/api/breeds/list/all');
      const breedsData = await breedsRes.json();
      this.breeds = breedsData.message;
    } catch (err) {
      console.log('Please check your internet connection');
    }
  }

  /** Sets state to be the selected breed */
  handleChange(e) {
    this.breed = e.target.value;
  }

  render() {
    return (
      <Host>
        <h1>Welcome to Pup Hub!</h1>
        {/* <breed-selector breed={this.breed} breeds={this.breeds} setBreed={this.setBreed} />
            I wanted to implement this breed-selector component, but couldn't quite figure out
            modifying state through props. */}
        <div>
          <label htmlFor="breeds">Choose a breed: </label>
          <select name="breeds" id="breeds" onChange={e => this.handleChange(e)}>
            {Object.keys(this.breeds).map((breed, i) => (
              <option value={breed} key={i}>
                {breed[0].toUpperCase() + breed.slice(1)}
              </option>
            ))}
          </select>
        </div>
        {this.dogs ? <pup-list dogs={this.dogs} /> : <loading-spinner />}
      </Host>
    );
  }
}
