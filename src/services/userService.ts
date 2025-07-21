// src/services/UserService.js
import apiClient from "./_api";
import { type AxiosInstance } from "axios";

export type TYPE_SEND_OTP = 'email' | 'phone'

export interface UserReponse {
  success: boolean;
  data: any;
}



class UserService {
  public $api: AxiosInstance;


  constructor() {
    this.$api = apiClient;
  }

  async getOTP(account: string, type: TYPE_SEND_OTP): Promise<UserReponse> {
    try {
      const res = await this.$api.post('/get-otp', {
        account,
        type
      })
      return res.data
    } catch (error) {
      console.error(error)
      return {
        success: false,
        data: null
      }
    }
  }

  async sendOTP(account: string, otp: string): Promise<UserReponse> {
    try {
      const res = await this.$api.post('/verify-otp', {
        account,
        otp
      })

      return res.data
    } catch (error) {
      console.error(error)
      return {
        success: false,
        data: null
      }
    }
  }

}

export default new UserService();
