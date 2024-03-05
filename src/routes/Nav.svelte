<script lang="ts">
	import SignInButton from '$lib/components/SignInButton.svelte'
	let isLogin = true
</script>

<div class="navbar bg-base-300">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost text-xl"
			><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
				><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" /></svg
			></a
		>
	</div>
	<div class="navbar-end">
		<SignInButton />
		<!-- <div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img
						alt="Tailwind CSS Navbar component"
						src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
					/>
				</div>
			</div>
			<ul class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
				{#if isLogin}
					<li><a href="/profile">Profile</a></li>
					<li><button on:click={() => (isLogin = !isLogin)}>Logout</button></li>
				{:else}
					<li><a href="/login">Login</a></li>
				{/if}
			</ul>
		</div> -->
	</div>
</div>
