import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Add from '@/components/Add'
import List from '@/components/List'
import Edit from '@/components/Edit'
import Delete from '@/components/Delete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/add/',
      name: 'Add',
      component: Add
    },
    {
      path: '/list/',
      name: 'List',
      component: List
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/delete/:id',
      name: 'Delete',
      component: Delete
    }
  ]
})
