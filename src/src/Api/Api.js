import axios from 'axios'
import router from '../router'

/*
校验登录状态
未登录，跳转登录界面
*/
function CheckLoginState() {
  if(!localStorage.getItem('PovertyToken')) {
    router.push("/");
    return false;
  }
  return true;
}

/*
调用Post接口
url：接口地址
formData：请求参数
*/
function ApiPost(url, formData) {
  formData.sessionId = localStorage.getItem('PovertyToken');
  return axios.post(url, formData, {timeout: 1500, headers: {'Content-Type': 'application/json'}})
}

/*
调用Get接口
url：接口地址
formData：请求参数
*/
// function ApiGet(url, params) {
//   url += "?sessionId=" + localStorage.getItem('PovertyToken') + "&" + params;
//   return axios.get(url)
// }

//登录
export const ApiLogin = (formData = {}) => {
  return ApiPost("/Api/login", formData)
};
//注册
export const ApiRegister = (formData = {}) => {
  return ApiPost("/Api/regist", formData)
};
//修改密码
export const ApiChangePass = (formData = {}) => {
  if(CheckLoginState()) {
    return ApiPost("/Api/changePass", formData)
  }
};
//退出
export const Apilogout = (formData = {}) => {
  if(CheckLoginState()) {
    return ApiPost("/Api/logout", formData)
  }
};

//获取区域数据
export const ApiAllAreas = (formData = {}) => {
  if(CheckLoginState()) {
    return ApiPost("/Api/allAreas", formData)
  }
};
//获取阿姆哈拉州信息
export const ApiAmhara = (formData = {}) => {
  if(CheckLoginState()) {
    return ApiPost("/Api/allAreas/amhara", formData)
  }
};

//获取标签类型
export const ApiAllTypes = (formData = {}) => {
  if(CheckLoginState()) {
    return ApiPost("/Api/allTypes", formData)
  }
};

//获取论坛数据
export const ApilistHelps = (formData = {}) => {
  if(CheckLoginState()) {
    return ApiPost("/Api/listHelps", formData)
  }
};

//论坛数据 新增、修改
export const ApiAddOrUpdate = (formData = {}) => {
  if(CheckLoginState()) {
    return ApiPost("/Api/addOrUpdate", formData)
  }
};

//1.1.5推荐列表
export const ApilistInfos = (formData = {}) => {
  if(CheckLoginState()) {
    return ApiPost("/Api/listInfos", formData)
  }
};
