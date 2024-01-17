// uno.config.ts
import { defineConfig } from 'unocss';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno()],
  //uno css shortcuts
  shortcuts: {
    'bg-image': 'bg-[url("./images/image-header-desktop.jpg")]',
  },
  theme: {
    // ...UnoCSS theme options
    colors: {
      // ...UnoCSS color options
      'very-dark-blue': 'hsl(233, 47%, 7%)',
      'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
      'soft-violet': 'hsl(277, 64%, 61%)',
      'slightly-transparent-white-paragraph': 'hsla(0, 0%, 100%, 0.75)',
      'slightly-transparent-white-stat-headings': 'hsla(0, 0%, 100%, 0.6)',
    },
  },
});
