//封装axios
import axios from 'axios'
import {message} from 'element-ui'
const http=axios.create({
    baseURL:'/api',
    timeout:10000
})

//响应拦截
http.interceptors.response.use(res => {
    return res.data
}),err => {
    //统一处理请求的错误
    let status=err.response&&err.response.status
    if(status===400){
        //参数错误
        message.error('参数错误')
    }
    if(status===401){
        //没有权限
        Toast.error('没有权限')
    }
    if(status===403){
        //登录过期
        Toast.error('登录过期')
    }
    if(status===404){
        //路径错误
        Toast.error('路径错误')
    }
    if(status===500){
        //服务器出错
        Toast.error('服务器出错')
    }
    if(status===503){
        //服务器维护
        Toast.error('服务器维护')
    }
}

export default http