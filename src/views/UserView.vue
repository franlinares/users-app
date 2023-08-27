<script lang="ts" setup>
import { Back } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../stores/users'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const userId = ref(Number(route.params.id))

const goMainPage = () => {
  router.push('/')
}

const getUser = computed(() => userStore.getUserById(userId.value))
</script>

<template>
  <el-card v-if="getUser" class="box-card">
    <template #header>
      <div class="card-header">
        <span>Single User View</span>
        <el-button link type="primary" size="large" :icon="Back" @click="goMainPage" />
      </div>
    </template>
    <div class="text item">
      <span>Name: {{ getUser.name }}</span>
      <span>User Name: {{ getUser.username }}</span>
      <span>Email: {{ getUser.email }}</span>
    </div>
  </el-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.box-card {
  width: 300px;
}
</style>
