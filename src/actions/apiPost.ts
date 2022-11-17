
export async function apiPost(username: string, title: string, content: string) {

    const url = import.meta.env.VITE_API_GET_URL

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            title: title,
            content: content
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
}