<template>
  <div>
    <div class="head">
      <div class="display">
        <div class="color">所属分类</div>
        <div><el-cascader size="mini" v-model="value" placeholder="可选择所属商品分类 试试搜索:手机" clearable></el-cascader></div>
      </div>
      <div class="display">
        <div class="color">名称</div>
        <div><el-input size="mini" v-model="value" placeholder="可输入品牌名称" prefix-icon="el-icon-search" clearable></el-input></div>
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
      values:'',
      num:0,
      status:[
        {
          value:'1',
          label:'是'
        },
        {
          value:'2',
          label:'否'
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
</style>