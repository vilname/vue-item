<template>
  <div id="app" class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

