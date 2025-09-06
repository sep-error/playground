

<template>
  <h1>My Classmates</h1>
  <StudentCard name="Lorena" language="JavaScript" hobby="Dancing"/>
  <StudentCard name="James" language="Python" hobby="Singing"/>
  <StudentCard name="Hendrix" language="Java" hobby="Drawing"/>
  <StudentCard name="Cohen" language="JavaScript" hobby="Playing"/>
  <StudentCard name="Xariah" language="Python" hobby="Reading"/>
</template>

<script setup>
import StudentCard from './components/lorenapuno.vue'
</script>

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
