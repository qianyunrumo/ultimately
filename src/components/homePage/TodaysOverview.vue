<template>
  <div>
    <div class="statistics">
      <div class="todaysOverview">
        <div class="title">
          <i class="el-icon-data-line"></i>
          <div id="detail">今日概况</div>
          <div id="dateTime">统计日期:{{this.myDateTime}}</div>
        </div>
        <div class="dateTime"><i class="el-icon-refresh">刷新</i></div>
      </div>
      <div class="iconData">
        <div class="orderNumber">
          <div><i class="el-icon-document" style="font-size:30px;color:gray;margin:8px 10px"></i></div>
          <div>
            <div>0</div>
            <div style="font-size:13px;color:gray">订单数</div>
          </div>
        </div>
        <div class="orderNumber">
          <div><i class="el-icon-coin" style="font-size:30px;color:gray;margin:8px 10px"></i></div>
          <div>
            <div>0</div>
            <div style="font-size:13px;color:gray">完成数</div>
          </div>
        </div>
        <div class="orderNumber">
          <div><i class="el-icon-star-off" style="font-size:30px;color:gray;margin:8px 10px"></i></div>
          <div>
            <div>0</div>
            <div style="font-size:13px;color:gray">收藏量</div>
          </div>
        </div>
        <div class="orderNumber">
          <div><i class="el-icon-user" style="font-size:30px;color:gray;margin:8px 10px"></i></div>
          <div>
            <div>0</div>
            <div style="font-size:13px;color:gray">新增会员</div>
          </div>
        </div>
        <div class="orderNumber">
          <div><i class="el-icon-thumb" style="font-size:30px;color:gray;margin:8px 10px"></i></div>
          <div>
            <div>0</div>
            <div style="font-size:13px;color:gray">售后单</div>
          </div>
        </div>
        <div class="orderNumber">
          <div><i class="el-icon-set-up" style="font-size:30px;color:gray;margin:8px 10px"></i></div>
          <div>
            <div>0</div>
            <div style="font-size:13px;color:gray">提现单</div>
          </div>
        </div>
        <div class="orderNumber">
          <div><i class="el-icon-orange" style="font-size:30px;color:gray;margin:8px 10px"></i></div>
          <div>
            <div>0</div>
            <div style="font-size:13px;color:gray">评价待回复</div>
          </div>
        </div>
        <div class="orderNumber">
          <div><i class="el-icon-chat-dot-round" style="font-size:30px;color:gray;margin:8px 10px"></i></div>
          <div>
            <div>0</div>
            <div style="font-size:13px;color:gray">咨询待回复</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: '',
  props:{},
  data () {
    return {
        myDateTime:''
    }
  },
  components: {},
  methods: {},
  mounted() {
      let myDate=dayjs().format("yyyy-MM-dd :hh:mm:ss")
      this.myDateTime=myDate
      console.log(myDate)
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.statistics{
  width: 100%;
  height: 120px;
  border: 1px solid gainsboro;
}
.todaysOverview{
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.title{
  width: 240px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
}
#detail{
  font-size: 12px;
}
#dateTime{
  font-size: 10px;
  color: rgb(117, 117, 117);
}
.dateTime{
  font-size: 10px;
  color: rgb(117, 117, 117);
  margin-right: 20px;
}
.iconData{
  display: flex;
  justify-content: space-around;
}
.orderNumber{
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
</style>