<template>

  <el-row :gutter="0">
    <el-col :lg="3" :col="2" :sm="6" :xs="6">
      CRCMS
      <i class="fa fa-remove">a</i>
      <i class="fa fa-thumbs-down"></i>
      <icon name="refresh" spin></icon>
      <icon name="flag"></icon>
    </el-col>
    <el-col :lg="21" :col="20" :sm="18" :xs="18">
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'header-view',
    data () {
      return {
        'msg': 'message'
      }
    }
  }
</script>


<style scoped>
.sidebar-toggle:before {
  content:"123"
}
</style>
