<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-7">

      <v-card flat v-for="project in projects" :key="project.title">

        <v-container class="py-0">

          <v-row  :class="`pa-4 project ${project.status}`" width="100%">
            <v-col cols="12" md="6">
              <div class="caption grey--text">Project Title</div>
              <div>{{ project.title }}</div>
            </v-col>

            <v-col cols="6" sm="4" md="2">
              <div class="caption grey--text">Person</div>
              <div>{{ project.person}}</div>
            </v-col>

            <v-col cols="6" sm="4" md="2">
              <div class="caption grey--text">Due by</div>
              <div>{{ project.due }}</div>
            </v-col>
            <v-col cols="6" sm="4" md="2">

              <div class="text-right">
                <v-chip small :class="`${project.status} white--text caption my-4`">{{ project.status }}</v-chip>

              </div>

            </v-col>

          </v-row>

          <v-divider></v-divider>

        </v-container>

      </v-card>

    </v-container>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'dashboard',

  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'Luigi', due: '1st Feb 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Sunny', due: '10th Jan 2020', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Karla', due: '20th Dec 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Carlos', due: '20th Oct 2019', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  }

}
</script>

<style>
.project.complete {
  border-left: 3px solid #3cd1c2;
}
.project.ongoing {
  border-left: 3px solid orange;
}
.project.overdue {
  border-left: 3px solid tomato;
}

.v-chip.complete {
  background:#3cd1c2 !important;
}
.v-chip.ongoing {
  background: orange !important;
}
.v-chip.overdue {
  background: tomato !important;
}
</style>