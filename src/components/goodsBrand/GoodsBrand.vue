<template>
  <div class="button">
    <el-button icon="el-icon-plus" size="mini" @click="dialogFormVisible=true">新增品牌</el-button>
    <el-dialog title="新增品牌" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="首拼" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="所属分类" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="描述" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Logo" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="链接" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="打开方式" :label-width="formLabelWidth">
                <el-radio v-model="window" label="1">当前窗口</el-radio>
                <el-radio v-model="window" label="2">新窗口</el-radio>
            </el-form-item>
            <el-form-item label="排序值" :label-width="formLabelWidth">
                <el-input-number v-model="least" :min="0" controls-position="right" @change="handleChange"></el-input-number>
            </el-form-item>
            <el-form-item label="排序值" :label-width="formLabelWidth">
                <el-switch v-model="value"></el-switch>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
    <el-button icon="el-icon-check" size="mini">启用</el-button>
    <el-button icon="el-icon-close" size="mini">禁用</el-button>
    <el-button icon="el-icon-delete" size="mini">删除</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="#" width="80">
        <el-checkbox>2</el-checkbox>
      </el-table-column>
      <el-table-column prop="name" label="名称" width="180">
      </el-table-column>
      <el-table-column prop="localPrice" label="首拼" width="100">
      </el-table-column>
      <el-table-column prop="classification" label="所属分类" width="100">
      </el-table-column>
      <el-table-column label="排序值" width="150">
        <el-input-number v-model="least" :min="0" controls-position="right" size="mini" @change="handleChange"></el-input-number>
      </el-table-column>
      <el-table-column prop="abc" label="状态" width="200">
      </el-table-column>
      <el-table-column prop="" label="操作" width="150">
        <el-button type="text" size="mini" icon="el-icon-link">链接</el-button>
        <el-button type="text" size="mini">编辑</el-button>
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
        dialogFormVisible: false,
        formLabelWidth: '120px',
        window:'2',
        least:50,
        value:true,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData:[
        {
          name:'somebody',
          localPrice:'1.00',
          source:'出售中',
          classification:'衬衫',
          salesVolume:'',
          abc:'0'
        },
        {
          name:'know',
          localPrice:'10.00',
          source:'出售中',
          classification:'墨盒',
          salesVolume:'',
          abc:'1'
        }
      ]
    }
  },
  components: {},
  methods: {
      handleChange(){}
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.button{
    margin-top: 30px;
}
</style>