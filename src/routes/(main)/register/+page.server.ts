import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'
import { z } from 'zod'

const RegisterSchema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	email: z.string().email(),
	password: z.string().min(1),
})

export const load: PageServerLoad = async () => {
	// todo
}

export const actions = {
	register: async ({ request }) => {
		const data = await request.formData()
		const registerData = RegisterSchema.safeParse(Object.fromEntries(data))

		if (!registerData.success) {
			return fail(400, { invalid: registerData.error.issues })
		}

		const user = true

		console.log(registerData.data)
		if (user) {
			return fail(400, { userExist: true })
		}
		redirect(303, '/login')
	},
} satisfies Actions
