import { Global, css } from '@emotion/core'
import React from 'react'

export const Inter = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 100;
          font-display: swap;
          src: url('/fonts/inter/Inter-Thin.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-Thin.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 100;
          font-display: swap;
          src: url('/fonts/inter/Inter-ThinItalic.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-ThinItalic.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 200;
          font-display: swap;
          src: url('/fonts/inter/Inter-ExtraLight.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-ExtraLight.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 200;
          font-display: swap;
          src: url('/fonts/inter/Inter-ExtraLightItalic.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-ExtraLightItalic.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 300;
          font-display: swap;
          src: url('/fonts/inter/Inter-Light.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-Light.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 300;
          font-display: swap;
          src: url('/fonts/inter/Inter-LightItalic.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-LightItalic.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 400;
          font-display: swap;
          src: url('/fonts/inter/Inter-Regular.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-Regular.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 400;
          font-display: swap;
          src: url('/fonts/inter/Inter-Italic.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-Italic.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 500;
          font-display: swap;
          src: url('/fonts/inter/Inter-Medium.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-Medium.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 500;
          font-display: swap;
          src: url('/fonts/inter/Inter-MediumItalic.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-MediumItalic.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 600;
          font-display: swap;
          src: url('/fonts/inter/Inter-SemiBold.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-SemiBold.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 600;
          font-display: swap;
          src: url('/fonts/inter/Inter-SemiBoldItalic.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-SemiBoldItalic.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 700;
          font-display: swap;
          src: url('/fonts/inter/Inter-Bold.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-Bold.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 700;
          font-display: swap;
          src: url('/fonts/inter/Inter-BoldItalic.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-BoldItalic.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 800;
          font-display: swap;
          src: url('/fonts/inter/Inter-ExtraBold.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-ExtraBold.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 800;
          font-display: swap;
          src: url('/fonts/inter/Inter-ExtraBoldItalic.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-ExtraBoldItalic.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  normal;
          font-weight: 900;
          font-display: swap;
          src: url('/fonts/inter/Inter-Black.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-Black.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter';
          font-style:  italic;
          font-weight: 900;
          font-display: swap;
          src: url('/fonts/inter/Inter-BlackItalic.woff2?v=3.13') format('woff2'),
               url('/fonts/inter/Inter-BlackItalic.woff?v=3.13') format('woff');
        }

        @font-face {
          font-family: 'Inter var';
          font-weight: 100 900;
          font-display: swap;
          font-style: normal;
          font-named-instance: 'Regular';
          src: url('/fonts/inter/Inter-roman.var.woff2?v=3.13') format('woff2');
        }

        @font-face {
          font-family: 'Inter var';
          font-weight: 100 900;
          font-display: swap;
          font-style: italic;
          font-named-instance: 'Italic';
          src: url('/fonts/inter/Inter-italic.var.woff2?v=3.13') format('woff2');
        }

        @font-face {
          font-family: 'Inter var experimental';
          font-weight: 100 900;
          font-display: swap;
          font-style: oblique 0deg 10deg;
          src: url('/fonts/inter/Inter.var.woff2?v=3.13') format('woff2');
        }
      `}
    />
  )
}
