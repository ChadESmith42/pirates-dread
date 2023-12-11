import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'weapons', loadComponent: () => import('../components/weapons/weapons.component').then(c => c.WeaponsComponent) },
  { path: 'weapons/:id', loadComponent: () => import('../components/weapons/weapon-details/weapon-details.component').then(c => c.WeaponDetailsComponent) },
];
