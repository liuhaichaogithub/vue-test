<template>

    <div class="loginDiv">

        <el-card class="box-card">
            <div slot="header" class="loginFromDiv">
                <span class="loginSpan">系统登录</span>
                <el-form :model="loginFrom" status-icon :rules="rules" ref="loginFrom" label-width="100px"
                    class="loginFrom">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="loginFrom.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="loginFrom.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="loginButtonIteam">
                        <el-button class="loginButton" type="primary" @click="submitForm('loginFrom')">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </el-card>



    </div>
</template>

<script>
import { setToken } from '@/utils/setToken.js'
import { login } from '@/api/api.js'
export default {
    data() {

        var validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        return {
            loginFrom: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { validator: validateUsername, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(loginFrom) {
            this.$refs[loginFrom].validate((valid) => {
                if (valid) {
                    //     this.service.post('/sso/login', this.loginFrom)
                    //         .then(res => {
                    //             console.log('这里');
                    //             console.log(JSON.stringify(res));
                    //             if (res.data.code === 200) {

                    //                 // alert(JSON.parse(res.data.data.tag).username)
                    //                 localStorage.setItem('username', JSON.parse(res.data.data.tag).username)
                    //                 setToken(res.data.data.tokenName, res.data.data.tokenValue)
                    //                 this.$message({ message: '登录成功', type: 'success' })
                    //                 this.$router.push('/hello')
                    //             } else {
                    //                 alert(res.data.msg)
                    //             }
                    //         })
                    //         .catch(err => {
                    //             alert(err)
                    //         })
                    // } else {
                    //     console.log('error submit!!');
                    //     return false;
                    // }
                    login(this.loginFrom)
                        .then(res => {
                            console.log('这里');
                            console.log(JSON.stringify(res));
                            if (res.data.code === 200) {

                                // alert(JSON.parse(res.data.data.tag).username)
                                localStorage.setItem('username', JSON.parse(res.data.data.tag).username)
                                setToken(res.data.data.tokenName, res.data.data.tokenValue)
                                this.$message({ message: '登录成功', type: 'success' })
                                this.$router.push('/home')
                            } else {
                                alert(res.data.msg)
                            }
                        })
                        .catch(err => {
                            alert(err)
                        })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(loginFrom) {
            this.$refs[loginFrom].resetFields();
        }
    }
}
</script>
<style lang="scss">
.loginSpan {
    text-align: center;
    margin-left: 50%;
    // margin-bottom: 50%;

}

.loginDiv {
    width: 100%;
    height: 100%;
    position: absolute;
    background: aquamarine;
    margin: -10px;
    padding: 0px;
    // position:relative; //使div同行排列
    // text-align: center;
    // display: flex;

}

.loginFromDiv {
    width: 80%;
    height: 30%;
    // position: absolute;
    // text-align: center;
    margin: auto;
    top: 80%;
    left: 15%;
}

.loginButton {
    //圆角
    position: absolute;
    // border-radius: 35px;
    width: 100%;
    // left: 100%;
}

.box-card {
    position: absolute;
    // background: rgb(127, 148, 255);
    width: 50%;
    top: 35%;
    left: 25%;
    // text-align: center;
    position: absolute;
}
</style>