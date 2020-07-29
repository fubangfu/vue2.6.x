# aqire Vue UI
一套基于Vue2.6.x的UI库，纯属娱乐，非喜勿喷，请多指教

## 公告
这个是自己造轮子用的，主要还是练练手，更深入的学习。
组件的实现参考了流行的UI库，比如饿了么、蚂蚁金服等等。

## 依赖安装
```
yarn install
```

## 运行API文档
```
yarn serve
```

## 项目结构
├─ public<br>
├─ src<br>
│   ├─ assets<br>
│   ├─ components       API文档相关组件<br>
│   ├─ mixins           
│   ├─ packages         UI组件<br>
│   ├─ pages            API文档<br>
│   ├─ navigation.json  导航目录中文描述及排序设置<br>
│   └─ router.js        自动根据 `src/pages`的目录结构配置路由和导航结构<br>
├─ vue.config.js        vue-cli 配置<br> 
