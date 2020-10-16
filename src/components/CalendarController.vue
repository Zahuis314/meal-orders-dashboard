<template>
	<div id="calendar-controller">
		<div id="date-selector">
			<IconMonthPicker @change="changeDate"
				:editable-year="true"
				:input-pre-filled="true"
				:show-year=true
				:default-month=date.month() 
				:default-year=date.year()>
				</IconMonthPicker>
		</div>
		<div id="date-current-month-selector">
			<button id="date-current-month-button" class="calendar-button" @click="selectCurrentMonth">Current month</button>
		</div>
		<div id="date-manipulator">
			<button class="date-manipulator-button calendar-button" @click="changeMonth(-1)">&lt;</button>
			<button class="date-manipulator-button calendar-button" @click="changeMonth(1)">&gt;</button>
		</div>
	</div>
</template>

<script>
import IconMonthPicker  from './IconMonthPicker.vue'

export default {
	name: 'CalendarController',
	props: ['date'],
	components:{
			IconMonthPicker
	},
	methods: {
		selectCurrentMonth: function(){
			this.$emit('selectCurrentMonth');
		},
		changeMonth: function(diff){
			this.$emit('changeMonth',diff);
		},
		changeDate: function(date){
			// console.log(data.from)
			this.$emit('changeDate',date.from)
			//   this.$emit()
		}
	},
}
</script>

<style lang="scss">
	#calendar-controller{  
		float: right;
		>div{
			display: inline-block;
		}
  
	}
</style>
