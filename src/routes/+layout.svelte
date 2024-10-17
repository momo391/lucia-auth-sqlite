<script>
	import '../app.css';
	import '@fontsource-variable/overpass';

	let { children } = $props();
</script>

<div class="font-sans min-h-screen">
	{@render children()}
</div>
