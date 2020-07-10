# aqire Vue UI
一套基于Vue2.x的UI库，纯属娱乐

## 公告
这个是自己造轮子用的，主要还是练练手，更深入的学习。
组件的实现参考了流行的UI库，比如饿了么、蚂蚁金服等等。

## 依赖安装
```
yarn install
```

## 运行组件库API文档项目
```
yarn serve
```

## 项目结构
├─ public<br>
├─ src<br>
│   ├─ assets<br>
│   ├─ components       API文档页面结构相关组件<br>
│   ├─ example          组件示例，与 `src/views`目录结构保持一致<br>
│   ├─ mixins           
│   ├─ views            组件介绍markdown文档<br>
│   ├─ example.js       自动将 `src/example` 目录下的示例组件装载到 `src/views` 目录下的组件文档中<br>
│   ├─ navigation.json  导航目录中文描述及排序设置<br>
│   └─ router.js        自动根据 `src/views`的目录结构配置路由和导航结构<br>
├─ vue.config.js        vue config配置<br> 
