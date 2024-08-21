<script>
	import Nav from '$lib/layout/Nav.svelte'
	import SideBar from '$lib/layout/SideBar.svelte'
</script>

<Nav />
<div class="container mx-auto flex justify-center gap-4 border border-red-400 md:justify-between">
	<div class="hidden md:block">
		<SideBar />
	</div>
	<div class="border border-green-400">
		<slot />
	</div>
</div>
