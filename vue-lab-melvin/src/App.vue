<template>
  <h1>My Classmates</h1>
  <StudentCard name="Melvin" language="Java" hobby="Reading"/>
  <StudentCard name="Reniel" language="Python" hobby="Gooning"/>
  <StudentCard name="Sosa" language="JavaScript" hobby="Playing"/>
  <StudentCard name="Angel" language="Python" hobby="Coding"/>
  <StudentCard name="Mhike" language="PHP" hobby="Watching"/>
</template>

<script setup>
import StudentCard from './components/fullname.vue'
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
