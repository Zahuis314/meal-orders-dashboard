<template>
	<div id="calendar-body" class="container">

		<div class="weekdays">
			<div class="weekday" v-for="weekday in weekdays" :key="weekday.format('[WeekDay:]d')">
				<p>{{weekday.format('ddd')}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import CalendarDay from './CalendarDay.vue'

export default {
	name: 'CalendarBody',
	components: {
		CalendarDay
	},
	props: {
		date: Object,
	},
	data() {
		return {
		}
	},
	computed:{
		weekdays: function(){
			var moment = this.moment
			return Array.apply(null,Array(7)).map(function(_,i){
				return moment(i,'e').startOf('week').isoWeekday(i+1)
				// return moment().format('ddd')
			})
		}
	}
}
</script>

<style lang="scss">
	.weekdays
	{
		display:grid;
		grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;
	}
	.weekday{
		// float: left;
		text-align: center;
	}
</style>
