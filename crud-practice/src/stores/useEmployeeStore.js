import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  getEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} from '@/api/employeesList'

export const useEmployeeStore = defineStore('employee', () => {
  const employeeList = ref([])

 async function fetchEmployees(){
  employeeList.value = await getEmployees()
 }
 async function addEmployee(employee) {
    employeeList.value = await createEmployee(employee)
  }

  async function removeEmployee(targetId) {
    employeeList.value = await deleteEmployee(targetId)
  }

  async function editEmployee(updateData) {
    employeeList.value = await updateEmployee(updateData)
  }

 return{employeeList, fetchEmployees, addEmployee, removeEmployee, editEmployee}
})
