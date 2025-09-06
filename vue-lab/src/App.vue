
<template>
  <h1>My Classmates</h1>
  <StudentCard name="Kim Dokja" language="JavaScript" hobby="Reading"/>
  <StudentCard name="Yoo Joonghyuk" language="Python" hobby="Fighting"/>
  <StudentCard name="Han Soo Young" language="Java" hobby="Writing"/>
  <StudentCard name="Shin Yoo Soung" language="JavaScript" hobby="Volleyball"/>
  <StudentCard name="Han Jiwon" language="Python" hobby="Sword Fighting"/>
</template>

<script setup>
import StudentCard from './components/Jean.vue'
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




