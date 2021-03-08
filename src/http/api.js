import http from './index'
export default{
  //登录
  login({username,password}){
    return http.post('/login',{
      username,
      password
    })
  },
  //获取用户列表
  getUsers({ pagenum, pagesize, query }) {
    if (query) {
      return http.get(`/users?pagenum=${pagenum}&pagesize=${pagesize}&query=${query}`)
    } else {
      return http.get(`/users?pagenum=${pagenum}&pagesize=${pagesize}`)
    }
  },
  //获取导航栏列表
  getNavigation(){
    return http.get('/menus')
  }
}