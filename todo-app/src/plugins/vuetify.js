import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#F48FB1',
                secondary: '#BA68C8',
                success: '#3cd1c2',
                info: '#ffaa2c',
                error: '#f83e70',
                background: '#f5f5f5'
            }
        },

        options: {
            customProperties: true
        }
        
    }
});
