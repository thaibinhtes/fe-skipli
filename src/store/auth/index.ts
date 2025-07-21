import { create } from 'zustand';
import { type AuthType } from '../../types/auth';
import userService, { type TYPE_SEND_OTP, type UserReponse } from '../../services/userService';

interface AuthStore {
  user?: AuthType;
  getOTP: (account: string, type: TYPE_SEND_OTP) => Promise<UserReponse>;
  sendOTP: (account: string, otp: string) => Promise<UserReponse>;
}


const initialUser: AuthType = {
  phone: '',
  email: '',
};

const useAuthStore = create<AuthStore>(() => ({
  user: initialUser,
  getOTP: async (account: string, type: TYPE_SEND_OTP) => {
    const res = await userService.getOTP(account, type);
    return res
  },

  sendOTP: async (account: string, otp: string) => {
    const res = await userService.sendOTP(account, otp);
    return res
  }
}));


export default useAuthStore;
