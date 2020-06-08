import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Javier',
		lastName: 'Fuentes Mora'
	}
});

export default app;