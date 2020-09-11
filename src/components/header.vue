<template>
  <div class="header">
    <van-nav-bar
      :title="headerTitle"
      left-arrow
      color="#444444"
      :border="false"
      @click-left="fallback"
    />
  </div>
</template>

<script>
    export default {
        props:['headerTitle'],
        data() {
            return{

            }
        },
        methods:{
            fallback() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped lang="less">
  .header {
    width: 100%;
    font-size: 0.2rem;
    text-align: center;
  }

</style>
