<template>
  <div id="list">
<h1>List</h1>
<grid :collection="gridCollection" :actions="gridAction" :columns="gridColumns"></grid>
  </div>
</template>
<script>
import axios from 'axios'
import grid from '@/modules/grid'
export default {
  name: 'list',
  components: {
    grid
  },
  data: () => ({
    gridCollection: [],
    gridColumns: {
      'id': 'ID',
      'title': 'Title',
      'date': 'Date'
    },
    gridAction: [
      {'title': 'Edit', action: '#/edit/'},
      {'title': 'Delete', action: '#/delete/'}
    ]
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
        self.gridCollection = response.data
      })
    }
  }
}
</script>
<style scoped>
</style>
