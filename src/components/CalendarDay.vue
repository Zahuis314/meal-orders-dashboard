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
			<a class="calendar-day-operation" href="#" v-if="data.is_blocked">
				<img src="../assets/red-block.svg" alt="" height="20">
			</a>
			<a class="calendar-day-operation" href="#" v-else-if="data.meals==0">
				<img src="../assets/white-block.svg" alt="" height="20">
			</a>
			<a class="calendar-day-operation" href="#" v-else-if="data.is_stopped">
				<img src="../assets/red-hand.svg" alt="" height="20">
			</a>
			<a class="calendar-day-operation" href="#" v-else-if="data.is_in_service">
				<img src="../assets/white-hand.svg" alt="" height="20">
			</a>
		</div>
	</div>
</template>

<script>

export default {
	name: 'CalendarDay',
	components: {
	},
	props: ['date','month','year','data','actual_month','is_today'],
	methods:{
		contructUrl: function(baseUrl,apiUrl){
			var url = new URL(apiUrl,baseUrl);
			url.searchParams.set('day',this.date)
			url.searchParams.set('month',this.month)
			url.searchParams.set('year',this.year)
			return url;
		},
		getDetailsUrl: function(){
			return this.contructUrl(this.config.api.baseUrl,this.config.api.detailsUrl).href;
		}
	}
}
</script>

<style lang="scss">
  
</style>
