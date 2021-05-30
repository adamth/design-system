// @ts-nocheck
import { createCss, defaultThemeMap } from "@stitches/react";
import { space, colors } from '../token';

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
    theme: {
      colors,
      space,
    },
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
    },
    utils: {
      m: (config) => (value) => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value,
      }),
      px: (config) => (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (config) => (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      p: (config) => (value) => ({
        paddingLeft: value,
        paddingRight: value,
        paddingTop: value,
        paddingBottom: value,
      }),
      bg: (config) => (value) => ({
        background: value,
      }),
    },
    prefix: '',
    insertionMethod: 'prepend',
    themeMap: defaultThemeMap,
  });