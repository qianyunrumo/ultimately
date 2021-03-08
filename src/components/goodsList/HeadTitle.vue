<template>
  <div>
    <div class="head">
      <div class="display">
        <div class="color">分类</div>
        <div><el-cascader size="mini" v-model="value" placeholder="试试搜索:分类" clearable></el-cascader></div>
      </div>
      <div class="display">
        <div class="color">关键词</div>
        <div><el-input size="mini" v-model="value" placeholder="商品关键词(可空格间隔)" prefix-icon="el-icon-search" clearable></el-input></div>
      </div>
      <div class="display">
        <div class="color">编码</div>
        <div><el-input size="mini" v-model="value" placeholder="货号、条码、SKU、SPU" prefix-icon="el-icon-search" clearable></el-input></div>
      </div>
      <div>
        <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
        <el-button icon="el-icon-refresh-left" size="mini">重置</el-button>
      </div>
      <div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            更多筛选<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              品牌<el-cascader size="mini" v-model="value" placeholder="试试搜索:品牌" clearable></el-cascader>
            </el-dropdown-item>
            <el-dropdown-item>
              库存<el-input-number size="mini" v-model="num" :min="0" controls-position="right" @change="handleChange"></el-input-number>至<el-input-number size="mini" v-model="num" :min="0" controls-position="right" @change="handleChange"></el-input-number>
            </el-dropdown-item>
            <el-dropdown-item>
              是否包邮<el-select v-model="valueOne" placeholder="请选择" size="mini" clearable>
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                      </el-select>
            </el-dropdown-item>
            <el-dropdown-item>
              积分抵扣<el-select v-model="values" placeholder="请选择" size="mini" clearable>
                        <el-option v-for="item in Deduction" :key="item.value" :label="item.label" :value="item.value"></el-option>
                      </el-select>
            </el-dropdown-item>
            <el-dropdown-item>
              是否推荐<el-select v-model="valued" placeholder="请选择" size="mini" clearable>
                        <el-option v-for="item in recommend" :key="item.value" :label="item.label" :value="item.value"></el-option>
                      </el-select>
            </el-dropdown-item>
            <el-dropdown-item>
              是否新品<el-select v-model="valueTwo" placeholder="请选择" size="mini" clearable>
                        <el-option v-for="item in newProduct" :key="item.value" :label="item.label" :value="item.value"></el-option>
                      </el-select>
            </el-dropdown-item>
            <el-dropdown-item>
              是否热卖<el-select v-model="valueThree" placeholder="请选择" size="mini" clearable>
                        <el-option v-for="item in bestSellers" :key="item.value" :label="item.label" :value="item.value"></el-option>
                      </el-select>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
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
      valued:'',
      valueOne:'',
      valueTwo:'',
      valueThree:'',
      num:0,
      options:[
        {
          value:'1',
          label:'是'
        },
        {
          value:'2',
          label:'否'
        }
      ],
      Deduction:[
        {
          value:'1',
          label:'可抵扣'
        },
        {
          value:'2',
          label:'不抵扣'
        }
      ],
      recommend:[
        {
          value:'1',
          label:'是'
        },
        {
          value:'2',
          label:'否'
        }
      ],
      newProduct:[
        {
          value:'1',
          label:'是'
        },
        {
          value:'2',
          label:'否'
        }
      ],
      bestSellers:[
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