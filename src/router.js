
import { createWebHistory, createRouter } from 'vue-router';

import About from '@/views/About.vue';

import GS from '@/views/P_Greatsword.vue';
import LS from '@/views/P_Longsword.vue';
import SNS from '@/views/P_SwordAndShield.vue';
import DB from '@/views/P_Dualblades.vue';
import H from '@/views/P_Hammer.vue';
import HH from '@/views/P_HuntingHorn.vue';
import L from '@/views/P_Lance.vue';
import GL from '@/views/P_Gunlance.vue';
import SA from '@/views/P_Switchaxe.vue';
import CB from '@/views/P_Chargeblade.vue';
import IG from '@/views/P_InsectGlaive.vue';

const routes = [
	{
		path: '/',
		redirect:'/greatsword'
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/greatsword',
		name: 'Tree_GS',
		component: GS,
	},
	{
		path: '/longsword',
		name: 'Tree_LS',
		component: LS,
	},
	{
		path: '/swordandshield',
		name: 'Tree_SNS',
		component: SNS,
	},
	{
		path: '/dualblades',
		name: 'Tree_DB',
		component: DB,
	},
	{
		path: '/hammer',
		name: 'Tree_H',
		component: H,
	},
	{
		path: '/huntinghorn',
		name: 'Tree_HH',
		component: HH,
	},
	{
		path: '/lance',
		name: 'Tree_L',
		component: L,
	},
	{
		path: '/gunlance',
		name: 'Tree_GL',
		component: GL,
	},
	{
		path: '/switchaxe',
		name: 'Tree_SA',
		component: SA,
	},
	{
		path: '/chargeblade',
		name: 'Tree_CB',
		component: CB,
	},
	{
		path: '/insectglaive',
		name: 'Tree_IG',
		component: IG,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;