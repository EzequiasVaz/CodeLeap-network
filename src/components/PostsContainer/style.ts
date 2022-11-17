import { styled } from "../../styles/stitches.config";

export const DivPostContainer = styled('div', {
    height: '100%',
    width: '800px',
    margin: '0 auto',
    backgroundColor: 'White',

    '@bp1': {
        width: '100%',
    }
})


export const PostMainContent = styled('main', {
    height: '100%',
    paddingTop: '40px',
})

export const PostsContentSection = styled('section', {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '16px'
})