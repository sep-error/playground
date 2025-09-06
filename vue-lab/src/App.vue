<script setup>
import StudentCard from './components/StudentCard.vue'
</script>

<template>
  <h1>My Classmates</h1>
  <StudentCard name="Kent" language="Bisaya" hobby="Mahilig JackStone" />
  <StudentCard name="Simon" language="Korean" hobby="Mahilig Mag Butas Nang Banana Tree" />
  <StudentCard name="Charles" language="English" hobby="Anak Nang Constructor" />
  <StudentCard name="Jericho" language="English" hobby="Mason Daw Siya" />
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
