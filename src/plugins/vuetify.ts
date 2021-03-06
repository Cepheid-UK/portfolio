import Vue from 'vue';
import Vuetify, { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.purple.base,
            secondary: colors.grey.darken1,
            accent: colors.shades.black,
            error: colors.red.accent3,
            background: colors.indigo.lighten5
          },
          dark: {
            primary: colors.blue.lighten3,
            background: colors.indigo.base
          }
        }
      }
});
