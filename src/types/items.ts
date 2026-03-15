/** A Pokemon item (sprites resolved via asset manifest) */
export interface Item {
  id: number;
  name: string;
  category: string;
  cost: number;
  effect: string;
  short_effect: string;
  attributes: string[];
  fling_power: number | null;
  fling_effect: string | null;
}

/** A Pokemon berry */
export interface Berry {
  id: number;
  name: string;
  item: string;
  firmness: string;
  size: number;
  growth_time: number;
  max_harvest: number;
  smoothness: number;
  soil_dryness: number;
  natural_gift_power: number;
  natural_gift_type: string;
  flavors: BerryFlavor[];
}

/** A berry's flavor value */
export interface BerryFlavor {
  flavor: string;
  potency: number;
}
