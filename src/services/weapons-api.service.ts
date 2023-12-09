import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WeaponSearchQuery } from 'src/models/weapon-search-query.model';
import { Weapon } from 'src/models/weapon.model';

@Injectable({
  providedIn: 'root'
})
export class WeaponsApiService {
  private _http: HttpClient = inject(HttpClient);

  getWeapons(): Observable<Weapon[]> {
    return this._http.get<Weapon[]>('/api/weapons');
  }

  searchWeapons(weaponSearch: WeaponSearchQuery): Observable<Weapon[]> {
    return this._http.post<Weapon[]>('/api/weapon/search', weaponSearch);
  }

  generateWeapon(): Observable<Weapon> {
    return this._http.get<Weapon>('/api/weapon/new');
  }

  findWeapon(weaponId: number): Observable<Weapon> {
    return this._http.get<Weapon>(`/api/weapon/${weaponId}`);
  }

  saveWeapon(weapon: Weapon): Observable<Weapon> {
    return this._http.post<Weapon>(`api/weapon/${weapon.id}`, weapon);
  }

  updateWeapon(weapon: Weapon): Observable<Weapon> {
    return this._http.put<Weapon>(`api/weapon/${weapon.id}`, weapon);
  }

  deleteWeapon(weapon: Weapon): Observable<string> {
    return this._http.delete<string>(`api/weapon/${weapon.id}`);
  }
}
