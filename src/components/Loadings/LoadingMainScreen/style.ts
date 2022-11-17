import { keyframes } from '@stitches/react';
import { styled } from "../../../styles/stitches.config";

export const LoadingDivFluid = styled('div', {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000'
})

export const LoadingImage = styled('img', {
    width: 'calc(138px*2)',
    height: 'calc(38px*2)',

    '@bp1': {
        width: 'calc(138px*1.8)',
        height: 'calc(38px*1.8)',
    },

    '@bp2': {
        width: 'calc(138px*1.6)',
        height: 'calc(38px*1.6)',
    },

    '@bp3': {
        width: 'calc(138px*1.4)',
        height: 'calc(38px*1.4)',
    },

    '@bp4': {
        width: 'calc(138px*1.2)',
        height: 'calc(38px*1.2)',
    }
})