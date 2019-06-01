<template>
  <div id="app">
    <b-nav tabs fill type="dark" variant="dark">
        <b-nav-item active><router-link to="/">HOME</router-link></b-nav-item>
        <b-nav-item>ANALITIC LINKER</b-nav-item>
        <b-nav-item>DESIGNER LINKER</b-nav-item>
        <b-nav-item><router-link to="/results">VER RESULTADOS</router-link></b-nav-item>
      </b-nav>
     <!--  <ul>
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/results">VER RESULTADOS</router-link></li>
    </ul>-->

    <img src="./assets/logo.png">

    <h2 class="title">{{appName}}</h2>

    <div v-if="show">
      <p v-for="user in users" :key="user.id">
        {{user.name}}
      </p>
    </div>
    <router-view/>
<!--
    <footer></footer>
-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      appName: 'NACHO-QUIQUE',
      show: true,
      users: [
        {id: 1, name: 'Pablo'},
        {id: 2, name: 'Coco'}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
