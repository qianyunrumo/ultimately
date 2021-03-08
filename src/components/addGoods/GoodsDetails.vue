<template>
  <div>
    <el-form label-width="100px">
        <el-form-item label="关键词">
            <el-input placeholder="可输入商品关键词,有利于SEO搜索"></el-input>
        </el-form-item>
        <el-form-item label="页面描述">
            <el-input placeholder="可输入商品简单描述,有利于SEO搜索"></el-input>
        </el-form-item>
        <el-form-item label="详情描述">
            <quill-editor
            style="height:500px"
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"></quill-editor>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {quillEditor} from 'vue-quill-editor'
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
  name: '',
  props:{},
  data () {
    return {
        editorOption: {}
    }
  },
  components: {quillEditor},
  methods: {
      onEditorReady() {}, // 准备编辑器
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
  },
  mounted() {},
  computed: {
      editor() {
            return this.$refs.myQuillEditor.quill;
        },
  },
  watch: {}
}
</script>

<style lang="scss" scoped>

</style>