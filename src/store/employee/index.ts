import { create } from 'zustand';
import type { EmployeeType } from '../../types/employee';
import employeeService, { type EmployeeResponse, type EmployeeDetailResponse } from '../../services/employeeService';

interface EmployeeStore {
  employees: EmployeeType[];
  fetchEmployees: () => void;
  getEmployee: (id: string) => Promise<EmployeeType | null>;
  deleteEmployee: (id: string) => Promise<EmployeeResponse>;
}



const useEmployeeStore = create<EmployeeStore>()((set) => ({
  employees: [],
  fetchEmployees: async () => {
    try {
      const res = await employeeService.get();
      if (res?.success) {
        set({ employees: res.data });
      }
    } catch (error) {
      console.error("Failed to fetch employees", error);
    }
  },

  getEmployee: async (id: string): Promise<EmployeeType | null> => {
    try {
      const res: EmployeeDetailResponse = await employeeService.getByID(id);
      return res?.success ? res?.data || null
        : null;
    } catch {
      return null;
    }
  },

  deleteEmployee: async (id: string) => {
    try {
      const res = await employeeService.delete(id);
      return res
    } catch (error) {
      console.error(error)
      return { success: false }
    }
  }
}));

export default useEmployeeStore;
