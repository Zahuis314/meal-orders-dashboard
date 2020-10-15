<template>
  <div id="calendar">
    <CalendarHeader v-bind:date='date'/>
    <CalendarBody />
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
  data() {
    return {
      date: this.moment()
    }
  },
}
</script>

<style lang="scss">
  #calendar{
    width: 100%;
    border: 1px rgb(230,236,245);
  }
</style>
