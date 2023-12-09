import { AttributeSearch } from './attribute-search.model';

export interface WeaponSearchQuery {
  nameList: string[],
  typeList: string[],
  durability: AttributeSearch,
  hit_points: AttributeSearch
}
