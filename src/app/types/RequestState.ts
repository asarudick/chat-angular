export type RequestState<T> = {
  result: T;
  pending: boolean;
  error: any;
}
