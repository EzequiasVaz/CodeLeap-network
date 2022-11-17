import { styled } from "../../../styles/stitches.config";

export const PostCreatorContainer = styled('section', {
    mx: 'auto',
    mt: '64px',
    mb: '24px',
    width: '90%',
    backgroundColor: 'White',
    border: '$blackThird 1px solid',
    px: '32px',
    py: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',

    '&:focus-within': {
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)'
    }
})

export const PostCreatorTitle = styled('h1', {
    fontSize: '$5',

    '@bp4': {
        fontSize: "$mobile2"
    }
})

export const PostCreatorForm = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',

    [`&:valid > #btnCreate`]: {
        backgroundColor: '$blackPrincipal'
    }
})

export const PostCreatorLabel = styled('label', {
    fontSize: '$6',
    fontWeight: '$4',
    mb: '-16px',

    '@bp3': {
        fontSize: "$mobile5"
    }
})

export const PostCreatorInputTitle = styled('input', {
    width: '100%',
    border: '$unselected 1px solid',
    fontSize: "$6",
    py: '12px',
    px: '16px',
    fontWeight: '$4',
    color: '$blackPrincipal',

    '&::placeholder': {
        color: "$unselected"
    },
    '&:focus': {
        borderColor: '$blackSecondary'
    },
    '&:valid': {
        borderColor: '$blackPrincipal'
    },
    '@bp3': {
        fontSize: "$mobile5"
    }


})

export const PostCreatorInputContent = styled('textarea', {
    width: '100%',
    border: '$unselected 1px solid',
    fontSize: "$6",
    py: '12px',
    px: '16px',
    fontWeight: '$4',
    color: '$blackPrincipal',
    resize: 'none',

    '&::placeholder': {
        color: "$unselected"
    },
    '&:focus': {
        borderColor: '$blackSecondary'
    },
    '&:valid': {
        borderColor: '$blackPrincipal'
    },

    '@bp3': {
        fontSize: "$mobile5"
    }
})


export const PostCreatorButton = styled('button', {
    placeSelf: 'end',
    width: 'fit-content',
    py: '12px',
    px: '48px',
    backgroundColor: '$disabled',
    textTransform: 'uppercase',
    color: 'white',
    mt: '12px',
    cursor: 'pointer',

    '&:focus': {
        outline: '3px solid $blackThird'
    }
})

