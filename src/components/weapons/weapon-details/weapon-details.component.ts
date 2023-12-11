import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Weapon } from 'src/models/weapon.model';
import { WeaponsService } from '../weapons.service';

@Component({
  selector: 'app-weapon-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weapon-details.component.html',
  styleUrls: ['./weapon-details.component.scss']
})
export class WeaponDetailsComponent implements OnInit {
  @Input({ transform: numberAttribute }) weaponId: number = 1;
  weapon: Observable<Weapon | undefined> = of(undefined);
  private _weaponsService: WeaponsService = inject(WeaponsService);
  ngOnInit(): void {
    if (this.weaponId) {
      this.weapon = this._weaponsService.getWeaponById(this.weaponId);
    }
  }
}
