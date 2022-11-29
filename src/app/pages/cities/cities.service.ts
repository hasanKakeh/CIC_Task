import { Injectable } from '@angular/core';
import { BehaviorSubject, max } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private cities$: BehaviorSubject<any[]> = new BehaviorSubject([
    { id: 0, country: 'Egypt', name: 'Cairo', code: '#045' },
    { id: 1, country: 'Egypt', name: 'Giza', code: '#048' },
  ]);
  constructor() {}

  getCities$() {
    return this.cities$.asObservable();
  }

  getLastCityId() {
    let maxId = 0;
    this.cities$.getValue().forEach((city) => {
      if (city.id > maxId) maxId = city.id;
    });
    return maxId;
  }
  addOrUpdateCity(city: any) {
    let cities = this.cities$.getValue();
    const index = cities.findIndex(({ id }) => city.id === id);
    if (index === -1) {
      this.cities$.next([...cities, { ...city, id: this.getLastCityId() + 1 }]);
      return;
    }
    const temp = [...cities];
    temp[index] = city;
    this.cities$.next(temp);
  }

  delete(id: number) {
    let cities = this.cities$.getValue();
    const temp = cities.filter((city) => city.id != id);
    this.cities$.next(temp);
  }
}
