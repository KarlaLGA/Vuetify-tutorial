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
           <v-list>
               <v-list-item 
               v-for="link in links" :key="link.text"
               router :to="link.route">

                   <v-list-item-action>
                       <v-icon color="white">{{ link.icon }}</v-icon>
                   </v-list-item-action>

                   <v-list-item-content>
                       <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                   </v-list-item-content>
               </v-list-item>
           </v-list>
       </v-navigation-drawer>
   </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                {icon: "fas fa-th-large", text: "Dashboard", route: "/"},
                {icon: "fas fa-folder", text: "My Projects", route: "/projects"},
                {icon: "fas fa-user-friends", text: "Team", route: "/team"}
            ]
        }
    }
}
</script>