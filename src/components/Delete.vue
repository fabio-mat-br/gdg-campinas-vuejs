<template>
  <div id="delete">
<h1>Delete</h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'delete',
  mounted () {
    this.deleteData(this.$route.params.id)
  },
  methods: {
    deleteData (id) {
      let self = this
      axios({
        method: 'DELETE',
        url: 'http://localhost:3000/posts/' + id
      }).then(function (response) {
        self.gridCollection = response.data
      }).then(response => {
        this.$emit('dataRemoved')
        this.$router.push('/')
      })
    }
  }
}
</script>
<style scoped>
</style>
