<template>
    <div class="header">
        <el-header>
            <div class="title" style="text-align: center;">
                刘海潮的个人系统</div>
            <div class="userNameClass" style="text-align: right;">当前用户是: {{ userName }}</div>


        </el-header>
    </div>



</template>
<script>
import { getToken } from '../../utils/setToken'
export default {
    data() {
        return {
            userName: ''
        }
    },
    created() {
        this.userName = getToken('username')
    }
}
</script>

<style lang="scss" scoped>
.el-header {
    // height: ;
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    display: flex;
    justify-content: space-between;

    .title {
        width: 100%;
        font-size: 24px;
        display: inline;

    }

    .userNameClass {
        width: 10%;
        display: inline;
        text-align: right;
        // float: right;
    }
}
</style>