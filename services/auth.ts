import { AuthResponse, LoginCredentials, RegisterCredentials, AuthError } from '../types/auth';
import { apiService } from './api';

class AuthService {
  private static instance: AuthService;

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await apiService.request<AuthResponse>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      apiService.setToken(response.accessToken);
      return response;
    } catch (error) {
      console.error('Login Error:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Invalid email or password');
    }
  }

  public async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    try {
      await apiService.request('/auth/register', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });

      return this.login(credentials);
    } catch (error) {
      console.error('Registration Error:', error);
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Registration failed. Please try again.');
    }
  }

  public logout(): void {
    apiService.setToken(null);
  }

  public isAuthenticated(): boolean {
    return !!apiService.getToken();
  }

  public getToken(): string | null {
    return apiService.getToken();
  }
}

export const authService = AuthService.getInstance(); 