<template>
  <div class="test" id="test">
    My is Test
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">a</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">b</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">c</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">d</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'test add app'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
