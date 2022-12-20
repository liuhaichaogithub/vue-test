// 将项目中的接口封装成api调用
import service from '../service'
import { getToken } from '@/utils/setToken.js'

//登录接口
export function login(data){
    return service({
        method: 'post',
        // baseURL:'/api',
        url: '/api/sso/login',
        data
    })
}

//学生列表的查询接口
export function test(param){
    return service({
        method: 'get',
        // baseURL:'/api',
        url: '/api/test/lhc',
        param,
        headers:{"satoken":getToken("satoken")}
    })
}