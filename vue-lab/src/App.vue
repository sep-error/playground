<template>
  <h1>My Classmates</h1>
  <StudentCard name="Princess" language="Java" hobby="Sleeping"/>
  <StudentCard name="Sofia" language="Python" hobby="Dancing"/>
  <StudentCard name="Ariel" language="JavaScript" hobby="Singing"/>
  <StudentCard name="Belle" language="HTML" hobby="Cooking"/>
  <StudentCard name="Cinderella" language="CSS" hobby="Eating"/>
</template>

<script setup>
import StudentCard from './components/princess.vue'
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
