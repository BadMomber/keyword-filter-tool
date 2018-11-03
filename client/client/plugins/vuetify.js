import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    white: '#FCFFF5',
    black: '#1A171B',
    primary: '#3B9CD9', // a color that is not in the material colors palette
    accent: '#41D2F2',
    secondary: '#FD718D',
    info: '#8538F2',
    warning: '#8AFFF8',
    good: '#48D8A0',
    error: '#CC141A',
    success: '#65FF0D'
  }
})
