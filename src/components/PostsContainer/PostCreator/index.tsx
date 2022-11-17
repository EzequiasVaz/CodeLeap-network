import React, { useState } from "react";
import { useSelector } from "react-redux";
import { apiPost } from "../../../actions/apiPost";
import { RootState } from "../../../redux/store";
import { PostCreatorButton, PostCreatorContainer, PostCreatorForm, PostCreatorInputContent, PostCreatorInputTitle, PostCreatorLabel, PostCreatorTitle } from "./style";
import { useDispatch } from 'react-redux';
import { setPostsReload } from "../../../redux/getPostsControl.action";
import { clearInput } from "../../../utils/domElements";


export function PostCreator() {
    const username = useSelector((state: RootState) => state.user.username)
    const deletePost = useSelector((state: RootState) => state.post.delete)
    const updatePost = useSelector((state: RootState) => state.post.update)
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const dispatch = useDispatch()


    async function sendPost() {
        await apiPost(username, title, content).then(res => {
            dispatch(setPostsReload(true))
            clearInput()
        })
    }


    return (
        <PostCreatorContainer >
            <PostCreatorTitle>
                What’s on your mind?
            </PostCreatorTitle>

            <PostCreatorForm method="POST" onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault()
                sendPost()
            }}>
                <PostCreatorLabel>Title</PostCreatorLabel>
                <PostCreatorInputTitle placeholder="Input a title to post"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setTitle(e.currentTarget.value)
                    }} required tabIndex={updatePost || deletePost ? -1 : 0} />
                <PostCreatorLabel>Content</PostCreatorLabel>
                <PostCreatorInputContent placeholder="Input your content to post"
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        setContent(e.currentTarget.value)
                    }}
                    rows={3}
                    required tabIndex={updatePost || deletePost ? -1 : 0} />
                {
                    title.length >= 1 && content.length >= 1 ? <PostCreatorButton id="btnCreate" tabIndex={updatePost || deletePost ? -1 : 0}>Create</PostCreatorButton> : <PostCreatorButton id="btnCreate" disabled tabIndex={updatePost || deletePost ? -1 : 0}>Create</PostCreatorButton>
                }

            </PostCreatorForm>
        </PostCreatorContainer>
    )
}