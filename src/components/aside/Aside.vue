<template>
  <div class="all">
    <el-button type="danger" @click="home" size="mini">首页</el-button>
    <el-button type="primary" @click="goodsCreate" size="mini">新增商品</el-button>
    <el-button @click="goodsList" size="mini">商品列表</el-button>
    <el-button type="warning" @click="goodsBrand" size="mini">商品品牌</el-button>
    <el-button type="warning" @click="goodsComment" size="mini">商品评价</el-button>
    <el-button type="danger" @click="goodsConsult" size="mini">商品咨询</el-button>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {
    home(){
      this.$router.push('/')
    },
    goodsCreate(){
      this.$router.push('/goods/admin/create')
    },
    goodsList(){
      this.$router.push('/goods/admin/list')
    },
    goodsBrand(){
      this.$router.push('/goods/admin/brand')
    },
    goodsComment(){
      this.$router.push('/goods/opinion/comment')
    },
    goodsConsult(){
      this.$router.push('/goods/opinion/consult')
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.all{
    width: 200px;
    height: 800px;
    background-color: deepskyblue;
    position: fixed;
}
</style>