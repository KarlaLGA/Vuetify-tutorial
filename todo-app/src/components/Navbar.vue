<template>
   <nav>
       <v-app-bar color="primary" app>

            <v-app-bar-nav-icon class="white--text" @click="drawer=!drawer"></v-app-bar-nav-icon>

           <v-toolbar-title class="text-uppercase white--text">
               <span class="font-weight-light">Todo</span>
               <span>Karla</span>
           </v-toolbar-title>

           <v-spacer></v-spacer>

           <v-btn text color="white">
               <span>Sign Out</span>
               <v-icon right>fas fa-sign-out-alt</v-icon>

           </v-btn>

       </v-app-bar>

       <v-navigation-drawer v-model="drawer" app class="secondary">

       </v-navigation-drawer>
   </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        }
    }
}
</script>