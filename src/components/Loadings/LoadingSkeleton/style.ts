import { keyframes } from "@stitches/react";
import { styled } from "../../../styles/stitches.config";

export const loading = keyframes({
    '100%': {
        transform: 'translateX(100%)'
    }
})

export const SkeletonDiv = styled("div", {
    overflow: 'hidden',
    position: 'relative',

    '&::after': {
        display: 'block',
        content: '',
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        transform: 'translateX(-100%)',
        background: 'linear-gradient(90deg, rgba(255,255,255, 0) 0, rgba(255,255,255, 0.2) 20%, rgba(255,255,255, 0.5) 60%, rgba(255,255,255, 0) 100%)',
        animation: `${loading} 2s infinite`
    }
})


export const LoadingDiv = styled('div', {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    py: '24px'
})


export const Header = styled('header', {
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '$blackPrincipal',
    height: '64px',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: '32px',
    color: 'White',

    '&::after': {
        display: 'block',
        content: '',
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        transform: 'translateX(-100%)',
        background: 'linear-gradient(90deg, rgba(255,255,255, 0) 0, rgba(255,255,255, 0.2) 20%, rgba(255,255,255, 0.5) 60%, rgba(255,255,255, 0) 100%)',
        animation: `${loading} 2s infinite`
    },

    [`& ${SkeletonDiv}`]: {
        zIndex: '1',
        backgroundColor: 'White',
        borderRadius: '6px',
        height: '10px',
        width: '72px',

        '&::after': {
            display: 'none',
        },
        '@bp3': {
            height: '8px',
            width: '64px'
        }
    }
})


export const PostContentDiv = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    height: '120px',
    px: '32px',
    py: '16px',
    border: '$blackThird 1px solid',
    borderTop: 'none',
})

export const UserAndCreatedDateContainer = styled('div', {
    width: '100%',
    height: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: '16px',

    [`& ${SkeletonDiv}`]: {
        backgroundColor: '$blackThird',
        borderRadius: '6px',
        height: '10px',
        width: '72px',
        '@bp3': {
            height: '8px',
            width: '64px'
        }
    }
})

export const PostContentCreatedDiv = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',

    [`& ${SkeletonDiv}`]: {
        backgroundColor: '$blackThird',
        borderRadius: '6px',
        height: '8px',
        width: '100%',

    }
})
