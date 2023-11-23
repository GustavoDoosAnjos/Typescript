import { faker } from '@faker-js/faker';
import { Mapplable } from './CustomMap';

export class User implements Mapplable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName('female');
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Name: ${this.name}</h1>
      </div>
    `;
  }
}
