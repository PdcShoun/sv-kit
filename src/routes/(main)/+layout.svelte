<script lang="ts">
	import type { Snippet } from 'svelte'
	import Nav from '$lib/layout/Nav.svelte'

	let { children }: { children: Snippet } = $props()
</script>

<div class="flex flex-col">
	<Nav />
	<main class=" flex items-center justify-center bg-slate-400">
		<div class="container">
			{@render children()}
		</div>
	</main>
	<footer>footer</footer>
</div>
