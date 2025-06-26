import { IsNumber } from 'class-validator';

export class PaginationDto {
  @IsNumber()
  page: number = 1;

  @IsNumber()
  limit: number = 10;
}

export class CreateResponseDto<T> {
  data: T;
  message: string;
  statusCode: number;

  constructor(data: T, message: string = 'Success', statusCode: number = 200) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export class ListResponseDto<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  message: string;
  statusCode: number;

  constructor(
    data: T[],
    total: number,
    page: number,
    limit: number,
    message: string = 'Success',
    statusCode: number = 200,
  ) {
    this.data = data;
    this.total = total;
    this.page = page;
    this.limit = limit;
    this.message = message;
    this.statusCode = statusCode;
  }
}
