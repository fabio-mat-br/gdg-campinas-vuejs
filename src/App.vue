<template>
  <div id="app">

    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <router-link to="/" class="navbar-brand">
            Simple CRUD
          </router-link>
          <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link to="/add" class="nav-link">Add post</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/list" class="nav-link">List posts</router-link>
              </li>
            </ul>
          </div>
        </nav>
    <div class="container-fluid">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
}
</style>
