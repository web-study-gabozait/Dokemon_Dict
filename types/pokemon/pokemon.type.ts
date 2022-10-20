export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
