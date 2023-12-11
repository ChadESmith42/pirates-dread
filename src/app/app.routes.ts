import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'weapons', loadComponent: () => import('../components/weapons/weapons.component').then(c => c.WeaponsComponent)}
];
