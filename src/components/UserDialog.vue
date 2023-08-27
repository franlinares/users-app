<script lang="ts" setup>
import { type User } from '@/model/user'
import { Avatar } from '@element-plus/icons-vue'
import { computed, reactive, ref } from 'vue'
import { useUserStore } from '../stores/users'

const form = reactive<User>({
  id: 0,
  name: '',
  username: '',
  email: ''
})
const userStore = useUserStore()
const centerDialogVisible = ref(false)

const addUser = () => {
  if (form.name && form.username && form.email) {
    userStore.addUser(form)
  }
  form.name = ''
  form.username = ''
  form.email = ''
  centerDialogVisible.value = false
}

const isSaveDisabled = computed(() => {
  return !form.name || !form.username || !form.email
})
</script>

<template>
  <el-button type="success" @click="centerDialogVisible = true" :icon="Avatar">Add User</el-button>

  <el-dialog v-model="centerDialogVisible" title="Add User" width="50%" center>
    <el-form :model="form" label-width="100px">
      <el-form-item label="Name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="User Name">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="email">
        <el-input v-model="form.email" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="success" @click="addUser" :disabled="isSaveDisabled"> Save </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
