interface ServiceResponse<T> {
  status: number;
  success: boolean;
  data: T;
}

export interface Color {
  id: number;
  name: string;
  value: string;
}

export type ColorsResponse = ServiceResponse<Color[]>;
