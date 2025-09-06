<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <h1>My Classmates</h1>
  <StudentCard name="Kent Angel San Andres" language="PHP" hobby="Playing Online Games"/>
  <StudentCard name="Charles Dungo" language="JavaScript" hobby="Playing Online Games" />
  <StudentCard name="Robin Tolentino" language="Java" hobby="Playing Basketball"/>
</template>

<script setup>
import StudentCard from './components/russelsimon.vue'
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
