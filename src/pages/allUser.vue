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
			<h1 class="text-h5 text-blue-grey-darken-4 font-weight-medium"> All User </h1>
		</div>
		<v-table>
			<thead>
				<tr>
					<th class="text-left">
						User Name
					</th>
					<th class="text-left">
						User Name
					</th>
					<th class="text-left">
						User Name
					</th>
					<th class="text-left">
						Event Name
					</th>
					<th class="text-left">
						Event Location
					</th>
					<th class="text-left">
						Event Date
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="n in 10" :key="n" v-if="Event().loading" class="-ml-2">
					<td class="-ml-2">
						<v-skeleton-loader type="list-item"></v-skeleton-loader>
					</td>
					<td>
						<v-skeleton-loader type="list-item"></v-skeleton-loader>
					</td>
					<td>
						<v-skeleton-loader type="list-item"></v-skeleton-loader>
					</td>
					<td>
						<v-skeleton-loader type="list-item"></v-skeleton-loader>
					</td>
					<td>
						<v-skeleton-loader type="list-item"></v-skeleton-loader>
					</td>
					<td>
						<v-skeleton-loader type="list-item"></v-skeleton-loader>
					</td>
				</tr>
				<tr v-for="(event, i) in Event().list" :key="i" v-else>
					<td class="-ml-2"><v-card-subtitle color="blue-grey-darken-4" opacity="1">
							<v-icon color="text-body-1 blue-grey-darken-4" icon="mdi-account" size="small"></v-icon>
							<span class="ml-2 text-body-1 text-blue-grey-darken-4">{{ event.user_name }} </span>
						</v-card-subtitle></td>

					<td>
						<v-card-subtitle color="blue-grey-darken-4" opacity="1">
							<v-icon color="text-body-1 blue-grey-darken-4" icon="mdi-mail" size="small"></v-icon>
							<span class="ml-2 text-body-1 text-blue-grey-darken-4">{{ event.user_email }}
							</span>
						</v-card-subtitle>
					</td>
					<td>
						<v-card-subtitle color="blue-grey-darken-4" opacity="1">
							<v-icon color="text-body-1 blue-grey-darken-4" icon="mdi-phone-check" size="small"></v-icon>
							<span class="ml-2 text-body-1 text-blue-grey-darken-4">{{ event.user_number }}
							</span>
						</v-card-subtitle>
					</td>
					<td>
						<v-card-subtitle color="blue-grey-darken-4" opacity="1">
							<v-icon color="text-body-1 blue-grey-darken-4" icon="mdi-music-note" size="small"></v-icon>
							<span class="ml-2 text-body-1 text-blue-grey-darken-4">{{ event.event_name }}
							</span>
						</v-card-subtitle>
					</td>
					<td>
						<v-card-subtitle color="blue-grey-darken-4" opacity="1">
							<v-icon color="text-body-1 blue-grey-darken-4" icon="mdi-map-marker" size="small"></v-icon>
							<span class="ml-2 text-body-1 text-blue-grey-darken-4">{{ event.event_location }}
							</span>
						</v-card-subtitle>
					</td>
					<td>
						<v-card-subtitle color="blue-grey-darken-4" opacity="1">
							<v-icon color="text-body-1 blue-grey-darken-4" icon="mdi-calendar-range" size="small"></v-icon>
							<span class="ml-2 text-body-1 text-blue-grey-darken-4">{{ formate(event.event_date)
								}}
							</span>
						</v-card-subtitle>
					</td>
				</tr>
			</tbody>
		</v-table>

	</v-container>
</template>

<style scoped>
.v-card-subtitle {
	padding-left: 0px;
}

.v-table__wrapper {
	border: 1px solid #e0e0e0;
	border-radius: 10px;
}
</style>
