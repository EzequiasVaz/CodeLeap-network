import { createStitches } from "@stitches/react";

export const { css, globalCss, styled, theme } = createStitches({
    theme: {
        colors: {
            backgroundPage: '#DDDDDD',
            blackPrincipal: '#212529',
            blackSecondary: '#495057',
            blackThird: '#CED4DA',
            blackFourth: '#777777',
            unselected: '#ADB5BD',
            disabled: '#868E96',
            backgroundBlurHeader: '#212529f2',
            backgroundBlur: '#0000001a',
        },
        space: {

        },
        fontSizes: {
            1: '56px',
            2: '48px',
            3: '40px',
            4: '32px',
            5: '24px',
            6: '16px',
            7: '12px',
            'mobile1': '28px',
            'mobile2': '22px',
            'mobile3': '18px',
            'mobile4': '16px',
            'mobile5': '14px',
            'mobile6': '12px',

        },
        lineHeights: {
            1: '150%',
            2: '130%',
        },
        fontWeights: {
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            5: '500',
            6: '600',
            7: '700',

        },

        transitions: {
        },


    },
    media: {
        bp1: '(max-width: 820px)',
        bp2: '(max-width: 600px)',
        bp3: '(max-width: 424px)',
        bp4: '(max-width: 360px)',
    },
    utils: {
        mx: (value: string) => ({
            marginLeft: value,
            marginRight: value
        }),
        my: (value: string) => ({
            marginTop: value,
            marginBottom: value
        }),
        mb: (value: string) => ({
            marginBottom: value
        }),
        mt: (value: string) => ({
            marginTop: value
        }),
        px: (value: string) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value: string) => ({
            paddingTop: value,
            paddingBottom: value
        })
    }
})