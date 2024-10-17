<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import '@fontsource-variable/overpass';

	let { children } = $props();
</script>

<ModeWatcher />
<div class="font-sans min-h-screen">
	{@render children()}
</div>
