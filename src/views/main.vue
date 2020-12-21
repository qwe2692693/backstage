<template>
  <div class="h-100">
    <el-container class="h-100">
      <el-aside width="auto">
        <new_aside/>
      </el-aside>
      <el-container>
        <el-header>
          <nav_bar/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import nav_bar from "@/components/nav_bar.vue";
import new_aside from "@/components/new_aside.vue";

export default {
  name: "new_main",
  components: {
    nav_bar,
    new_aside
  }
}
</script>

<style lang="scss" scoped>

</style>