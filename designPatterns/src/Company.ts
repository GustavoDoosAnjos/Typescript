import { faker } from '@faker-js/faker';
import { Mapplable } from './CustomMap';

export class Company implements Mapplable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.companyName}</h1>
        <h3>Catchprase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
