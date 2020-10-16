<template>
	<div class="calendar-day" :class="{'calendar-day-not-service': !data.is_in_service, 'calendar-day-not-month': !actual_month}">
		<div class="calendar-day-container">
			<div class="calendar-date-indicator-section" v-if="actual_month">
				<p class="calendar-date-indicator" :class="{'calendar-active-date-indicator': is_today, 'calendar-disabled-date-indicator': !data.is_in_service }">{{date}}</p>
			</div>
			<div v-if="!actual_month">

			</div>
			<div class="calendar-day-not-service" v-else-if="!data.is_in_service">
				<div>
					<span>No service day</span>
				</div>
			</div>
			<div class="calendar-day-blocked" v-else-if="data.is_blocked">
				<div>
					<span>Blocked</span>
				</div>
			</div>
			<div class="calendar-day-available" v-else-if="data.meals!=0">
				<div>
					<p class="calendar-day-meals"><span>{{data.meals}}</span> meals</p>
					<p class="calendar-day-costumers">From {{data.costumers}} costumers</p>
				</div>
				<div class="calendar-day-meals-type">
					<p>{{data.lunches}} lunches</p>
					<p>{{data.dinners}} dinners</p>
					<p>{{data.special_request}} special request</p>
				</div>
				<div class="calendar-day-operation-area">
					<a :href="getDetailsUrl()" class="calendar-day-details">All details</a>
				</div>
			</div>
			<div class="calendar-day-orderless" v-else-if="data.meals==0">
				<div>
					<span>No orders yet</span>
				</div>
			</div>
			<a class="calendar-day-operation" :href="getUnBlockUrl()" @click="confirmUnblock" v-if="data.is_blocked">
				<img src="../assets/red-block.svg" alt="" height="20">
			</a>
			<a class="calendar-day-operation" :href="getBlockUrl()" @click="confirmBlock" v-else-if="data.meals==0">
				<img src="../assets/white-block.svg" alt="" height="20">
			</a>
			<a class="calendar-day-operation" :href="getContinueUrl()" @click="confirmContinue" v-else-if="data.is_stopped">
				<img src="../assets/red-hand.svg" alt="" height="20">
			</a>
			<a class="calendar-day-operation" :href="getStopUrl()" @click="confirmStop" v-else-if="data.is_in_service">
				<img src="../assets/white-hand.svg" alt="" height="20">
			</a>
		</div>
	</div>
</template>

<script>
import swal from 'sweetalert'
import axios from 'axios'
export default {
	name: 'CalendarDay',
	components: {
	},
	props: ['date','month','year','data','actual_month','is_today'],
	methods:{
		callSwal: function(text,destination){
			swal({
				title: "Are you sure?",
				text: text,
				icon: "warning",
				buttons: {
					cancel: {
						text: "Cancel",
						value: null,
						visible: true,
						className: "calendar-day-cancel-operation",
						closeModal: true
					},
					confirm: {
						text: "Continue",
						value: true,
						visible: true,
						className: "calendar-day-continue-operation",
						closeModal: true
					}
				},
				dangerMode: true,
			})
			.then((willBlock) => {
				if (willBlock){
					axios.post(destination)
					.then(
						function(response){
							console.log(response)
							this.$emit('reload-data');
						},
						function(response){
							console.log(response)
						}
					)
					
				}
			})
		},
		confirmBlock: function(e){
			e.preventDefault();
			var destination = e.currentTarget.href;
			this.callSwal("You will block this day and you won't be able to receive orders.\n\nIf you change your mind you will be able to re-activate the option to unlock the day and recieve new orders at any time.",destination);
			this.$emit('reload-data');
		},
		confirmStop: function(e){
			e.preventDefault();
			var destination = e.currentTarget.href;
			this.callSwal("You will stop receiving orders for this day.\n\nIf you change your mind you will be able to re-activate the option to recieve new orders at any time.",destination);
			this.$emit('reload-data');
		},
		confirmUnblock: function(e){
			e.preventDefault();
			var destination = e.currentTarget.href;
			axios.post(destination)
			this.$emit('reload-data');
		},
		confirmContinue: function(e){
			e.preventDefault();
			var destination = e.currentTarget.href;
			axios.post(destination)
			this.$emit('reload-data');
		},
		contructUrl: function(baseUrl,apiUrl){
			var url = new URL(apiUrl,baseUrl);
			url.searchParams.set('day',this.date)
			url.searchParams.set('month',this.month)
			url.searchParams.set('year',this.year)
			return url;
		},
		getBlockUrl: function(){
			return this.contructUrl(this.config.api.baseUrl,this.config.api.blockUrl).href;
		},
		getUnBlockUrl: function(){
			return this.contructUrl(this.config.api.baseUrl,this.config.api.unBlockUrl).href;
		},
		getContinueUrl: function(){
			return this.contructUrl(this.config.api.baseUrl,this.config.api.continueUrl).href;
		},
		getStopUrl: function(){
			return this.contructUrl(this.config.api.baseUrl,this.config.api.stopUrl).href;
		},
		getDetailsUrl: function(){
			return this.contructUrl(this.config.api.baseUrl,this.config.api.detailsUrl).href;
		}
	}
}
</script>

<style lang="scss">
  
</style>
