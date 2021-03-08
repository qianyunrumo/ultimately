<template>
  <div>
    <el-card>
      <div class="title">新增商品</div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基础设置" name="first">
          <basic-settings></basic-settings>
        </el-tab-pane>
        <el-tab-pane label="规格属性" name="second">
          <specification-properties></specification-properties>
        </el-tab-pane>
        <el-tab-pane label="媒体设置" name="third">
          <media-settings></media-settings>
        </el-tab-pane>
        <el-tab-pane label="商品详情" name="fourth">
          <goods-details></goods-details>
        </el-tab-pane>
        <el-tab-pane label="积分结算" name="fiveth">
          <points-settlement></points-settlement>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <div class="button">
      <el-button type="primary" size="small">确定</el-button>
      <el-button size="small">取消</el-button>
    </div>
  </div>
</template>

<script>
import BasicSettings from '../../components/addGoods/BasicSettings.vue';
import GoodsDetails from '../../components/addGoods/GoodsDetails.vue';
import MediaSettings from '../../components/addGoods/MediaSettings.vue';
import PointsSettlement from '../../components/addGoods/PointsSettlement.vue';
import SpecificationProperties from '../../components/addGoods/SpecificationProperties.vue';
export default {
  name: '',
  props:{},
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {BasicSettings, SpecificationProperties, MediaSettings, GoodsDetails, PointsSettlement},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.title{
  text-align: center;
  height: 40px;
  border-bottom: 1px solid gainsboro;
}
.button{
  width: 100%;
  line-height: 50px;
  border-top: 1px solid gainsboro;
  background-color: white;
  margin-top: 20px;
  position: fixed;
  bottom: 10px;
}
</style>