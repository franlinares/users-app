<script setup lang="ts">
import { computed, onMounted } from 'vue'
import TableList from '../components/TableList.vue'
import { useUserStore } from '../stores/users'

const userStore = useUserStore()

onMounted(() => {
  userStore.fetchUsers()
})

const getUsers = computed(() => userStore.getUsers())
</script>

<template>
  <main>
    <TableList :users="getUsers" />
  </main>
</template>
