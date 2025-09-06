<script setup>
import StudentCard from './components/fullname.vue'
</script>

<template>
  <h1>My Classmates</h1>
  <StudentCard name="Joshua" language="Java" />
  <StudentCard name="Jerome" language="Java" />
  <StudentCard name="Kent" language="Javascript" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
