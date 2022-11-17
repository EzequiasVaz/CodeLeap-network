import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiDeletePost } from "../../../../actions/apiDeletePost";
import { IDeletePost } from "../../../../interfaces/iDeletePost";
import { setPostsReload } from "../../../../redux/getPostsControl.action";
import { setPostDelete } from "../../../../redux/postsControl.action";
import { enableDomElements } from "../../../../utils/domElements";
import { DeleteButtonsOption, DeleteContainer, DeleteMessageAlert, DeleteModal, DivButtons } from "./style";

export function DeletePost({ id, posts }: IDeletePost) {
    const dispatch = useDispatch()

    async function handleDeletePost() {
        await apiDeletePost(id).then(() => {
            dispatch(setPostDelete(false))
            enableDomElements()
            posts.map((post, i) => {
                if (post.id == id) (
                    posts.splice(i, 1)
                )
            })
        })
    }

    const escClose = useCallback((e: KeyboardEvent) => {
        if (e.code == 'Escape') {
            dispatch(setPostDelete(false))
            enableDomElements()
        }
    }, [])

    useEffect(() => {
        document.addEventListener("keydown", escClose, false)
        return () => document.removeEventListener("keydown", escClose)
    }, [

    ])


    return (
        <>
            <DeleteContainer onClick={() => {
                dispatch(setPostDelete(false))
                enableDomElements()
            }} tabIndex={0}
            >
            </DeleteContainer>
            <DeleteModal role={'deleteContent'} >
                <DeleteMessageAlert aria-level={1}>Are you sure if want to delete this item?</DeleteMessageAlert>
                <DivButtons>
                    <DeleteButtonsOption onClick={() => {
                        dispatch(setPostDelete(false))
                        enableDomElements()
                    }} role='button'>Cancel</DeleteButtonsOption>
                    <DeleteButtonsOption onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                        e.preventDefault()
                        handleDeletePost()
                    }} role='button'>Delete</DeleteButtonsOption>
                </DivButtons>
            </DeleteModal>
        </>
    )
}