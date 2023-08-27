<script lang="ts" setup>
import { type User } from '@/model/user'
import { Delete, View } from '@element-plus/icons-vue'
import { type PropType } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/users'
import UserDialog from './UserDialog.vue'

const props = defineProps({
  users: {
    type: Array as PropType<User[]>,
    default: () => []
  }
})

const userStore = useUserStore()
const router = useRouter()

const showUser = (id: number) => {
  router.push({ name: 'user-detail', params: { id: id } })
}

const removeUser = (id: number) => {
  if (props.users && props.users.length) {
    userStore.deleteUser(id)
  }
}
</script>

<template>
  <el-table v-if="users" :data="users" style="width: 100%">
    <el-table-column prop="name" label="Name" width="200" />
    <el-table-column prop="username" label="User Name" width="200" />
    <el-table-column prop="email" label="Email" width="300" />
    <el-table-column prop="id" fixed="right" label="Actions" width="150">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="large"
          :icon="View"
          @click="() => showUser(scope.row.id)"
        />
        <el-button
          link
          type="danger"
          size="large"
          :icon="Delete"
          @click="() => removeUser(scope.row.id)"
        />
      </template>
    </el-table-column>
  </el-table>
  <div style="margin: 20px 40px 0 0; display: flex; justify-content: end">
    <UserDialog />
  </div>
</template>
