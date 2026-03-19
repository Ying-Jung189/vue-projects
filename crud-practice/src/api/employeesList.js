import { employeeList } from '@/data/employeesList'

export async function getEmployees() {
  return [...employeeList]
}

export async function createEmployee(employee) {
  employeeList.push(employee)
  return [...employeeList]
}

export async function deleteEmployee(targetId) {
  const index = employeeList.findIndex((emp) => emp.id === targetId)

  if (index !== -1) {
    employeeList.splice(index, 1)
  }

  return [...employeeList]
}

export async function updateEmployee(updateData) {
  const index = employeeList.findIndex((emp) => emp.id === updateData.id)

  if (index !== -1) {
    employeeList[index] = {
      ...employeeList[index],
      ...updateData,
    }
  }

  return [...employeeList]
}
