<template>
  <div>
    <el-container>
        <el-header width="100%"><Header></Header></el-header>
            <el-container>
                <el-aside width="200px"><Aside></Aside></el-aside>
                <el-main><router-view /></el-main>
            </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from '../../components/aside/Aside.vue'
import Header from '../../components/header/Header.vue'
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {Header, Aside},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
</style>