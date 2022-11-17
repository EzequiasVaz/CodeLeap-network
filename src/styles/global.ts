import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    '*': {
        fontFamily: 'Roboto, sans-serif',
        margin: 0,
        outline: 'none',
        padding: 0,
        boxSizing: 'border-box',
        border: 'none',
    },
    'html': {
        scrollBehavior: 'smooth',
    },
    'body': {
        backgroundColor: '$backgroundPage',
        height: '100%',

    },
    '#root': {
        height: '100%',
    },
    'button': {
        background: 'none',
        cursor: 'pointer',
        color: 'White'
    },
})