import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEmployeeStore = defineStore('useEmployeeStore', () => {
  const employeeList = ref([])
  employeeList.value = [
    {
      id: 0,
      name: 'Jack',
      role: '工程師',
      gmail: 'jackie111@heim.com',
    },
    {
      id: 2,
      name: 'Will',
      role: '業務',
      gmail: 'Billy30@heim.com',
    },
    {
      id: 3,
      name: 'Marry',
      role: '編輯',
      gmail: 'Marrygoaround@heim.com',
    },
    {
      id: 4,
      name: 'Lily',
      role: '行政',
      gmail: 'Lily111@heim.com',
    },
    {
      id: 5,
      name: 'Alex',
      role: '業務助理',
      gmail: 'Alexs@heim.com',
    },
    {
      id: 6,
      name: 'Henry',
      role: '人資',
      gmail: 'Henry0566@heim.com',
    },
  ]
})
