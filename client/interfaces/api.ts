export interface ServerResponse {
  success: boolean;
  message?: string;
  status?: string;
}

export interface LoginResponse {
  jwt: string
}