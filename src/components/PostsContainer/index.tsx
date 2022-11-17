import { useEffect } from "react";
import { HeaderPostContainer } from "./Header";
import { PostContent } from "./PostContent";
import { PostCreator } from "./PostCreator";
import { DivPostContainer, PostMainContent, PostsContentSection } from "./style";

export function PostContainer() {

    return (
        <DivPostContainer>
            <HeaderPostContainer />
            <PostMainContent>
                <PostCreator />
                <PostsContentSection>
                    <PostContent />
                </PostsContentSection>
            </PostMainContent>
        </DivPostContainer>

    )
}