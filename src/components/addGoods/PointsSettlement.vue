<template>
  <div>
    <el-form>
        <el-form-item label="结算方式">
            <el-radio v-model="percentage" label="1">按百分比</el-radio>
            <el-radio v-model="percentage" label="2">按固定值</el-radio>
        </el-form-item>
        <el-form-item label="赠送分值" v-if="percentage==='1'">
            <el-input-number v-model="give" :min="0" :max="100" controls-position="right" @change="handleChange"></el-input-number>
            <div class="msg">按实际支付金额百分比赠送，赠送分值的范围是0 ~ 100</div>
        </el-form-item>
        <el-form-item label="赠送分值" v-else>
            <el-input-number v-model="give" :min="1" controls-position="right" @change="handleChange"></el-input-number>
            <div class="msg">按赠送分值设定的值固定赠送积分，赠送分值需大于等于0</div>
        </el-form-item>
        <el-form-item label="可抵扣额">
            <el-input-number v-model="deduction" :min="0" controls-position="right" @change="handleChange"></el-input-number>
            <div class="msg">商品最多允许抵扣多少积分，0为不可使用</div>
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
        percentage:'1',
        give:0,
        deduction:0
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
</style>