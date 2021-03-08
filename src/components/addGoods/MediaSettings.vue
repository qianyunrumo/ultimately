<!--媒体设置-->
<template>
  <div>
    <el-form>
        <el-form-item label="商品相册">
            <div class="upload" @click="handlePictureCardPreview">
                <div class="icon-plus"><i class="el-icon-plus"></i></div>
            </div>
            <div class="function">
                <el-button icon="el-icon-finished" size="small">资源选择</el-button>
                <el-button icon="el-icon-upload2" size="small" @click="dialog">上传图片</el-button>
            </div>
            <div class="msg">第一张图片将作为商品主图，拖动可调整图片位置，建议图片尺寸800x800</div>
        </el-form-item>
        <el-form-item label="视频上传">
            <div style="width:500px;height:200px;background-color:red;margin-left:70px"></div>
            <div class="function">
                <el-button icon="el-icon-finished" size="small">资源选择</el-button>
                <el-button icon="el-icon-upload2" size="small">上传视频</el-button>
            </div>
            <div class="msg">推荐使用mp4格式的视频，同时也支持ogg、webm等格式的视频</div>
        </el-form-item>
    </el-form>
    <el-dialog :visible.sync="dialogVisible">
      <el-upload
        class="upload-demo"
        drag
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">请选择资源进行(支持拖拽)上传，大小不能超过 1M</div>
        <img width="100%" :src="dialogImageUrl" alt="" />
       </el-upload>
       <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
    <!--
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    -->
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
        dialogImageUrl: '',
        dialogVisible: false
    };
  },
  components: {},
  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      dialog(){
         this.dialogVisible = true; 
      }
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.upload{
    width: 148px;
    height: 148px;
    border-radius: 5px;
    margin-left: 70px;
    border: 1px dashed rgb(201, 199, 199);
}
.upload:hover{
    border: 1px dashed deepskyblue;
}
.icon-plus{
    margin: 50px 58px;
    color: rgb(145, 143, 143);
    font-size: 30px;
}
.function{
    width: 220px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 70px;
}
.msg{
    margin-left: 70px;
    font-size: 10px;
    color: rgb(145, 143, 143);
}
</style>