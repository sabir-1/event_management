import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
import { EventInterface } from './state'

export const Event = defineStore("Event", {
    state: (): EventInterface => ({
        endpoint: "https://668fca38c0a7969efd998788.mockapi.io/event/all",
        loading: false,
        list: [
            {
                user_email: "",
                user_number: "",
                user_name: "",
                event_name: "",
                event_date: "",
                event_location: ""
            }
        ],
        currentUserData: {
            user_email: "",
            user_number: "",
            user_name: "",
            event_name: "",
            event_date: "",
            event_location: ""
        },
        user_email: "",
        user_number: "",
        user_name: "",
        event_name: "",
        event_date: "",
        event_location: "",
    }),
    getters: {

    },
    actions: {
        async allEvent() {
            this.loading = true
            try {
                const response = await axios.get(this.endpoint);
                this.list = response.data;
                if (response.status === 200) {
                    this.loading = false;
                }

                console.log("all", response.data);
                return response.data;
            } catch (err) {
                console.log(err);
                return null;
            }
        },
        async registerEvent() {
            try {
                const payload: object = {
                    user_email: this.user_email,
                    user_number: this.user_number,
                    user_name: this.user_name,
                    event_name: this.event_name,
                    event_date: this.event_date,
                    event_location: this.event_location,
                }
                const response = await axios.post(this.endpoint, payload);
                this.currentUserData = response.data;
                if (response.status === 201) {
                    console.log("fdadf", response.data)

                    this.user_email = "",
                        this.user_number = "",
                        this.user_name = "",
                        this.event_name = "",
                        this.event_date = "",
                        this.event_location = ""
                    router.push('/confirm');

                }
                console.log(response);
                return response.data;
            } catch (err) {
                console.log(err);
                return null;
            }
        },
    },
});
