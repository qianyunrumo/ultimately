<template>
  <div>
    <div class="orderDoor">
      <div class="orderStatus">
        <div id="title">
            <div class="title">
                <i class="el-icon-collection-tag"></i>
                <div id="detail">订单状态</div>
            </div>
        </div>
        <div class="lowerOrderStatus">
            <div>
                <div style="text-align:center">0</div>
                <div style="font-size:13px;color:gray">待付款</div>
            </div>
            <div>
                <div style="text-align:center">0</div>
                <div style="font-size:13px;color:gray">已付款</div>
            </div>
            <div>
                <div style="text-align:center">0</div>
                <div style="font-size:13px;color:gray">待发货</div>
            </div>
            <div>
                <div style="text-align:center">0</div>
                <div style="font-size:13px;color:gray">已发货</div>
            </div>
            <div>
                <div style="text-align:center">0</div>
                <div style="font-size:13px;color:gray">未评价</div>
            </div>
        </div>
      </div>
      <div class="door">
        <div id="title">
            <div class="title">
                <i class="el-icon-collection-tag"></i>
                <div id="detail">快捷入口</div>
            </div>
        </div>
        <div class="entrance">
            <div>官方主页</div>
            <div>文档中心</div>
            <div>Github</div>
            <div>Gitee</div>
        </div>
       </div>
    </div>
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
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.orderDoor{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.orderStatus{
  width: 65%;
  height: 100px;
  border: 1px solid gainsboro;
}
#title{
    margin-top: 10px;
}
.title{
  width: 70px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
}
#detail{
  font-size: 12px;
}
.lowerOrderStatus{
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
}
.door{
  width: 33%;
  height: 100px;
  border: 1px solid gainsboro;
}
.entrance{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.entrance>div{
    width: 70px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid gainsboro;
    font-size: 10px;
    color:gray;
}
</style>