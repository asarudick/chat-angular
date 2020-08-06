import { HttpMethod } from './HttpMethod';

export type Endpoint = {
  url: string | Function;
  method: HttpMethod
};
