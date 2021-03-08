<!--基础设置-->
<template>
  <div>
    <el-form label-width="100px" class="demo-ruleForm">
      <el-form-item label="名称">
        <el-input v-model="model" placeholder="请输入商品名称" autocomplete="off" maxlength="200" show-word-limit clearable></el-input>
      </el-form-item>
      <el-form-item label="短名称">
        <el-input v-model="model" placeholder="可输入商品短名称,适用于移动端显示" autocomplete="off" maxlength="50" show-word-limit clearable></el-input>
      </el-form-item>
      <el-form-item label="介绍语">
        <el-input v-model="model" placeholder="可输入商品促销语" maxlength="100" show-word-limit clearable></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-cascader v-model="value" placeholder="请选择商品分类,试试搜索:分类" clearable></el-cascader>
      </el-form-item>
      <el-form-item label="品牌">
        <el-select v-model="value" placeholder="请选择商品品牌,试试搜索:品牌" clearable></el-select>
      </el-form-item>
      <el-form-item label="计量单位">
        <el-input v-model="model" placeholder="可输入商品计量单位,例如:件,个" clearable></el-input>
      </el-form-item>
      <el-form-item label="计量方式">
        <el-radio v-model="radio" label="1">重量</el-radio>
        <el-radio v-model="radio" label="2">计件</el-radio>
        <el-radio v-model="radio" label="3">体积</el-radio>
        <el-radio v-model="radio" label="1">重量</el-radio>
      </el-form-item>
      <el-form-item label="商品计量">
        <el-input-number v-model="nums" :step="0.1" :min="0" controls-position="right" @change="handleChange"></el-input-number>
      </el-form-item>
      <el-form-item label="实际库存">
        <el-input-number v-model="num" :min="0" controls-position="right" @change="handleChange"></el-input-number>
        <div class="msg">多规格商品将自动求和所有规格的库存做为实际库存</div>
      </el-form-item>
      <el-form-item label="排序值">
        <el-input-number v-model="numss" :min="0" controls-position="right" @change="handleChange"></el-input-number>
        <div class="msg">排序值将影响商品排列的顺序，数值越小越靠前</div>
      </el-form-item>
      <el-form-item label="上架状态">
        <el-radio v-model="oadir" label="1">出售中</el-radio>
        <el-radio v-model="oadir" label="2">已下架</el-radio>
      </el-form-item>
      <el-form-item label="是否推荐">
        <el-radio v-model="recommend" label="1">是</el-radio>
        <el-radio v-model="recommend" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="是否新品">
        <el-radio v-model="newproducts" label="1">是</el-radio>
        <el-radio v-model="newproducts" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="是否热卖">
        <el-radio v-model="bestsellers" label="1">是</el-radio>
        <el-radio v-model="bestsellers" label="2">否</el-radio>
      </el-form-item>
      <div class="line">
        <div class="left-bottom-line"></div>
        <div class="buyMsg">购买信息</div>
        <div class="right-bottom-line"></div>
      </div>
      <div class="something">
        <el-form-item label="市场价">
          <el-input-number v-model="marketprice" :min="0" controls-position="right" @change="handleChange"></el-input-number>
        </el-form-item>
      </div>
      <el-form-item label="本地价">
        <el-input-number v-model="localprice" :min="0" controls-position="right" @change="handleChange"></el-input-number>
        <div class="msg">多规格商品按实际规格中的本店价计算</div>
      </el-form-item>
      <el-form-item label="最少起订">
        <el-input-number v-model="least" :min="0" controls-position="right" @change="handleChange"></el-input-number>
        <div class="msg">该商品最低的起订量，0为不限制</div>
      </el-form-item>
      <el-form-item label="限购数量">
        <el-input-number v-model="purchase" :min="0" controls-position="right" @change="handleChange"></el-input-number>
        <div class="msg">同个账号下最多限购该商品的数量，0为不限制</div>
      </el-form-item>
      <el-form-item label="是否包邮">
        <el-radio v-model="freeshipping" label="1">是</el-radio>
        <el-radio v-model="freeshipping" label="2">否</el-radio>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      model:'',
      value:'',
      radio:'1',
      oadir:'1',
      recommend:'2',
      newproducts:'2',
      bestsellers:'2',
      freeshipping:'2',
      num:0,
      nums:0,
      numss:50,
      marketprice:0,
      localprice:0,
      least:0,
      purchase:0
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
.msg{
  color: rgb(117, 117, 117);
  font-size: 12px;
}
.line{
  display: flex;
  justify-content: space-between;
}
.left-bottom-line{
  width: 10%;
  border-bottom: 1px solid gainsboro;
}
.right-bottom-line{
  width: 80%;
  border-bottom: 1px solid gainsboro;
}
.buyMsg{
  font-size: 13px;
  position: relative;
  left: 3px;
  top: 8px;
}
.something{
  margin-top: 30px;
}
</style>