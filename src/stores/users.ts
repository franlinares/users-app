import axios from 'axios'
import { defineStore } from 'pinia'
import { type User } from '@/model/user'

/*
Creation of a Pinia store to manage the state and logic of users. This approach ensures scalability and reusability of the user-related functionalities.   
*/

const baseUrl = 'https://jsonplaceholder.typicode.com'
const url = `${baseUrl}/users`

export const useUserStore = defineStore('user', {
  state: (): { users: User[] } => ({
    users: []
  }),
  getters: {
    getUserById: (state) => (id: number) => {
      return state.users.find((user) => user.id === id)
    },
    getUsers: (state) => () => {
      return state.users
    }
  },
  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get<User[]>(url)
        console.log(`users call success`)
        this.users = response.data
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    },
    async addUser(user: User) {
      try {
        const response = await axios.post<User>(url, user)
        console.log('new user added')
        this.users.push(response.data)
      } catch (error) {
        console.error('Error adding user:', error)
      }
    },
    async deleteUser(id: number) {
      try {
        await axios.delete(`${url}/${id}`)
        console.log(`user ${id} removed`)
        const index = this.users.findIndex((user) => user.id === id)
        if (index !== -1) {
          this.users.splice(index, 1)
        }
      } catch (error) {
        console.error('Error deleting user:', error)
      }
    }
  }
})
