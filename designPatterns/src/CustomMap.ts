export interface Mapplable {
  location: { lat: number; lng: number };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mapplable: Mapplable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapplable.location.lat,
        lng: mapplable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapplable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
