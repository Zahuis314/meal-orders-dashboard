<template>
	<div id="calendar-controller">

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

export default {
	name: 'CalendarController',
	props: ['date'],
	components:{
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
  
</style>
