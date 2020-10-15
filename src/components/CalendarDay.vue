<template>
  <div class="calendar-day" :class="{'calendar-day-not-month': !actual_month}">
    <div class="calendar-day-container">
      <div class="calendar-date-indicator-section" v-if="actual_month">
        <p class="calendar-date-indicator" :class="{'calendar-active-date-indicator': is_today}">{{date}}</p>
      </div>
      <div v-if="!actual_month">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CalendarDay',
  components: {
  },
  props: ['date','month','year','actual_month','is_today'],
}
</script>

<style lang="scss">
  
</style>
