<template>
	<div id="calendar">
		<CalendarHeader
			:date='date'
			@selectCurrentMonth="selectCurrentMonth"
			@changeMonth="changeMonth"
			@changeDate="changeDate"
		/>
		<CalendarBody
			:date='date'
			:startSunday='true'
			/>
	</div>
</template>

<script>
import CalendarHeader from './CalendarHeader.vue'
import CalendarBody from './CalendarBody.vue'

export default {
	name: 'Calendar',
	components: {
		CalendarHeader,
		CalendarBody
	},
	methods:{
		selectCurrentMonth: function(){
			this.date = this.moment();
		},
		changeMonth: function(diff){
			this.date = this.date.clone().add(diff,'month')
		},
		changeDate: function(date){
			this.date = this.moment(date)
		}
	},
	data() {
		return {
			date: this.moment()
		}
	},
}
</script>

<style lang="scss">
	#calendar{
		margin: 1em;
		border: 1.4px solid $lightGray;
		background: white;
		border-radius: 6px;
	}
</style>
