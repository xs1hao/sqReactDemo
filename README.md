### 这是我自己的第一个React项目
    
    计划在这个项目中练习自己目前对react的掌握情况。
    
    主要包括：组件之间调用、Reduex、路由、数据请求、本地接口模拟、webpack配置。
    
    以及一些新的用法都将在在这个工程中练习。

## 本地模拟生成环境运行项目 
    npm run build / yarn run build (打包项目)；
    切换至项目打包后的项目目录下---一般即 build文件中；npx http-server 即可。

## 在react项目中使用less
    npm run eject 暴露出来 config/webpack.config.js 然后可以修改项目的webpack 配置。
    yarn add less less-loader --save-dev 安装只需要的依赖及loader(将less编译成 CSS)。
    直接安装的less-loader版本过高，导致编译失败；需要降低less-loader的版本 [https://blog.csdn.net/qq_42430948/article/details/113552673]