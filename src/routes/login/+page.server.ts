import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'
import { BACKEND_API } from '$env/static/private'
import { handleError } from '$lib/utils/handleError'

export const actions = {
	default: async ({ request, url, cookies }) => {
		const data = await request.formData()
		const email = data.get('email')
		const password = data.get('password')

		try {
			const response = await fetch(`${BACKEND_API}/api/collections/users/auth-with-password`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ identity: email, password }),
			})
			if (response.ok) {
				const result = await response.json()
				console.log(result)
				cookies.set('token', result.token, { path: '/' })
			}
		} catch (error) {
      return handleError(error)
		}

		const redirectTo = url.searchParams.get('redirectTo')
		if (redirectTo) redirect(302, `/${redirectTo.slice(1)}`)

		redirect(302, '/')
	},
} satisfies Actions
