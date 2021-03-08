<template>
  <div>
    <div class="head">
      <div class="display">
        <div class="color">订单号</div>
        <div><el-input size="mini" v-model="value" placeholder="可输入订单号" prefix-icon="el-icon-search" clearable></el-input></div>
      </div>
      <div class="display">
        <div class="color">评分</div>
        <el-select v-model="valued" placeholder="请选择" size="mini" clearable>
          <el-option v-for="item in comment" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div class="display">
        <div class="color">状态</div>
        <el-select v-model="values" placeholder="请选择" size="mini" clearable>
          <el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <div>
        <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
        <el-button icon="el-icon-refresh-left" size="mini">重置</el-button>
      </div>
      <span class="el-dropdown-link">
        更多筛选<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        value:'',
      valued:'',
      values:'',
      num:0,
      comment:[
          {
              value:'1',
              label:'好评'
          },
          {
              value:'2',
              label:'中评'
          },
          {
              value:'3',
              label:'差评'
          },
      ],
      status:[
        {
          value:'1',
          label:'待处理'
        },
        {
          value:'2',
          label:'已处理'
        }
      ]
    }
  },
  components: {},
  methods: {
      handleChange(value) {
        console.log(value);
      }
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.head{
   width:100%;
   height:80px;
   display:flex;
   justify-content: space-around;
   line-height:80px;
   border-bottom: 1px solid gainsboro;
}
.display{
  display: flex;
}
.color{
  font-size: 15px;
  color:rgb(117, 117, 117);
  font-size: 14px;
  line-height: 83px;
}
.el-dropdown-link{
  color: deepskyblue;
  font-size: 12px;
}
</style>