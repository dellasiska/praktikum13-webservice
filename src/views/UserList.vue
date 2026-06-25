<template>
  <div class="container">
    <h2>Daftar Pengguna</h2>

    <RouterLink to="/create">
      <button class="add-btn">+ Tambah Pengguna</button>
    </RouterLink>

    <div v-if="loading" class="loading">
      Memuat data...
    </div>

    <div v-else class="user-list">
      <div class="user-card" v-for="user in users" :key="user.id">
        <img
        :src="`https://ui-avatars.com/api/?name=${user.first_name}+${user.last_name}&background=42b883&color=fff`"
        class="avatar"
        />

        <div class="user-info">
        <div>
            <h3>{{ user.first_name }} {{ user.last_name }}</h3>
            <p>{{ user.email }}</p>
        </div>

        <RouterLink :to="`/detail/${user.id}`">
            <button class="detail-btn">Lihat Detail</button>
        </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('https://reqres.in/api/users', {
      headers: {
        'x-api-key': 'free_user_3FdGzM1G5DFdvFtbvheMoX0xcbN'
      }
    })

    users.value = res.data.data
  } catch (error) {
    console.error('Gagal mengambil data:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

.add-btn {
  background: #42b883;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 14px;
}

.add-btn:hover {
  background: #36996f;
}

.loading {
  text-align: center;
  font-size: 18px;
  margin-top: 30px;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 20px;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 25px;
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  width: 500px;
  margin: auto;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.user-card:hover {
  transform: translateY(-3px);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f0f0f0;
}

.user-info {
  flex: 1;
}

.user-info h3 {
  margin: 0;
  color: #34495e;
}

.user-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info div {
  display: flex;
  flex-direction: column;
}

.detail-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 18px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
}

.detail-btn:hover {
  background: #2980b9;
}
</style>