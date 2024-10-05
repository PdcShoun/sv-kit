<script lang="ts">
	import { Button } from '$lib/components/ui/button'
	import * as Card from '$lib/components/ui/card'
	import { Input } from '$lib/components/ui/input'
	import { Label } from '$lib/components/ui/label'
	import type { ActionData } from './$types'

	let { form }: { form: ActionData } = $props()
</script>

<form action="?/register" method="POST">
	{#if form?.issues}
		{form.issues}
	{/if}
	<Card.Root class="mx-auto max-w-sm">
		<Card.Header>
			<Card.Title class="text-xl">Sign Up</Card.Title>
			<Card.Description>Enter your information to create an account</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="grid gap-4">
				<div class="grid grid-cols-2 gap-4">
					<div class="grid gap-2">
						<Label for="first-name">First name</Label>
						<Input id="first-name" name="firstName" placeholder="Max" required />
					</div>
					<div class="grid gap-2">
						<Label for="last-name">Last name</Label>
						<Input id="last-name" name="lastName" placeholder="Robinson" required />
					</div>
				</div>
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" name="email" placeholder="m@example.com" required />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input id="password" name="password" type="password" />
				</div>
				<Button type="submit" class="w-full">Create an account</Button>
				<Button variant="outline" class="w-full">Sign up with GitHub</Button>
			</div>
			<div class="mt-4 text-center text-sm">
				Already have an account?
				<a href="/login" class="underline"> Sign in </a>
			</div>
		</Card.Content>
	</Card.Root>
</form>
