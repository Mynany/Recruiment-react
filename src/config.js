import { Toast } from 'antd-mobile'
import axios from 'axios'

axios.interceptors.request.use(function(config){
    Toast.loading('loading', 0)
    return config
})

axios.interceptors.response.use(function(config){
    Toast.hide()
    return config
})