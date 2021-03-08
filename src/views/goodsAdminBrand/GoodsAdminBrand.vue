<template>
  <div>
    <brand-head-title></brand-head-title>
    <goods-brand></goods-brand>
  </div>
</template>

<script>
import BrandHeadTitle from '../../components/goodsBrand/BrandHeadTitle.vue'
import GoodsBrand from '../../components/goodsBrand/GoodsBrand.vue'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {BrandHeadTitle, GoodsBrand},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>