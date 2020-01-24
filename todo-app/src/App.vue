<template>
  <v-app>
    
    <v-content>
      <router-view>
        <Buttons/>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Buttons from './components/Buttons'
export default {
  name: 'App',

  components: {
    Buttons
  },

  data: () => ({
    //
  }),
};
</script>
