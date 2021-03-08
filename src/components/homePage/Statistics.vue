<template>
  <div>
    <div class="orderDoor">
      <div class="left">
        <div class="orderNum">
            <div id="title">
                <div class="title">
                    <i class="el-icon-collection-tag"></i>
                    <div id="detail">今日订单量</div>
                </div>
            </div>
            <div class="boo"></div>
        </div>
        <div class="activeMembers">
          <div id="title">
                <div class="titleThree">
                    <i class="el-icon-collection-tag"></i>
                    <div id="detail">今日活跃会员</div>
                </div>
            </div>
        </div>
        <div class="productRanking"></div>
      </div>
      <div class="right">
        <div class="salesStatistics">
          <div id="title">
            <div class="titleTwo">
              <i class="el-icon-collection-tag"></i>
              <div id="detail">销售统计</div>
            </div>
          </div>
          <div class="yesterdaysSales">
            <div id="yesterdaysSales">昨日销量</div>
            <div style="width:67%">
              <div class="orderVolume">订单量</div>
              <div class="orderVolume">销售额</div>
            </div>
          </div>
          <div class="yesterdaysSales">
            <div id="yesterdaysSales">本月销量</div>
            <div style="width:67%">
              <div class="orderVolume">订单量</div>
              <div class="orderVolume">销售额</div>
            </div>
          </div>
        </div>
        <div class="orderSource">
          <div id="title">
            <div class="titleTwo">
              <i class="el-icon-collection-tag"></i>
              <div id="detail">订单来源</div>
            </div>
          </div>
        </div>
        <div class="membershipLevel">
          <div id="title">
            <div class="titleTwo">
              <i class="el-icon-collection-tag"></i>
              <div id="detail">会员等级</div>
            </div>
          </div>
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
        chart:145
    }
  },
  components: {},
  methods: {},
  mounted() {
      console.log(this.chart)
  },
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
.left{
  width: 65%;
}
.left>div{
  margin-top: 20px;
}
.orderNum{
  width: 100%;
  height: 400px;
  border: 1px solid gainsboro;
  margin-top: 0 !important;
}
#title{
    margin-top: 10px;
}
.titleTwo{
  width: 72px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
}
.titleThree{
  width: 92px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
}
.title{
  width: 82px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
}
#detail{
  font-size: 12px;
}
.boo{
  width: 100%;
  height: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.activeMembers{
  width: 100%;
  height: 400px;
  border: 1px solid gainsboro;
}
.productRanking{
  width: 100%;
  height: 300px;
  border: 1px solid gainsboro;
}
.right{
  width: 33%;
}
.right>div{
  margin-top: 20px;
}
.salesStatistics{
  width: 100%;
  height: 300px;
  border: 1px solid gainsboro;
  margin-top: 0 !important;
}
.yesterdaysSales{
  width: 90%;
  height: 100px;
  border: 1px solid gainsboro;
  margin: 20px auto;
  display: flex;
}
#yesterdaysSales{
  width: 33%;
  height: 100%;
  border-right: 1px solid gainsboro;
  text-align: center;
  line-height: 100px;
  font-size: 14px;
  color: rgb(117, 117, 117);
}
.orderVolume{
  width: 100%;
  height: 50%;
  border-bottom: 1px solid gainsboro;
  line-height: 50px;
  font-size: 14px;
  color: rgb(117, 117, 117);
}
.orderSource{
  width: 100%;
  height: 400px;
  border: 1px solid gainsboro;
}
.membershipLevel{
  width: 100%;
  height: 400px;
  border: 1px solid gainsboro;
}
</style>