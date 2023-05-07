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
    <router-link :to="`/portfolio/${project.slug}`">

  <div class="project-card">
    <h3>{{ project.title }}</h3>
    <p>{{ project.type ? project.type.name : '' }}</p>
    <ul v-if="project.technologies && project.technologies.length > 0">
      <li v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</li>
    </ul>
    <h4>
        {{ project.client }}
    </h4>

  </div>
</router-link>
</template>

<style scoped>
.project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: 350px;
  }
  .project-card h3 {
    font-size: 24px;
    margin: 0 0 10px;
    color: black;
  }
  .project-card p {
    margin: 0;
    color: #555;
    font-size: 16px;
  }
  .project-card ul {
    list-style: none;
    margin: 10px 0 0;
    padding: 0;
    font-size: 14px;
    color: #999;
    display: flex;
    justify-content: space-around;
  }
  .project-card ul li {
    margin-bottom: 5px;
    line-height: 1.5rem;
    background-color: rgb(90, 85, 85);
    border-color: #2a2a2a;
    padding: 0 1rem;
    border-radius: 999px;
  }
  .project-card h4 {
    margin-top: 20px;
    font-size: 18px;
    color: #666;
  }
</style>