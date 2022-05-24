<template>
  <div class="swiper-container" ref="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
        <img :src="carousel.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>


<script>
//引入swiper
import Swiper from 'swiper'
export default {
  name: 'Carousel',
  props: ['list'],
  watch: {
    list: {
      //立即监听：不管有没有数据变化，都监听一次
      //watch不监听list，是因为这个数据从来没有发生变化，数据来自父组件，生成的时候就存在了
      immediate: true,
      handler() {
        //虽然数据已经有了，但v-for动态渲染结构还是不能保证，因此还是需要使用nextTick
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.floor1Swiper,
            {
              loop: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              //如需要后退按钮
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            })
        })
      }
    }
  }
}
</script>

<style scoped>
</style>