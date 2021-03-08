<template>
  <div>
    <div class="function" v-if="activeName==='first'||activeName==='second'">
      <el-button icon="el-icon-plus" size="mini" @click="addGoods">新增商品</el-button>
      <el-button icon="el-icon-bottom" size="mini">下架</el-button>
      <el-dropdown>
        <el-button icon="el-icon-medal" size="mini">推荐<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设为推荐</el-dropdown-item>
          <el-dropdown-item>取消推荐</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <el-button icon="el-icon-star-off" size="mini">新品<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设为新品</el-dropdown-item>
          <el-dropdown-item>取消新品</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <el-button icon="el-icon-sunny" size="mini">热卖<i class="el-icon-arrow-down el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设为热卖</el-dropdown-item>
          <el-dropdown-item>取消热卖</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button icon="el-icon-delete" size="mini">删除</el-button>
    </div>
    <div v-else style="margin-top:30px">
      <el-button icon="el-icon-delete" size="mini">彻底删除</el-button>
      <el-button icon="el-icon-refresh-left" size="mini">恢复</el-button>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="出售中" name="first">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="12345" width="80">
        <el-checkbox>2</el-checkbox>
      </el-table-column>
      <el-table-column label="商品" width="180">
        <div style="width:300px">
          <div style="display:flex">
            <div>商品货号:</div>
            <div>创建时间:</div>
          </div>
          <img src="https://i0.hdslb.com/bfs/article/8ec252a0ea4124c77946d8c9dfeaed819258710f.jpg@1280w_1280h.webp" style="width:100px">
        </div>
      </el-table-column>
      <el-table-column prop="localPrice" label="本地价" width="100">
      </el-table-column>
      <el-table-column prop="stock" label="库存" width="100">
      </el-table-column>
      <el-table-column prop="salesVolume" label="总销量" width="100">
      </el-table-column>
      <el-table-column prop="abc" label="排序值" width="200">
      </el-table-column>
      <el-table-column prop="" label="操作" width="100">
        <div><el-button type="text" size="mini">编辑商品</el-button></div>
        <div><el-button type="text" size="mini">复制商品</el-button></div>
        <div><el-button type="text" size="mini">下架</el-button></div>
        <div><el-button type="text" size="mini">删除</el-button></div>
      </el-table-column>
    </el-table>
        <!--<div style="width:100%;display:flex;justify-content:space-between">
          <el-checkbox></el-checkbox>
          <div style="width:200px">商品</div>
          <div>本地价</div>
          <div>库存</div>
          <div>总销量</div>
          <div>排序值</div>
          <div>操作</div>
        </div>
        <div style="width:100%;display:flex;justify-content:space-between">
          <el-checkbox>2</el-checkbox>
          <div style="width:300px">
            <div style="display:flex">
            <div>商品货号:</div>
            <div>创建时间:</div>
          </div>
          <img src="https://i0.hdslb.com/bfs/article/8ec252a0ea4124c77946d8c9dfeaed819258710f.jpg@1280w_1280h.webp" style="width:150px">
          </div>
          <div style="color:red">1.00</div>
          <div>0</div>
          <div>0</div>
          <div>
            <el-input-number size="mini" v-model="num" :min="1" controls-position="right" @change="handleChange"></el-input-number>
          </div>
          <div>
            <div><el-button type="text" size="mini">编辑商品</el-button></div>
            <div><el-button type="text" size="mini">复制商品</el-button></div>
            <div><el-button type="text" size="mini">下架</el-button></div>
            <div><el-button type="text" size="mini">删除</el-button></div>
          </div>
        </div>-->
      </el-tab-pane>
      <el-tab-pane label="已下架" name="second">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column width="80">
            <el-checkbox>2</el-checkbox>
          </el-table-column>
          <el-table-column label="商品" width="180">
            <div style="width:300px">
              <div style="display:flex">
                <div>商品货号:</div>
                <div>创建时间:</div>
              </div>
              <img src="https://i0.hdslb.com/bfs/article/8ec252a0ea4124c77946d8c9dfeaed819258710f.jpg@1280w_1280h.webp" style="width:150px">
            </div>
          </el-table-column>
          <el-table-column prop="localPrice" label="本地价" width="100">
          </el-table-column>
          <el-table-column prop="stock" label="库存" width="100">
          </el-table-column>
          <el-table-column prop="salesVolume" label="总销量" width="100">
          </el-table-column>
          <el-table-column prop="abc" label="排序值" width="200">
          </el-table-column>
          <el-table-column prop="" label="操作" width="100">
            <div><el-button type="text" size="mini">编辑商品</el-button></div>
            <div><el-button type="text" size="mini">复制商品</el-button></div>
            <div><el-button type="text" size="mini">上架</el-button></div>
            <div><el-button type="text" size="mini">删除</el-button></div>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="回收站" name="third">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column width="80">
            <el-checkbox>2</el-checkbox>
          </el-table-column>
          <el-table-column prop="source" label="来源" width="80">
          </el-table-column>
          <el-table-column label="商品" width="180">
            <div style="width:300px">
              <div style="display:flex">
                <div>商品货号:</div>
                <div>创建时间:</div>
              </div>
              <img src="https://i0.hdslb.com/bfs/article/8ec252a0ea4124c77946d8c9dfeaed819258710f.jpg@1280w_1280h.webp" style="width:150px">
            </div>
          </el-table-column>
          <el-table-column prop="localPrice" label="本地价" width="100">
          </el-table-column>
          <el-table-column prop="stock" label="库存" width="100">
          </el-table-column>
          <el-table-column prop="salesVolume" label="总销量" width="100">
          </el-table-column>
          <el-table-column prop="abc" label="排序值" width="200">
          </el-table-column>
          <el-table-column prop="" label="操作" width="100">
            <div><el-button type="text" size="mini">彻底删除</el-button></div>
            <div><el-button type="text" size="mini">恢复</el-button></div>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
      activeName:'first',
      num:50,
      tableData:[
        {
          localPrice:'1.00',
          source:'出售中',
          stock:'0',
          salesVolume:'0',
          abc:'0'
        },
        {
          localPrice:'10.00',
          source:'出售中',
          stock:'1',
          salesVolume:'1',
          abc:'1'
        }
      ]
    }
  },
  components: {},
  methods: {
      addGoods(){
        this.$router.push('/goods/admin/create' )
      },
      handleChange(){},
      handleClick(){}
  },
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.function{
    width: 580px;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;

}
</style>