<template>
  <div class="home">
    <Header />
    <el-container  class="content" >
      <Menu />
      <el-container >
        <el-main>这里是内容区域</el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import { getToken } from '../utils/setToken'
import Header from './common/Header.vue'
import Footer from './common/Footer.vue'
import Menu from './common/Menu.vue'
import { test } from '@/api/api.js'
export default {
  name: 'Home',
  props: {
    // msg: String
  },
  components: {
    Header,
    Footer,
    Menu
  },
  data() {
    return {
      userName: getToken('username'),
    }
  },
  created(){
    test().then((res)=>{
      console.log(res)
    })
  }

}

</script>
<style lang="scss">
.app{
  height: 100%;
}
.home {
  height: 100%;
  width: 100%;
  .content{
    // position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    height: 100%;
    // min-width: 0;
  }
}
.el-main{
  height: 100%;
  
}


</style>


