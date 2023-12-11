import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapon } from 'src/models/weapon.model';
import { WeaponsService } from './weapons.service';

@Component({
  selector: 'app-weapons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent {
  private _weaponsService: WeaponsService = inject(WeaponsService);
  weapons$: Observable<Weapon[]> = this._weaponsService.getWeapons();

  trackWeapons(weapon: Weapon): number {
    return weapon.id;
  }
}
