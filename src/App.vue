<script>
  import axios from 'axios'
  import ProjectCard from './components/ProjectCard.vue'

  export default ({
    components: {
      ProjectCard
    },
    data () {
      return {
        projects: [],
        lastPage: null,
        currentPage: 1,
        links: [],
      }
    },
    methods: {
      resultsData(results) {
          // gestire la paginazione
          this.lastPage = results.last_page
          this.currentPage= results.current_page
          this.projects = results.data
          console.log(this.projects)
      },
      fetchProjects(page) {
        axios.get('http://127.0.0.1:8000/api/projects', {
          params: {
            page: page
          }
        }) 
        .then(res => {
          this.resultsData(res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
      },
      fetchProjectsByUrl(url) {
        axios.get(url) 
        .then(res => {
          this.resultsData(res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.fetchProjects(this.currentPage)
    }
  })
</script>

<template>
  <div class="posts">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
    <div class="pagination">
      <h1>
        {{ currentPage }}
      </h1>
      <ul>
          <li v-for="n in lastPage" @click="fetchProjects(n)" :key="n">
            {{ n }}
          </li>
      </ul>

      <ul>
          <li v-for="link in links" @click="fetchProjectsByUrl(link.url)" :key="link.label">
            {{ n }}
          </li>
      </ul>
    </div>
  
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
