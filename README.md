### 这是我自己的第一个React项目
    
    计划在这个项目中练习自己目前对react的掌握情况。
    
    主要包括：组件之间调用、Reduex、路由、数据请求、本地接口模拟、webpack配置。
    
    以及一些新的用法都将在在这个工程中练习。

## 本地模拟生成环境运行项目 
    npm run build / yarn run build (打包项目)；
    切换至项目打包后的项目目录下---一般即 build文件中；npx http-server 即可。

## 在react项目中使用 less
    npm run eject 暴露出来 config/webpack.config.js 然后可以修改项目的webpack 配置。
    yarn add less less-loader --save-dev 安装只需要的依赖及loader(将less编译成 CSS)。
    直接安装的less-loader版本过高，导致编译失败；需要降低less-loader的版本 [https://blog.csdn.net/qq_42430948/article/details/113552673]
## react 组件优化
    1） 父组件内部值发生变化，调用父组件的render() 这个时候父组件中的子组件也会调用他自己的render(), 可以使用 PureComponent;
## 配置代理---解决跨域问题
    启动服务：
    需要测试axios 功能，需要进入当前工程的server 目录，启动脚本文件，运行服务器

    跨域（协议、域名、端口号有一个不同）访问，需要配置代码。
    在src目录下创建setupProxy.js 脚本文件，在里面配置相关代理，可以实现跨域访问。
    解决跨域访问的方法：[https://segmentfault.com/a/1190000011145364]

## require 和 impport 的区别
    [https://blog.csdn.net/qq_35087256/article/details/84144647]
    require：运行时加载
    import：编译时加载（效率更高）【由于是编译时加载，所以import命令会提升到整个模块的头部】
## react-Redux 