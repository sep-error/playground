<template>
  <h1>My Classmates</h1>
  <JohnPaulFabian name="John Paul" language="JavaScript" />
  <StudentCard name="Alice" language="JavaScript" />
  <StudentCard name="Bob" language="Python" />
  <StudentCard name="Charlie" language="Java" />
</template>

<script setup>
import StudentCard from './components/StudentCard.vue'
import JohnPaulFabian from './components/JohnPaulFabian.vue'
</script>