import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
import { authService } from '../services/auth';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider authService={authService}>
      <Component {...pageProps} />
    </AuthProvider>
  );
} 