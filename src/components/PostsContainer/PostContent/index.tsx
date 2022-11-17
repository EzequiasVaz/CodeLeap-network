import { PostContentDiv, Header, PostContentContainer, PostContentNav, PostDeleteButton, PostEditButton, TitlePost, UserAndCreatedDateContainer, UserCreator, CreatedDate, TextContentPosted } from "./style";
import { NotePencil, Trash } from 'phosphor-react'
import { DeletePost } from "./DeletePost";
import { EditPost } from "./EditPost";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setPostDelete, setPostUpdate } from "../../../redux/postsControl.action";
import { apiGetPosts } from "../../../actions/apiGetPosts";
import { useEffect, useRef, useState } from "react";
import { IPostContent } from "../../../interfaces/iPostContent";
import { setPostsReload } from "../../../redux/getPostsControl.action";
import { dateConverter } from "../../../utils/dateConverter";
import { LoadingSkeleton } from "../../Loadings/LoadingSkeleton";
import { disableDomElements } from "../../../utils/domElements";

export function PostContent() {


    const [posts, setPosts] = useState<IPostContent[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const reload = useSelector((state: RootState) => state.getPostsControl.reload)
    const userLogged = useSelector((state: RootState) => state.user.username)
    const [actualIDClicked, setActualIDClicked] = useState(0)
    const [actualPostTitle, setActualPostTitle] = useState('')
    const [actualPostContent, setActualPostContent] = useState('')
    const deletePost = useSelector((state: RootState) => state.post.delete)
    const updatePost = useSelector((state: RootState) => state.post.update)
    const dispatch = useDispatch()

    const itemToObserver = useRef(null)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [offsetPosts, setOffsetPosts] = useState(10)

    const callbackFunction: IntersectionObserverCallback = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    const options: IntersectionObserverInit = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)

        itemToObserver.current && observer.observe(itemToObserver.current)

        return () => {
            itemToObserver.current && observer.unobserve(itemToObserver.current)
        }

    }, [itemToObserver, options])

    //First Time or post/edit/delete
    useEffect(() => {

        setIsLoading(true)

        apiGetPosts().then(posts => {
            setPosts(posts.results)
            setIsLoading(false)
        })

        //reset all next requisition requisites
        if (reload) {
            setHasMore(true)
            setOffsetPosts(10)
        }

        dispatch(setPostsReload(false))

    }, [reload])


    useEffect(() => {

        if (isVisible && hasMore) {
            setIsLoading(true)
            apiGetPosts(offsetPosts).then(morePosts => {
                //concat new posts and set more offset to get new req
                setPosts(posts.concat(morePosts.results))
                setOffsetPosts(offsetPosts + 10)
                setIsLoading(false)

                //check if has more data to req
                if (morePosts.next == null) {
                    setHasMore(false)
                }
            })
        }

    }, [isVisible])

    return (
        <>
            {
                isLoading && posts.length == 0 && hasMore ? <LoadingSkeleton /> : posts.map((post, index) => {
                    return (
                        <PostContentContainer ref={index + 1 == posts.length ? itemToObserver : null} key={post.id}>
                            <Header>
                                <TitlePost>{post.title}</TitlePost>
                                {userLogged == post.username && <PostContentNav>
                                    <PostEditButton onClick={() => {
                                        dispatch(setPostUpdate(true))
                                        disableDomElements()
                                        setActualIDClicked(post.id)
                                        setActualPostTitle(post.title)
                                        setActualPostContent(post.content)
                                    }} tabIndex={updatePost || deletePost ? -1 : 0}><NotePencil size={24} /></PostEditButton>
                                    <PostDeleteButton onClick={() => {
                                        dispatch(setPostDelete(true))
                                        disableDomElements()
                                        setActualIDClicked(post.id)
                                    }} tabIndex={updatePost || deletePost ? -1 : 0}><Trash size={24} /></PostDeleteButton>
                                </PostContentNav>}
                            </Header>
                            <PostContentDiv>
                                <UserAndCreatedDateContainer>
                                    <UserCreator>@{post.username}</UserCreator>
                                    <CreatedDate>{dateConverter(post.created_datetime)}</CreatedDate>
                                </UserAndCreatedDateContainer>
                                <TextContentPosted>
                                    {post.content}
                                </TextContentPosted>
                            </PostContentDiv>
                        </PostContentContainer>
                    )
                })
            }

            {isLoading && hasMore && <LoadingSkeleton />}

            {deletePost && <DeletePost id={actualIDClicked} key={actualIDClicked} posts={posts} />}
            {updatePost && <EditPost id={actualIDClicked} content={actualPostContent} title={actualPostTitle} key={actualIDClicked} posts={posts} />}


        </>

    )
}