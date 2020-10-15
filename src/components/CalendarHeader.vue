<template>
	<div id="calendar-header">
		<div id="current-date">
			<p>{{formatedDate}}</p>
		</div>
		<calendar-controller
			:date="date"
			@selectCurrentMonth="selectCurrentMonth"
			@changeMonth="changeMonth"
			@changeDate="changeDate"
		/>
	</div>
</template>

<script>
import CalendarController from './CalendarController.vue'

export default {
	name: 'CalendarHeader',
	components: {
		CalendarController
	},
	methods:{
		selectCurrentMonth: function(){
			this.$emit('selectCurrentMonth')
		},
		changeMonth: function(diff){
			this.$emit('changeMonth',diff)
		},
		changeDate: function(date){
			this.$emit('changeDate',date)
		}
	},
	props: ['date'],
	computed:{
		formatedDate: function(){
			return this.date.format("MMM YYYY");
		}
	}
}
</script>

<style lang="scss">
	#calendar-header{
		>div{
			display: inline-block;
		}
	}
</style>
