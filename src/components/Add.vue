<template>
  <div id="add">
<h1>Add</h1>
<form-input @dataSaved="displayInfo" />
<!-- input type="text" name="title" id="title" v-model="title">
<textarea name="post" rows="8" cols="80" v-model="post"></textarea>
<button @click="doPost">Gravar</button -->
  </div>
</template>
<script>
import FormInput from '@/components/common/FormInput'
export default {
  name: 'add',
  components: {
    FormInput
  },
  methods: {
    displayInfo (i) {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
</style>
