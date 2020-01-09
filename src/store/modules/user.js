import { login } from '@/api/login'//引入登录 api 接口

const user = {
  actions: {
    // 登录
    Login({ commit }, userInfo) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => { //封装一个 Promise
        login(username, userInfo.password).then(response => { //使用 login 接口进行网络请求
          commit('') //提交一个 mutation，通知状态改变
          resolve(response) //将结果封装进 Promise
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
export default user