<template>
	<div class="calendar-day" :class="{'calendar-day-not-month': !actual_month}">
		<div class="calendar-day-container">
			<div class="calendar-date-indicator-section" v-if="actual_month">
				<p class="calendar-date-indicator" :class="{'calendar-active-date-indicator': is_today}">{{date}}</p>
			</div>
			<div v-if="!actual_month">

			</div>
			<div class="calendar-day-available">
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
					<a href="#" class="calendar-day-details">All details</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'CalendarDay',
  components: {
  },
  props: ['date','month','year','data','actual_month','is_today'],
}
</script>

<style lang="scss">
  
</style>
