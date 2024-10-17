<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import '@fontsource-variable/overpass';

	let { children } = $props();
</script>

<ModeWatcher />

{@render children()}
