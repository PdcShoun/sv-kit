import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	// todo
}

const register: Action = async ({ request }) => {
	const data = await request.formData()
	const username = data.get('username')
	const password = data.get('password')

	if (typeof username !== 'string' || typeof password !== 'string' || !username || !password) {
		return fail(400, { invalid: true })
	}

	const user = false

	if (user) {
		return fail(400, { user: true })
	}

	redirect(303, '/login')
}

export const actions: Actions = { register }
