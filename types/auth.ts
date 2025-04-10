export interface AuthResponse {
  accessToken: string;
  username: string;
  attributes: {
    id: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
}

export interface AuthError {
  message: string;
  code?: string;
} 