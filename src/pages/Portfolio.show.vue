<template>
    <div class="container">
        <h1 v-if="project">
            {{ project.title }}
        </h1>
    </div>
  </template>

  <script>
    import axios from 'axios'
    export default {
        data() {
            return {
                project: null
            }
        },
        props: ['slug'],
        methods: {
            fetchProject() {
                axios.get(`http://127.0.0.1:8000/api/projects/${ this.slug }`)
                .then(res => {
                    const { success, project} = res.data
                    if (success) {
                        this.project = res.data.results
                        console.log(this.project)
                    } else {
                        this.$router.replace( {name: 'portfolio'} )
                    }
                })
                .catch(err => {
                    this.$router.replace( {name: 'portfolio'} )
                })
            }
        },
        created() {
            this.fetchProject()
        },
    }
  </script>

  <style scoped>
  </style>