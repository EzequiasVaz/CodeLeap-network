export async function apiGetPosts(morePosts = 0) {

    const url = morePosts == 0 ? `${import.meta.env.VITE_API_GET_URL}?limit=10` : `${import.meta.env.VITE_API_GET_URL}?limit=10&offset=${morePosts}`

    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })

    const data = await res.json()

    return data
}