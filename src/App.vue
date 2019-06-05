<template>
  <div id="app" class="bgimg">

    <b-nav tabs fill type="dark" variant="dark">
        <b-nav-item active><router-link to="/">HOME</router-link></b-nav-item>
        <b-nav-item>ANALITIC LINKER</b-nav-item>
        <b-nav-item>DESIGNER LINKER</b-nav-item>
        <b-nav-item><router-link to="/results">VER RESULTADOS</router-link></b-nav-item>
      </b-nav>

       <h2 class="title">{{appName}}</h2>
       <div v-if="show">
         <p v-for="user in users" :key="user.id">
           {{user.name}}
         </p>
       </div>
       <router-view/>

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

<style type="text/css">
  .bgimg {
    background-image: url('./images/back.png');
    height: 786px;
    width: 1320px;
  }
</style>
