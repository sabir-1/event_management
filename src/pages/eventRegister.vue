<script setup lang="ts">
import { computed } from 'vue'
import * as yup from 'yup'
import { Field, Form, ErrorMessage } from 'vee-validate'
import { Event } from "@/store/event";
const schema: any = computed(() => {
	return yup.object({
		user_name: yup.string().required('Please Enter Valid name'),
		user_number: yup.string().required('Please Enter Valid Number'),
		user_email: yup.string().required('Please Enter Valid Email'),
		event_name: yup.string().required('Please Enter Valid Event Name'),
		event_date: yup.string().required('Please Enter Date'),
		event_location: yup.string().required('Please Enter Location'),
	});
});
const eventRegister = () => {
	Event().registerEvent()
}
</script>

<template>
	<Header />
	<v-container class="">
		<Transition name="slide-fade">
			<Form :validation-schema="schema" @submit="eventRegister()">
				<v-row no-gutters>
					<div class="pa-2">
						<h1 class="text-h5 text-blue-grey-darken-4 font-weight-medium"> User Information </h1>
					</div>
					<v-col cols="12" class="pa-2" xs="12">
						<Field name="user_name" v-model="Event().user_name">
							<v-text-field hide-details="auto" v-model="Event().user_name" name="user_name" label="User Name"
								variant="outlined"></v-text-field>
						</Field>
						<ErrorMessage class="text-caption text-red-accent-4" name="user_name" />
					</v-col>
					<v-col cols="12" class="pa-2" xs="12">
						<Field name="user_number" v-model="Event().user_number">
							<v-text-field hide-details="auto" v-model="Event().user_number" label="Phone" variant="outlined"
								type="number"></v-text-field>
						</Field>
						<ErrorMessage class="text-caption text-red-accent-4" name="user_number" />
					</v-col>
					<v-col cols="12" class="pa-2" xs="12">
						<Field name="user_email" v-model="Event().user_email">
							<v-text-field hide-details="auto" variant="outlined" label="Email" v-model="Event().user_email"
								placeholder="johndoe@gmail.com" type="email"></v-text-field>
						</Field>
						<ErrorMessage class="text-caption text-red-accent-4" name="user_email" />
					</v-col>
					<div class="pa-2 mt-4">
						<h1 class="text-h5 text-blue-grey-darken-4 font-weight-medium"> Event Information </h1>
					</div>
					<v-col cols="12" class="pa-2" xs="12">
						<Field name="event_name" v-model="Event().event_name">
							<v-text-field hide-details="auto" type="text" name="event_name" v-model="Event().event_name"
								label="Event Name" variant="outlined"></v-text-field>
						</Field>
						<ErrorMessage class="text-caption text-red-accent-4" name="event_name" />
					</v-col>
					<v-col cols="12" class="pa-2" xs="12">
						<Field name="event_date" v-model="Event().event_date">
							<v-text-field hide-details="auto" type="date" ref="adf" v-model="Event().event_date" name="event_date"
								label="Event Date" variant="outlined"></v-text-field>
						</Field>
						<ErrorMessage class="text-caption text-red-accent-4" name="event_date" />
					</v-col>
					<v-col cols="12" class="pa-2" xs="12">
						<Field name="event_location" v-model="Event().event_location">
							<v-text-field hide-details="auto" type="text" name="event_location" v-model="Event().event_location"
								label="Event Location" variant="outlined"></v-text-field>
						</Field>
						<ErrorMessage class="text-caption text-red-accent-4" name="event_location" />
					</v-col>
					<v-col cols="12" class="pa-2" xs="12">
						<v-btn type="submit" class="bg-blue-grey-darken-3 text-white">
							submit
						</v-btn>
					</v-col>
				</v-row>
			</Form>
		</Transition>
	</v-container>
</template>
