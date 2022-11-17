import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apiEditPost } from "../../../../actions/apiEditPost";
import { IEditPost } from "../../../../interfaces/iEditPost";
import { setPostUpdate } from "../../../../redux/postsControl.action";
import { DivButtons, EditButtonsOption, EditContainer, EditModal, EditTitle, PostEditForm, PostEditInputContent, PostEditInputTitle, PostEditLabel } from "./style";

export function EditPost({ content, id, title, posts }: IEditPost) {
    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')
    const dispatch = useDispatch()


    async function handleEditPost() {
        await apiEditPost({
            id,
            content: newContent.length != 0 ? newContent : content,
            title: newTitle.length != 0 ? newTitle : title,
        }).then(() => {
            dispatch(setPostUpdate(false))
            document.body.style.overflow = 'auto'
            posts?.map(post => {
                if (post.id == id) {
                    post.content = newContent.length != 0 ? newContent : content
                    post.title = newTitle.length != 0 ? newTitle : title
                }
            })
        })
    }

    const escClose = useCallback((e: KeyboardEvent) => {
        if (e.code == 'Escape') {
            dispatch(setPostUpdate(false))
            document.body.style.overflow = 'auto'
        }
    }, [])

    useEffect(() => {
        document.addEventListener("keydown", escClose, false)
        return () => document.removeEventListener("keydown", escClose)
    }, [

    ])


    return (
        <>
            <EditContainer onClick={() => {
                dispatch(setPostUpdate(false))
                document.body.style.overflow = 'auto'
            }}>

            </EditContainer>
            <EditModal>
                <EditTitle >Edit item</EditTitle>
                <PostEditForm method="PATCH" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault()
                    handleEditPost()
                }}>
                    <PostEditLabel>Title</PostEditLabel>
                    <PostEditInputTitle onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewTitle(e.currentTarget.value)
                    }} required defaultValue={title} />
                    <PostEditLabel>Content</PostEditLabel>
                    <PostEditInputContent onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setNewContent(e.currentTarget.value)
                    }} required defaultValue={content} rows={6} />

                    <DivButtons>
                        <EditButtonsOption onClick={() => {
                            dispatch(setPostUpdate(false))
                            document.body.style.overflow = 'auto'
                        }}>Cancel</EditButtonsOption>
                        <EditButtonsOption type="submit">Save</EditButtonsOption>
                    </DivButtons>
                </PostEditForm>

            </EditModal>
        </>
    )
}