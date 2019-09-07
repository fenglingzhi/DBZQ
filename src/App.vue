<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    {{test}}
  </div>
</template>

<script>
import ax from 'axios'
export default {
  name: 'app',
  data() {
    return {
      test: false
    }
  },
  mounted () {
    ax.post('/graphql', {
      query: `{
        test(){}
      }`
    }).then(r => {
      this.test = r.data.query.test
    })
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
