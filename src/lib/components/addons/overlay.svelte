<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		style: String;
	}
	let { style }: Props = $props();
</script>

<div class={cn(style)}></div>
