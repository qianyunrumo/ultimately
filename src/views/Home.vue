<template>
  <div>
    <todays-overview></todays-overview>
    <order-status></order-status>
    <statistics></statistics>
  </div>
</template>

<script>
import OrderStatus from '../components/homePage/OrderStatus.vue'
import Statistics from '../components/homePage/Statistics.vue'
import TodaysOverview from '../components/homePage/TodaysOverview.vue'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {TodaysOverview, OrderStatus, Statistics},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>