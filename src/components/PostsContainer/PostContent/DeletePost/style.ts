import { styled } from "../../../../styles/stitches.config";

export const DeleteContainer = styled('div', {
    position: 'fixed',
    left: '0',
    top: '0',
    height: '100%',
    width: '100%',
    background: '$backgroundBlur',
    backdropFilter: 'blur(0.5px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

export const DeleteModal = styled('div', {
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

export const DeleteMessageAlert = styled('span', {
    color: '$blackPrincipal',
    fontSize: "$6",
    fontWeight: '$4'
})

export const DivButtons = styled('div', {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    gap: '16px',

})

export const DeleteButtonsOption = styled('button', {
    fontWeight: '$5',
    py: '12px',
    px: '48px',
    color: '$blackPrincipal',
    border: '$blackPrincipal 1px solid',

    '&:hover': {
        color: 'White',
        backgroundColor: '$blackPrincipal'
    },

    '&:focus': {
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