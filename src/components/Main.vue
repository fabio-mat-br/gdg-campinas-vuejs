<template>
  <div id="main">
    <ul>
      <li v-for="item in collection">
        <h2>{{item.title}}</h2>
        <time>{{item.date}}</time>
        <div>{{item.body}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'main',
  data: () => ({
    collection: []
  }),
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      let self = this
      axios({
        method: 'GET',
        url: 'http://localhost:3000/posts'
      }).then(function (response) {
        self.collection = response.data
      })
    }
  }
}
</script>
<style scoped></style>
