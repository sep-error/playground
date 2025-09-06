<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>Favorite Language: {{ language }}</p>
    <p>Hobby: {{ hobby }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  language: String,
  hobby: String
})
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 12px;
  margin: 10px auto;
  border-radius: 8px;
  max-width: 400px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
h2 {
  margin: 0 0 8px;
  color: #2c3e50;
}
p {
  margin: 4px 0;
  color: #555;
}
</style>
