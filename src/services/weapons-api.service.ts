import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { WeaponSearchQuery } from 'src/models/weapon-search-query.model';
import { Weapon } from 'src/models/weapon.model';

@Injectable({
  providedIn: 'root'
})
export class WeaponsApiService {
  private BASE_URL: string = environment.BASE_URL;
  constructor(private _http: HttpClient) {}

  getWeapons(): Observable<Weapon[]> {
    console.info('Calling getWeapons()');
    return this._http.get<Weapon[]>(`${this.BASE_URL}weapon`);
  }

  searchWeapons(weaponSearch: WeaponSearchQuery): Observable<Weapon[]> {
    return this._http.post<Weapon[]>(`${this.BASE_URL}weapon/search`, weaponSearch);
  }

  generateWeapon(): Observable<Weapon> {
    return this._http.get<Weapon>(`${this.BASE_URL}weapon/new`);
  }

  findWeapon(weaponId: number): Observable<Weapon> {
    return this._http.get<Weapon>(`${this.BASE_URL}weapon/${weaponId}`);
  }

  saveWeapon(weapon: Weapon): Observable<Weapon> {
    return this._http.post<Weapon>(`${this.BASE_URL}weapon/${weapon.id}`, weapon);
  }

  updateWeapon(weapon: Weapon): Observable<Weapon> {
    return this._http.put<Weapon>(`${this.BASE_URL}weapon/${weapon.id}`, weapon);
  }

  deleteWeapon(weapon: Weapon): Observable<string> {
    return this._http.delete<string>(`${this.BASE_URL}weapon/${weapon.id}`);
  }
}
