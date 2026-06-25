<template>
  <div class="container">
    <div class="card" v-if="user">
      <img
        :src="`https://ui-avatars.com/api/?name=${user.first_name}+${user.last_name}&background=42b883&color=fff&size=120`"
        class="avatar"
      />

      <h2>{{ user.first_name }} {{ user.last_name }}</h2>

      <p>{{ user.email }}</p>

      <RouterLink to="/">
        <button class="back-btn">
          ← Kembali ke Daftar
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import axios from 'axios'

const user = ref(null)
const route = useRoute()

onMounted(async () => {
  try {
    const res = await axios.get(
      `https://reqres.in/api/users/${route.params.id}`,
      {
        headers: {
          'x-api-key': 'free_user_3FdGzM1G5DFdvFtbvheMoX0xcbN'
        }
      }
    )

    user.value = res.data.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 50px auto;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.card {
  background: white;
  padding: 35px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,.1);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
}

h2 {
  color: #2c3e50;
  margin-bottom: 10px;
}

p {
  color: #666;
  margin-bottom: 25px;
}

.back-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
}

.back-btn:hover {
  background: #2980b9;
}
</style>