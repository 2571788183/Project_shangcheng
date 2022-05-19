 <template>
  <div>
    <MyHeader></MyHeader>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- 在Home、Search显示，在登陆注册隐藏,通过路由路径实现 -->
    <!-- <MyFooter v-show="$route.path == '/home' || $route.path == '/search'"></MyFooter> -->
    <MyFooter v-show="$route.meta.showFooter"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import TypeNav from './components/TypeNav'

//注册组件
export default {
  name: 'App',
  components: {
    MyFooter,
    MyHeader,
    TypeNav
  },
  mounted() {
    //派发一个action||获取商品分类的三级列表的数据
    // this.$store.dispatch("getCategoryList");
  }
}

</script>

<style>
</style>
