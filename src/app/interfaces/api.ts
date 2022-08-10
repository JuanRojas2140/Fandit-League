export interface Api {
  get:        string;
  parameters: any[];
  errors:     any[];
  results:    number;
  paging:     number;
  response:   Response[];
}
