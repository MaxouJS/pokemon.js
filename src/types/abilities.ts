/** A Pokemon ability */
export interface Ability {
  id: number;
  name: string;
  effect: string;
  short_effect: string;
  generation: string;
  is_main_series: boolean;
}
