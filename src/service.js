import axios from 'axios'
import { getToken } from './utils/setToken'
import { Message } from 'element-ui'

const service = axios.create({
    baseURL: '/',
    timeout: 30000
})

//添加请求拦截器
service.interceptors.request.use((config) => {
    //在请求之前获取并设置token
    config.headers['satoken'] = getToken('satoken')
    return config
}, (error) => {
    return Promise.reject(error)
}

)

//添加响应拦截器
service.interceptors.response.use((response) => {
    // alert(JSON.stringify(response))
    // console.log(JSON.stringify(response));
    //对响应数据做些什么
    let { code, msg } = response.data
    console.log(JSON.stringify(response.data));
    if (code !== 200) {
        Message({ message: msg || 'error', type: 'warning' })
    }
    return response
}, (error) => {
    return Promise.reject(error)
}
)
export default service