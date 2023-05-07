<template>
    <div class="container">
        <h1>Portfolio</h1>
    </div>

    <div class="posts">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>

    <div class="pagination">
      <ul>
          <li :class="[ link.active ? 'active' : '', 'page-link']" v-for="link in links" @click="fetchProjectsByUrl(link.url)" :key="link.label" v-html="link.label">
          </li>
      </ul>
    </div>

</template>

<script>
  import axios from 'axios'
  import ProjectCard from '../components/ProjectCard.vue'
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
          this.links = results.links
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

<style>
.posts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .pagination h3 {
    margin-right: 10px;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .active {
    line-height: 1rem;
    color: white !important;
    filter: drop-shadow(0px 0px 4px rgb(255, 255, 255));
  }
  
  .pagination li {
    margin-right: 10px;
    cursor: pointer;
    color: #555;
    font-size: 16px;
  }
  .pagination li:hover {
    line-height: 1rem;
    color: white;
    filter: drop-shadow(0px 0px 4px rgb(255, 255, 255));
  }
</style>