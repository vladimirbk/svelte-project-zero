<script>
	import Header from '../app/components/Header.svelte';
	import Body from '../app/components/Body.svelte';
	import Footer from '../app/components/Footer.svelte';
</script>

<main>
	<Header />
	<Body />
	<Footer />
</main>

<style>
	:global(html){
		height: 100vh;
		width: 100vw;
	}
	:global(body){
		margin: 0;
		padding: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	}
	:global(.content-center){
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>