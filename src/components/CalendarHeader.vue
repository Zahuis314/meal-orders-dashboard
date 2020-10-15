<template>
  <div id="calendar-header">
    <div id="current-date">
      <p>{{formatedDate}}</p>
    </div>
  </div>
</template>

<script>
import CalendarController from './CalendarController.vue'

export default {
  name: 'CalendarHeader',
  components: {
    CalendarController
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
  
</style>
