<template>
  <div class="container">
    <div class="card">
      <h2>Tambah Pengguna Baru</h2>

      <form @submit.prevent="createUser">
        <div class="form-group">
          <label>Nama</label>
          <input
            type="text"
            v-model="name"
            placeholder="Masukkan nama"
            required
          />
        </div>

        <div class="form-group">
          <label>Pekerjaan</label>
          <input
            type="text"
            v-model="job"
            placeholder="Masukkan pekerjaan"
            required
          />
        </div>

        <button type="submit" class="save-btn">
          Simpan
        </button>
      </form>

      <div v-if="result" class="result">
        <h3>✅ Berhasil!</h3>

        <p><strong>ID :</strong> {{ result.id }}</p>
        <p><strong>Nama :</strong> {{ result.name }}</p>
        <p><strong>Pekerjaan :</strong> {{ result.job }}</p>
        <p><strong>Dibuat :</strong> {{ result.createdAt }}</p>
      </div>

      <RouterLink to="/">
        <button class="back-btn">
          ← Kembali ke Daftar
        </button>
      </RouterLink>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import axios from 'axios'

const name = ref('')
const job = ref('')
const result = ref(null)

const createUser = async () => {
  try {
    const res = await axios.post(
      'https://reqres.in/api/users',
      {
        name: name.value,
        job: job.value
      },
      {
        headers: {
          'x-api-key': 'free_user_3FdGzM1G5DFdvFtbvheMoX0xcbN'
        }
      }
    )

    result.value = res.data

    name.value = ''
    job.value = ''

  } catch (error) {
    console.error(error)
  }
}
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
  box-shadow: 0 5px 15px rgba(0,0,0,.1);
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #444;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #42b883;
}

.save-btn {
  width: 100%;
  padding: 12px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  margin-top: 10px;
}

.save-btn:hover {
  background: #36996f;
}

.result {
  margin-top: 25px;
  background: #ecfff6;
  padding: 20px;
  border-radius: 10px;
  border-left: 5px solid #42b883;
}

.result h3 {
  margin-top: 0;
  color: #42b883;
}

.back-btn {
  margin-top: 25px;
  width: 100%;
  padding: 12px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.back-btn:hover {
  background: #2980b9;
}
</style>