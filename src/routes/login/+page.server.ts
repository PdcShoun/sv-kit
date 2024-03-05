import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'
import { BACKEND_API } from '$env/static/private'

export const actions = {
	default: async ({ request, url , cookies}) => {
		const data = await request.formData()
		const email = data.get('email')
		const password = data.get('password')
		console.log(data, BACKEND_API)
		console.log(email, password)
		const response = await fetch(`${BACKEND_API}/api/collections/users/auth-with-password`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ identity: email, password: password }),
		})
		const result = await response.json()
		console.log(result)

    cookies.set('token', result.token, { path: '/' })
		const redirectTo = url.searchParams.get('redirectTo')
		if (redirectTo) redirect(302, `/${redirectTo.slice(1)}`)

		redirect(302, '/')
	},
} satisfies Actions
