<!--规格属性-->
<template>
  <div>
    <el-form>
      <el-form-item label="商品模型">
        <el-select v-model="value" placeholder="请选择商品模型,试试搜索:手机"></el-select>
      </el-form-item>
    </el-form>
    <div style="width:100%;display:flex">
      <div>
        <div class="goodsDetail">商品规格</div>
        <div class="null">暂无数据</div>
      </div>
      <div>
        <div class="goodsDetail">商品属性</div>
        <div class="null">暂无数据</div>
      </div>
    </div>
    <div style="width:100%;height:300px">
      <div class="goodsDetail">规格列表</div>
      <div class="anotherNull">暂无数据</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      value:''
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.goodsDetail{
  color: rgb(117, 117, 117);
  font-size: 15px;
}
.null{
  width: 500px;
  font-size: 15px;
  color: rgb(117, 117, 117);
  text-align: center;
  line-height: 250px;
}
.anotherNull{
  width: 100%;
  text-align: center;
  line-height: 250px;
  color: rgb(117, 117, 117);
}
</style>