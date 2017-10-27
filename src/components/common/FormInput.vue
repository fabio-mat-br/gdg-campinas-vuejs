<template>
  <div id="formInput">
    <input type="text" name="id" id="id" v-model="id" disabled="disabled">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" name="title" id="title" v-model="title" class="form-control">
    </div>
    <div class="form-group">
      <textarea name="post" rows="8" cols="80" v-model="post" class="form-control"></textarea>
    </div>
    <div class="form-group">
      <button @click="saveData" class="btn btn-primary">Gravar</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'formInput',
  data: () => ({
    id: null,
    post: '',
    title: ''
  }),
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      let self = this
      if (this.$route.params.id) {
        axios({
          method: 'GET',
          url: 'http://localhost:3000/posts/' + this.$route.params.id,
          headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json'
          }
        }).then(result => {
          self.title = result.data.title
          self.post = result.data.body
          self.id = result.data.id
          this.$emit('dataLoaded', result)
        })
      }
    },
    saveData () {
      let method = this.$route.params.id ? 'PUT' : 'POST'
      let url = 'http://localhost:3000/posts/' + (this.$route.params.id ? this.$route.params.id : '')
      axios({
        method: method,
        url: url,
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        data: {
          id: this.$route.params.id ? this.$route.params.id : null,
          title: this.title,
          body: this.post,
          date: new Date()},
        json: true
      }).then(result => {
        this.$emit('dataSaved', result)
      })
    }
  }
}
</script>
<style scoped>
input[disabled]{
  border: none;
  background: transparent;
  color: #DADADA;
  font-size: 36px;

}
</style>
