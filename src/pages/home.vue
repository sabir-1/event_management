<script setup lang="ts">
import { onMounted } from 'vue';
import { Event } from "@/store/event";

onMounted(() => {
	Event().allEvent();
});

// date formate function 
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
	<Header />
	<v-container class="">
		<div class="pa-2 mt-4 mb-4">
			<h1 class="text-h5 text-blue-grey-darken-4 font-weight-medium"> All Events </h1>
		</div>
		<v-row no-gutters v-if="Event().loading">
			<v-col v-for="n in 6" :key="n" cols="12" md="12" lg="12" class="pa-2" xs="12" sm="12">
				<v-hover v-slot="{ isHovering, props }">
					<v-card class="mx-auto w-full rounded-lg" :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 0"
						v-bind="props" outlined border>
						<template v-slot:loader="{ isActive }">
							<v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
						</template>
						<v-row no-gutters class="w-full">
							<v-col cols="12" md="4" lg="4" class="pa-2" xs="6" sm="6">
								<v-skeleton-loader type="list-item"></v-skeleton-loader>
							</v-col>
							<v-col cols="12" md="4" lg="4" class="pa-2" xs="6" sm="6">
								<v-skeleton-loader type="list-item"></v-skeleton-loader>
							</v-col>
							<v-col cols="12" md="4" lg="4" class="pa-2" xs="6" sm="6">
								<v-skeleton-loader type="list-item"></v-skeleton-loader>
							</v-col>
						</v-row>
					</v-card>
				</v-hover>

			</v-col>
		</v-row>
		<v-row no-gutters v-else>
			<v-col v-for="(event, i) in Event().list" :key="i" cols="12" md="12" lg="12" class="pa-2" xs="12" sm="12">
				<v-hover v-slot="{ isHovering, props }">
					<v-card class="mx-auto w-full rounded-lg" :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 0"
						v-bind="props" outlined border>
						<template v-slot:loader="{ isActive }">
							<v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
						</template>
						<v-row no-gutters class="w-full">
							<v-col cols="12" md="4" lg="4" class="pa-2" xs="6" sm="6">
								<v-card-title>
									<v-icon color="blue-grey-darken-4" icon="mdi-music-note" size="small"></v-icon>
									<span class="ml-2">{{ event.event_name }} </span>
								</v-card-title>
							</v-col>
							<v-col cols="12" md="4" lg="4" class="pa-2" xs="6" sm="6">
								<v-card-title>
									<v-icon color="error" icon="mdi-map-marker" size="small"></v-icon>
									<span class="ml-2">{{ event.event_location }} </span>
								</v-card-title>
							</v-col>
							<v-col cols="12" md="4" lg="4" class="pa-2" xs="6" sm="6">
								<v-card-title class=" ">
									<v-icon color="error" icon="mdi-calendar-range" size="small"></v-icon>
									<span class="ml-2 text-black">{{ formate(event.event_date) }} </span>
								</v-card-title>
							</v-col>
						</v-row>
					</v-card>
				</v-hover>
			</v-col>
		</v-row>


	</v-container>
	<Footer />
</template>
