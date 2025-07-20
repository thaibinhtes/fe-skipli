// src/services/UserService.js
import apiClient from "./_api";
import { type AxiosInstance } from "axios";

type TYPE_SEND_OTP = 'email' | 'phone'

class UserService {
    public $api: AxiosInstance;
    

    constructor() {
        this.$api = apiClient;
    }

    getOTP(account: string, type: TYPE_SEND_OTP) {
        this.$api.post('/getOTP', {
            account,
            type
        })
    }

}

export default new UserService();
