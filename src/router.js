import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'

import Portfolio from './pages/Portfolio.vue'

import AboutMe from './pages/AboutMe.vue'

const router = createRouter({
    history: createWebHistory(),
	routes: [
		{
			path: '/home',
			name: 'home',
			component: Home,
		},
        {
			path: '/portfolio',
			name: 'portfolio',
			component: Portfolio,
		},
        {
			path: '/aboutMe',
			name: 'aboutMe',
			component: AboutMe,
		},
    ],

})

export { router }