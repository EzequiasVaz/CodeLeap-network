import { useEffect, useState } from "react"
import { LoadingMainScreen } from "../../components/Loadings/LoadingMainScreen"
import { PostContainer } from "../../components/PostsContainer"

export function MainScreen() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //to reset position and back to top
        setTimeout(() => {
            setLoading(false)
        }, 300)
    }, [])

    return (

        loading ? <LoadingMainScreen /> :
            <PostContainer />
    )
}