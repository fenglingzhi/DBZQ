<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    {{test}}
    <p style="color: #0e595e">{{title}}</p>
    <ul v-for="(v,i) in list1">
      <li @click="getVal(v.val)">
        <button>{{v.name}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import ax from 'axios'
export default {
  name: 'app',
  data() {
    return {
      test: false,
      title:'',
      list1:[],
      get_obj:{},
    }
  },
  methods:{
    getVal(d){
      alert(d)
    }
  },
  mounted () {
    let vm = this;
    ax.post('/graphql', {
      query: `{
        test(){}
      }`
    }).then(r => {
      let resp = r.data.query;
      this.test = r.data.query.test;
      vm.title = resp.title;
      vm.list1 = resp.arr
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
