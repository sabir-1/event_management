<script setup lang="ts"></script>
<template>
    <div class="bg-blue-grey-darken-4">
        <v-container class="">
            <v-card>
                <v-layout color="primary">
                    <v-app-bar prominent color="primary">
                        <v-toolbar-title></v-toolbar-title>
                        <v-spacer></v-spacer>
                        <router-link to="/">
                            <v-btn class="text-white ma-2">
                                All Events
                            </v-btn>
                        </router-link>
                        <router-link to="/all-users">
                            <v-btn class="text-white">
                                All User
                            </v-btn>
                        </router-link>
                        <router-link to="/event-register">
                            <v-btn class="text-white">
                                Register
                            </v-btn>
                        </router-link>
                    </v-app-bar>
                    <v-main style="">
                    </v-main>
                </v-layout>
            </v-card>
        </v-container>
    </div>

</template>
