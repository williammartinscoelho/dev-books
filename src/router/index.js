import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Authors from '@/views/Authors.vue'
import AuthorsCreate from '@/views/AuthorsCreate'
import Books from '@/views/Books.vue'
import BooksCreate from '@/views/BooksCreate'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/authors',
        name: 'Authors',
        component: Authors
    },
    {
        path: '/authors/create',
        name: 'AuthorsCreate',
        component: AuthorsCreate
    },
    {
        path: '/books',
        name: 'Books',
        component: Books
    },
    {
        path: '/books/create',
        name: 'BooksCreate',
        component: BooksCreate
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
