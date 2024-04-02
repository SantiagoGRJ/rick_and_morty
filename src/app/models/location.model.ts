export interface ILocation {
  info:    Info;
  results: LResult[];
}

export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export interface LResult {
  id:        number;
  name:      string;
  type:      string;
  dimension: string;
  residents: string[];
  url:       string;
  created:   Date;
}

export type LFilter = {
  name ?: string,
  type ?: string,
  dimension ?: string
}
