import { styled } from "../../styles/stitches.config"

export const LoginContainer = styled('div', {
    px: '32px',
    py: '32px',
    background: 'White',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',

    '@bp3': {
        width: '90%'
    }
})

export const LoginTitle = styled('h1', {
    color: '$blackPrincipal',
    fontSize: '$5',
    fontWeight: '$6',
})

export const LoginForm = styled('form', {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    mt: '32px',

    [`&:valid > #btnEnter`]: {
        backgroundColor: '$blackPrincipal'
    },
})

export const LoginLabel = styled('label', {
    color: '$blackPrincipal',
    fontSize: '$6',
    fontWeight: '$4',
})

export const LoginUsernameInput = styled('input', {
    width: '440px',
    border: '$unselected 1px solid',
    fontSize: "$6",
    py: '16px',
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

    '@bp2': {
        width: '100%'
    }
})

export const LoginButton = styled('button', {
    placeSelf: 'end',
    width: 'fit-content',
    py: '12px',
    px: '48px',
    backgroundColor: '$disabled',
    textTransform: 'uppercase',
    color: 'white',
    mt: '12px',
    cursor: 'pointer',

    '&:focus-visible': {
        outline: '3px solid $blackThird'
    }
})