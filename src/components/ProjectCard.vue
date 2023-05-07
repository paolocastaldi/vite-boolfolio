<script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    mounted() {
        console.log(this.project.type)
    },
  }
</script>

<template>

  <div class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.type ? project.type.name : '-' }}</p>
    <ul v-if="project.technologies && project.technologies.length > 0">
      <li v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</li>
    </ul>
  </div>

</template>

<style scoped>
</style>