<script setup>
import { ref, onMounted  } from 'vue'
import { useEmployeeStore } from '../stores/useEmployeeStore'

const employeeStore = useEmployeeStore()

const dialogVisible = ref(false)
const isEdit = ref(false) // 判斷當前是「編輯」還是「新增」

const formData = ref({
  id: '',
  name: '',
  role: '',
  email: '',
})
onMounted(() => {
  employeeStore.fetchEmployees()
})
const openAdd = () => {
  isEdit.value = false

  // 清空表單
  formData.value = { id: '', name: '', role: '', email: '' }
  dialogVisible.value = true
}
const openEdit = (row) => {
  isEdit.value = true

  // 清空表單
  formData.value = { ...row }
  dialogVisible.value = true
}

const handleSubmit = () => {
  if (isEdit.value) {
    employeeStore.editEmployee(formData.value)
  } else {
    employeeStore.addEmployee(formData.value)
  }
  dialogVisible.value = false
}
</script>
<template>
  <el-card>
    <div class="upper-nav">
      <el-button type="primary" @click="openAdd"> + 新增員工 </el-button>
    </div>
    <el-table class="employee-list" :data="employeeStore.employeeList" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="role" label="職位" />
      <el-table-column prop="email" label="職位" />
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button size="small" @click="openEdit(scope.row)">編輯</el-button>
          <el-button type="danger" size="small" @click="employeeStore.removeEmployee(scope.row.id)">
            刪除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 編輯和新增彈窗 -->
    <el-dialog v-model="dialogVisible" :title="isEdit ? '編輯員工' : '新增員工'" width="400px">
      <el-form :model="formData" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="formData.name" />
        </el-form-item>
        <el-form-item label="職位">
          <el-input v-model="formData.role" />
        </el-form-item>
        <el-form-item label="信箱">
          <el-input v-model="formData.email" />
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">確認</el-button>
      </template>
    </el-dialog>
  </el-card>
</template>
<style scoped>
.upper-nav {
  text-align: right;
}
.employee-list {
  width: 100%;
}
</style>
