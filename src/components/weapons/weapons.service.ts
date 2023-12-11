import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapon } from 'src/models/weapon.model';
import { WeaponsApiService } from 'src/services/weapons-api.service';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {
  private _weaponsAPI: WeaponsApiService = inject(WeaponsApiService);

  getWeapons(): Observable<Weapon[]> {
    return this._weaponsAPI.getWeapons();
  }

  getWeaponById(weaponId: number): Observable<Weapon> {
    return this._weaponsAPI.findWeapon(weaponId);
  }
}
