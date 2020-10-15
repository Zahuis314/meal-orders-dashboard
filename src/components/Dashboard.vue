<template>
  <div id="dash_board">
    <div style="width: 100%;">
      <div id="dashboard-title">
        <span>{{title}}</span>
      </div>
      <div class="dashboard-tab-selector">
          <button class="dashboard-tab-selector-button dashboard-active-tab">Orders</button>
          <button class="dashboard-tab-selector-button">Agenda</button>
      </div>
    </div>
    <Calendar/>
  </div>
</template>

<script>
import Calendar from './Calendar.vue'

export default {
  name: 'Dashboard',
  components: {
    Calendar
  },
  data() {
    return {
      title: "My Calendar"
    }
  },
}
</script>

<style lang="scss">
  html{
    background-color: rgb(246,247,251);
    font-family: 'Roboto';
    #dashboard-title {
      font-size: 25px;
      // float: left;
      color: $black-text-color;
      display: inline-block;
    }
    .dashboard-tab-selector{
      display: inline-block;
      // float: right;
      .dashboard-tab-selector-button{
          border-radius: 28px;
          padding: 10px 40px;
          border: $primary 2px solid;
          background: transparent;
          color: $primary;
          width: 180px;
          height: 55px;
          font-size: 18px;
      }
      .dashboard-active-tab{
        background: $primary;
        color: rgba($color: #fff, $alpha: 1.0);
        
      }
    }
  }
</style>
