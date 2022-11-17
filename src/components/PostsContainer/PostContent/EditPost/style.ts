import { styled } from "../../../../styles/stitches.config";

export const EditContainer = styled('div', {
    position: 'fixed',
    left: '0',
    top: '0',
    height: '100%',
    width: '100%',
    background: '$backgroundBlur',
    backdropFilter: 'blur(0.5px)',
})

export const EditModal = styled('div', {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '-50%',
    right: '-50%',
    margin: 'auto',
    zIndex: '2',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '654px',
    height: 'fit-content',
    backgroundColor: 'White',
    padding: '32px',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',

    '@bp1': {
        width: '95%'
    }
})

export const EditTitle = styled('h6', {
    color: '$blackPrincipal',
    fontSize: "$5",
    fontWeight: '$5',
    '@bp4': {
        fontSize: "$mobile2"
    }
})

export const PostEditForm = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',

    [`&:valid > #btnCreate`]: {
        backgroundColor: '$blackPrincipal'
    }
})

export const PostEditLabel = styled('label', {
    fontSize: '$6',
    fontWeight: '$4',
    mb: '-16px',
    '@bp3': {
        fontSize: "$mobile5"
    }
})

export const PostEditInputTitle = styled('input', {
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

export const PostEditInputContent = styled('textarea', {
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

export const DivButtons = styled('div', {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    gap: '16px'
})

export const EditButtonsOption = styled('button', {
    fontWeight: '$5',
    py: '12px',
    px: '48px',
    color: '$blackPrincipal',
    border: '$blackPrincipal 1px solid',

    '&:hover': {
        color: 'White',
        backgroundColor: '$blackPrincipal'
    }, '&:focus': {
        color: 'White',
        backgroundColor: '$blackPrincipal'
    },
    '@bp3': {
        px: '40px'
    },
    '@bp4': {
        px: '32px'
    }
})