<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="detail" label="商品信息" width="380">
      </el-table-column>
      <el-table-column prop="comment" label="商品评价" width="200">
      </el-table-column>
      <el-table-column prop="rate" label="" width="200">
      </el-table-column>
      <el-table-column prop="" label="操作" width="150">
        <el-button type="text" size="mini">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        tableData:[
        {
          detail:'somebody',
          comment:'1.00',
          rate:'五颗星'
        },
        {
          detail:'know',
          comment:'10.00',
          rate:'四颗星'
        }
      ]
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>