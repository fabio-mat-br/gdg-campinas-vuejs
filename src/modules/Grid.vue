<template>
  <div id="grid">
    <table class="table">
      <thead>
        <tr>
          <th v-for="(value, key, index) in columns">
            {{value}}
          </th>
          <th v-if="actions && actions.length > 0">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in collection">
          <td v-for="(v, col) in columns">{{item[col]}}</td>
          <td v-if="actions && actions.length > 0">
            | <span v-for="action in actions">
              <a :href="action.action + item['id']">{{action.title}}</a> |
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'grid',
  props: [
    'collection',
    'actions',
    'columns'
  ],
  data: () => ({
  })
}
</script>
<style scoped>
</style>
