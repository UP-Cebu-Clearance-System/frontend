import {tailwind} from '@theme-ui/presets'

export default {
  ...tailwind,
  layout: {
    container: {
      '@media screen and (min-width: 1280px)': {
        maxWidth: 1280,
      },
      '@media screen and (max-width: 1279px)': {
        maxWidth: 1024,
      },
      '@media screen and (max-width: 1023px)': {
        maxWidth: 768,
      },
      '@media screen and (max-width: 767px)': {
        maxWidth: 640,
      },
      '@media screen and (max-width: 639px)': {
        width: '100%',
        padding: 3,
      },
      mx: 'auto',
    },
  },
}
