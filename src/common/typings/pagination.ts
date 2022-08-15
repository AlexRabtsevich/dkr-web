export interface IPagination<T> {
  page: number;
  totalPages: number;
  totalResults: number;
  results: T[];
}

export interface IPaginationArgs {
  page: number;
}
