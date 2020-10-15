<template>
	<div id="calendar-body" class="container" v-if="!loading">

		<div class="weekdays">
			<div class="weekday" v-for="weekday in weekdays" :key="weekday.format('[WeekDay:]d')">
				<p>{{weekday.format('ddd')}}</p>
			</div>
		</div>
		<div class="week-block" v-for="(week,index) in calendar" :key=index>
			<CalendarDay
				v-for="(day,indexD) in week" :key="indexD"
				:date="day.date"
				:month="day.month"
				:year="day.year"
				:actual_month="day.actual_month"
				:is_today="day.is_today"
				:data="day.actual_month?daysData[day.date-1]:NaN"
				class="day-block"
			/>
		</div>
	</div>
</template>

<script>
import CalendarDay from './CalendarDay.vue'
import axios from 'axios'

export default {
	name: 'CalendarBody',
	components: {
		CalendarDay
	},
	props: {
		date: Object,
		startSunday: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			daysData: [],
			loading: true,
		}
	},
	watch: {
		date: function(newDate,oldDate){
			this.getData(newDate.month(),newDate.year())
		}
	},
	methods:{
		getData: function(month,year){
			var that = this
			that.loading=true;
			axios.get(`http://localhost:3000/meals?month=${month}`)
				.then(function(response){
					that.daysData = response.data;
					that.loading = false;
				});
		},
	},
	computed:{
		calendar: function(){
			var moment = this.moment
			var current_day = moment()
			var startDay = this.date.clone().startOf('month');
			
			// console.log(startDay);
			var month = startDay.month();
			startDay.startOf('week');
			if(this.startSunday)
				startDay.subtract(1,'day');
			var endDay = this.date.clone().endOf('month').endOf('week');
			if(this.startSunday)
				endDay.subtract(1,'day')
			// console.log(startDay);
			var calendar = [];
			var index = startDay.clone();
			while (index.isBefore(endDay, 'day') | index.isSame(endDay,'day')) {
				calendar.push(
					new Array(7).fill(0).map(
						function(n, i) {
							var current = index.add(1,'day')
							return {
								date: current.date(),
								month: current.month(),
								year: current.year(),
								actual_month: month==current.month(),
								is_today: current.isSame(current_day,'day')};
						}
					)
				);
			}
			return calendar;
		},
		weekdays: function(){
			var moment = this.moment
			var offset = this.startSunday?0:1
			return Array.apply(null,Array(7)).map(function(_,i){
				return moment(i,'e').startOf('week').isoWeekday(i+offset)
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
	.week-block{
		display:grid;
		grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.5%;
	}
</style>
