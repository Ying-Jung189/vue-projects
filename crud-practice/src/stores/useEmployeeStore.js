import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEmployeeStore = defineStore('employee', () => {
  const employeeList = ref([
    { id: 'E-001', name: 'Jack', role: '工程師', gmail: 'jackie111@heim.com' },
    { id: 'E-002', name: 'Will', role: '業務', gmail: 'Billy30@heim.com' },
    { id: 'E-003', name: 'Marry', role: '編輯', gmail: 'Marrygoaround@heim.com' },
    { id: 'E-004', name: 'Lily', role: '行政', gmail: 'Lily111@heim.com' },
    { id: 'E-005', name: 'Alex', role: '業務助理', gmail: 'Alexs@heim.com' },
    { id: 'E-006', name: 'Henry', role: '人資', gmail: 'Henry0566@heim.com' },
  ])

  //刪除資料
  function deleteTarget(targetId) {
    employeeList.value = employeeList.value.filter((emp) => emp.id !== targetId)
  }

  function addItem(newData) {
    const newEmployee = {
      ...newData,
      id: crypto.randomUUID(),
    }
    employeeList.value.push(newEmployee)
  }

  function updateItem(updateData) {
    // 找出這筆資料在陣列中的索引位置 (index)
    const index = employeeList.value.findIndex((emp) => emp.id === updateData.id)

    // 如果有找到 (index 不會是 -1)
    if (index !== -1) {
      // 直接把該位置的舊資料，替換成傳進來的新資料
      employeeList.value[index] = updateData
    }
  }

  return {
    employeeList,
    deleteTarget,
    addItem,
    updateItem,
  }
})
