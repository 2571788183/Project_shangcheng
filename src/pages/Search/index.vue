
<template>
  <div>
    我是搜索
    <h2>params参数----{{ $route.params.keyWord }}</h2>
    <h2>query参数----{{ $route.query.k }}</h2>
  </div>
</template>


<script>
//暴露组件
export default {
  name: 'search',
}
</script>

<style scoped>
</style>