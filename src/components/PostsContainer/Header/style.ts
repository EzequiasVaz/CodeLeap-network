import { styled } from "../../../styles/stitches.config";

export const Header = styled('header', {
    position: 'fixed',
    zIndex: '99',
    top: '0',
    backgroundColor: '$blackPrincipal',
    height: '64px',
    width: '800px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: '40px',
    color: 'White',
    transition: 'all .3s ease-in',

    '&.active-scrolling': {
        backgroundColor: '$backgroundBlurHeader',
        backdropFilter: 'blur(3px)',
        height: '56px',
    },

    '@bp1': {
        width: '100%',
        px: '32px',
    },
    '@bp2': {
        px: '24px'
    }, '@bp4': {
        px: '16px'
    }
})

export const HeaderTitle = styled('h2', {
    fontSize: '$5',
    fontWeight: '$5',
    cursor: 'pointer',

    '@bp2': {
        fontSize: "$mobile2"
    }, '@bp3': {
        fontSize: '$mobile3'
    }, '@bp4': {
        fontSize: '$mobile4'
    }

})

export const HeaderRightSide = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '48px',

    '@bp2': {
        gap: '32px'
    },
    '@bp3': {
        gap: '24px'
    }, '@bp4': {
        gap: '16px',
    }
})

export const HeaderWelcomeMessage = styled('p', {
    fontSize: '$6',
    fontWeight: '$3',

    '@bp2': {
        display: 'flex',
        flexDirection: 'column',
        fontSize: "$mobile5"
    }, '@bp4': {
        fontSize: "$mobile6"
    }
})

export const HeaderUsername = styled('span', {
    fontSize: '$6',
    fontWeight: '$4',

    '@bp2': {
        fontSize: "$mobile5"
    }, '@bp4': {
        fontSize: "$mobile6"
    }
})

export const HeaderNavigation = styled('nav', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

export const UserLogout = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'fit-content',
    width: 'fit-content',
    backgroundColor: 'transparent',
    color: 'White',
    cursor: 'pointer',

    '&:hover': {
        color: '$blackThird'
    }, '&:focus-visible': {
        color: '$blackThird',
        outline: '1px solid $blackThird',
    }
})