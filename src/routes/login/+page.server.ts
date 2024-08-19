import { error, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'
import { handleError } from '$lib/utils/handleError'

export const actions = {
	default: async ({ request, url, cookies, fetch }) => {
		const data = await request.formData()
		const email = data.get('email')
		const password = data.get('password')

		const response = await fetch('https://dummyjson.com/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username: email, password }),
		})
		console.log(response)
		if (response.ok) {
			const result = await response.json()
			console.log(result)
			cookies.set('token', result.token, { path: '/' })
		} else {
			return { error: 'Invalid email or password' }
		}

		const redirectTo = url.searchParams.get('redirectTo')
		if (redirectTo) redirect(302, `/${redirectTo.slice(1)}`)

		redirect(302, '/')
	},
} satisfies Actions
