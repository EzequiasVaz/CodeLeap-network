import ContentLoader from "react-content-loader"
import { Header, LoadingDiv, PostContentCreatedDiv, PostContentDiv, SkeletonDiv, UserAndCreatedDateContainer } from './style'

export function LoadingSkeleton() {
    return (
        <>
            {Array(10).fill(10).map((item, index) => {
                return < LoadingDiv key={index}>
                    <Header>
                        <SkeletonDiv />
                        <SkeletonDiv />
                    </Header>
                    <PostContentDiv>
                        <UserAndCreatedDateContainer>
                            <SkeletonDiv />
                            <SkeletonDiv />
                        </UserAndCreatedDateContainer>
                        <PostContentCreatedDiv>
                            <SkeletonDiv />
                            <SkeletonDiv />
                            <SkeletonDiv />
                        </PostContentCreatedDiv>
                    </PostContentDiv>
                </LoadingDiv>
            })

            }
        </>
    )
}