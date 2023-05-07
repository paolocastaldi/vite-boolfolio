<template>
    <header>
      <div class="container nav">

        <ul class="nav__menu">
          <li>
            <router-link :to="{name: 'home'}">Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'portfolio'}">Portfolio</router-link>
          </li>
          <li>
            <router-link :to="{name: 'aboutMe'}">Chi sono</router-link>
          </li>
        </ul>

      </div>
    </header> 
  </template>

  <script>
    export default {
    }
  </script>

  <style scoped>
  ul {
    display: flex;
    max-width: 700px;
    margin: 0 auto;
    justify-content: space-between;
    
  }
  </style>