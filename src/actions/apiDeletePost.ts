export async function apiDeletePost(id: number) {
    const url = `${import.meta.env.VITE_API_GET_URL}${id}/`

    await fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
}