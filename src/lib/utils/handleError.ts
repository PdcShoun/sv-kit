export function handleError(error: unknown): { error: string } {
	if (!error) return { error: 'Unknown error' }

	if (error instanceof Error) {
		return {
			error: error.message,
		}
	} else if (typeof error === 'object') {
		if ('message' in error) {
			return { error: String(error.message) }
		}
		return {
			error: JSON.stringify(error),
		}
	}

	return {
		error: String(error),
	}
}
