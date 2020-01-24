<template>
<v-app>

    <h1>Buttons</h1>

    <v-btn class="pink white--text">Click me!</v-btn>
    <v-btn depressed color="pink" dark>Click me!</v-btn>
    <v-btn text color="pink" dark>Click me!</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>fas fa-envelope</v-icon>
      <span>Send Email</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon small left>fas fa-envelope</v-icon>
      <span>Send Email</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span left>Send Email</span>
      <v-icon right>fas fa-envelope</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon small>fas fa-heart</v-icon>
    </v-btn>

</v-app>
    
</template>

<script>
export default {
    name: 'Buttons'
}
</script>