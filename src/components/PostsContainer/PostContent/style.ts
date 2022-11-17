import { styled } from "../../../styles/stitches.config";

export const PostContentContainer = styled('article', {
    margin: '24px auto',
    width: '90%',
    '&:hover': {
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)'
    },
    '&:focus-within': {
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)'
    }
})

export const Header = styled('header', {
    backgroundColor: '$blackPrincipal',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: '32px',
    color: 'White',
})

export const TitlePost = styled('h4', {
    fontSize: '$6',
    fontWeight: '$5',
    maxWidth: '80%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '@bp4': {
        fontSize: '$mobile5'
    }
})

export const PostContentNav = styled('nav', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
})

export const PostDeleteButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        color: '$blackThird'
    }, '&:focus-visible': {
        color: '$blackThird',
        outline: '1px solid $blackThird',
    }
})

export const PostEditButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        color: '$blackThird'
    },
    '&:focus-visible': {
        color: '$blackThird',
        outline: '1px solid $blackThird',
    }
})

export const PostContentDiv = styled('div', {
    px: '32px',
    py: '16px',
    border: '$blackThird 1px solid',
    borderTop: 'none',
})

export const UserAndCreatedDateContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: '16px'
})

export const UserCreator = styled('span', {
    fontSize: '$mobile5',
    fontWeight: '$5',
    color: '$blackFourth',

    '@bp4': {
        fontSize: '$mobile6'
    }
})

export const CreatedDate = styled('span', {
    fontSize: '$mobile5',
    fontWeight: '$4',
    color: '$blackFourth',
    '@bp4': {
        fontSize: '$mobile6'
    }
})

export const TextContentPosted = styled('p', {
    fontSize: '$6',
    fontWeight: '$4',
    color: '$blackPrincipal',

    '@bp4': {
        fontSize: '$mobile5'
    }
})