export interface ApiResponse<T = any> {
  data?: T;
  message: string;
  statusCode: number;
  timestamp: string;
}

export interface PaginatedResponse<T = any> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  message: string;
  statusCode: number;
  timestamp: string;
}

export interface DatabaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
