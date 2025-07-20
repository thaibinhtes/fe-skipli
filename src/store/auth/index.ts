import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthType } from '@/types/auth';

interface AuthStore {
  user: AuthType;
  getCodePhone: (phone: string) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    () => ({
      user: {
        phone: '',
        email: ''
      },
      getCodePhone: (phone: string) => {
        localStorage.setItem('jwt-token', phone)
      },
    }),
    { name: 'jwt-token' }
  )
);
