import type { EmployeeType } from "../types/employee";
import apiClient from "./_api";
import { type AxiosInstance } from "axios";

export interface EmployeeResponse {
  success: boolean;
  data?: EmployeeType[];
}

export interface EmployeeDetailResponse {
  success: boolean;
  data?: EmployeeType | null;
}


class EmployeeService {
  public $api: AxiosInstance;
  public endpoint: string

  constructor() {
    this.$api = apiClient;
    this.endpoint = '/employee'
  }

  async get(): Promise<EmployeeResponse> {
    const res = await this.$api.get<EmployeeResponse>(`${this.endpoint}`);
    return res.data;
  }

  async getByID(id: string): Promise<EmployeeDetailResponse> {
    try {
      const res = await this.$api.post(`${this.endpoint}/${id}`);
      return res.data;
    } catch (error) {
      console.error(error)
      return {
        success: false,
        data: null
      }
    }
  }

  async create(data: EmployeeType) {
    try {
      const res = await this.$api.post('/employee', data)
      return res.data
    } catch (error) {
      console.error(error)
    }
  }

  async delete(id: string) {
    try {
      const res = await this.$api.post(`/employee/${id}/delete`)
      return res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export default new EmployeeService()