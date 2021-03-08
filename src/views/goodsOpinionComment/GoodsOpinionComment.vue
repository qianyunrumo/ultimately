<template>
  <div>
    <comment-head></comment-head>
    <goods-comment-table></goods-comment-table>
  </div>
</template>

<script>
import CommentHead from '../../components/goodsComment/CommentHead.vue'
import GoodsCommentTable from '../../components/goodsComment/GoodsCommentTable.vue'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {CommentHead, GoodsCommentTable},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>