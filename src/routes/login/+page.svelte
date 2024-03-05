<script lang="ts">
</script>

<div class="hero min-h-screen bg-base-100">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Login now!</h1>
			<p class="py-6">
				Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
				quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
		</div>
		<div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<form class="card-body" method="POST" action="/login">
				<div class="form-control">
					<label for="email" class="label">
						<span class="label-text">Email</span>
					</label>
					<input
						name="email"
						type="email"
						placeholder="email"
						class="input input-bordered"
						required
					/>
				</div>
				<div class="form-control">
					<label for="password" class="label">
						<span class="label-text">Password</span>
					</label>
					<input
						name="password"
						type="password"
						placeholder="password"
						class="input input-bordered"
						required
					/>
					<!-- <div class="label">
						<a href="/" class="label-text-alt link link-hover">Forgot password?</a>
					</div> -->
				</div>
				<div class="form-control mt-6">
					<button type="submit" class="btn btn-primary">Login</button>
				</div>
			</form>
		</div>
	</div>
</div>
