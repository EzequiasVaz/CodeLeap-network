import { IEditPost } from '../interfaces/iEditPost';
export async function apiEditPost({ id, content, title }: IEditPost) {
    const url = `${import.meta.env.VITE_API_GET_URL}${id}/`

    await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({
            title: title,
            content: content
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })

}