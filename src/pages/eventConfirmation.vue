<script setup lang="ts">
import { onMounted } from 'vue';
import { Event } from '@/store/event'
import logoUrl from "@/assets/mark.png"

onMounted(() => {
  // Event().allEvent();
});
const formate: any = (dateformate: string) => {
  let originalDate = dateformate;
  let date = new Date(originalDate);
  let year = date.getFullYear();
  let month = ('0' + (date.getMonth() + 1)).slice(-2);
  let day = ('0' + date.getDate()).slice(-2);
  let formattedDate = `${year}-${month}-${day}`;
  return formattedDate
}
</script>
<template>
  <div class="mt-6 mb-4">
    <v-img class="mx-auto" :width="200" aspect-ratio="4/3" cover :src="logoUrl"></v-img>
  </div>
  <v-container class="">
    <v-row no-gutters>
      <v-col cols="12" md="12" lg="12" class="pa-2" xs="12" sm="12">
        <v-hover v-slot="{ isHovering, props }">

          <v-card class="mx-auto w-full rounded-lg" :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 0"
            v-bind="props" outlined border>
            <template v-slot:loader="{ isActive }">
              <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
            </template>
            <div class="pl-6 pt-4  pr-6">
              <h1 class="text-h6 text-blue-grey-darken-4 font-weight-medium"> User Detail </h1>
            </div>
            <v-row no-gutters class="w-full">
              <v-col cols="12" md="4" lg="4" class="pa-2" xs="6" sm="6">
                <v-card-title>
                  <v-icon color="blue-grey-darken-4" icon="mdi-account" size="small"></v-icon>
                  <span class="ml-2">{{ Event().currentUserData.user_name }} </span>
                </v-card-title>
              </v-col>
              <v-col cols="12" md="4" lg="4" class="pa-2" xs="6" sm="6">
                <v-card-title>
                  <v-icon color="error" icon="mdi-mail" size="small"></v-icon>
                  <span class="ml-2">{{ Event().currentUserData.user_email }} </span>
                </v-card-title>
              </v-col>
              <v-col cols="12" md="4" lg="4" class="pa-2" xs="6" sm="6">
                <v-card-title class=" ">
                  <v-icon color="error" icon="mdi-phone-check" size="small"></v-icon>
                  <span class="ml-2 text-black">{{ formate(Event().currentUserData.user_number) }} </span>
                </v-card-title>
              </v-col>
            </v-row>
            <div class="pl-6 pr-6">
              <h1 class="text-h6 text-blue-grey-darken-4 font-weight-medium"> Event Detail </h1>
            </div>
            <v-row no-gutters class="w-full">
              <v-col cols="12" md="4" lg="4" class="pa-2" xs="6" sm="6">
                <v-card-title>
                  <v-icon color="blue-grey-darken-4" icon="mdi-music-note" size="small"></v-icon>
                  <span class="ml-2">{{ Event().currentUserData.event_name }} </span>
                </v-card-title>
              </v-col>
              <v-col cols="12" md="4" lg="4" class="pa-2" xs="6" sm="6">
                <v-card-title>
                  <v-icon color="error" icon="mdi-map-marker" size="small"></v-icon>
                  <span class="ml-2">{{ Event().currentUserData.event_location }} </span>
                </v-card-title>
              </v-col>
              <v-col cols="12" md="4" lg="4" class="pa-2" xs="6" sm="6">
                <v-card-title class=" ">
                  <v-icon color="error" icon="mdi-calendar-range" size="small"></v-icon>
                  <span class="ml-2 text-black">{{ formate(Event().currentUserData.event_date) }} </span>
                </v-card-title>
              </v-col>
            </v-row>
          </v-card>


        </v-hover>
      </v-col>
    </v-row>
    <v-col cols="auto" class="mt-6">
      <router-link to="/">
        <v-btn size="large" class="bg-blue-grey-darken-3 text-white mx-auto d-flex justify-lg-center">Back To
          Event</v-btn>
      </router-link>
    </v-col>

  </v-container>
</template>