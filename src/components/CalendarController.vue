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
	.month-picker-input{
		height: 11px;
	}
	#calendar-controller{  
		float: right;
		month-picker-input{
			width: 100%;
		}
		>div{
			display: inline-block;
		}
	}
	.month-picker-input-container{
		width: 100% !important;
	}
	#date-current-month-selector{
		margin: 0px 20px;
	}
	#calendar-controller{
		button.calendar-button{
			font-size: 14px;
			background: white;
			border: 1px solid $lightGray;
			border-radius: 5px;
			&#date-current-month-button{
				padding: 11px 15px;
				color: rgb(173,175,191)
			}
			&.date-manipulator-button{
				padding: 11px 22px;
			}
		}
	}
</style>
