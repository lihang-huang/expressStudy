# expressStudy
通过express框架搭建的百度新闻移动页的小作业。

注：作业为本地搭建服务器环境

***
# version1.1
# 1.修复管理平台的删除功能无法正常运行的问题
# 2.新增图片文件上传功能，代替输入图片地址

# 本作业需要搭建xampp集成开发环境以及安装nodejs开发环境，模块依赖请浏览package.json

***

注意事项：


  1.在运行前请确认xampp Apache与MySQL模块已开启

  2.将baidu_news.sql导入MySQL数据库中

  3.在项目根目录下启动web服务

  4.百度新闻页地址：localhost:3000

  5.管理后台登录：localhost:3000/login

  6.管理后台 账号：jikexueyuan

             密码：123456


***

项目结构:

	bin

		www			//搭建web服务器文件


	models

		config			//数据库配置文件

		load			//百度新闻页数据请求处理


	node_modules			//模块目录


	public				//静态资源目录

		images			//图片资源

		javascripts		//js脚本资源

		stylesheets		//层叠样式表资源


	routes				//路由

		admin.js		//管理后台路由控制器

		index.js		//百度新闻首页路由控制器

		loginRoute.js		//管理后台登陆路由控制器


	sql				//数据库目录

		baidu_new.sql		//数据库脚本


	temp				//临时文件存放目录

		
	views				//视窗

		admin.ejs		//管理后台渲染模板

		index.ejs		//百度新闻首页渲染模板

		login.ejs		//登陆页渲染模板


	app.js				//服务器启动入口


	package.json                    //项目依赖包配置文件


	README.txt			//项目说明文件

***

实现功能:


   百度新闻：

	1. 布局为移动端页面

	2. 打开时根据之前操作加载不同模块新闻，允许加载页签：百家、本地、娱乐

	3. localStorage记录操作行为

    4. 点击百家、本地、娱乐异步加载不同模块新闻内容

	5. 页面新闻实现按添加时间排序


   管理后台登录：

	1. 验证账号密码是否准确

	2. 登陆成功后设置用户cookie信息

    3. 登陆成功后自动跳转至管理后台

    4. 登陆成功后无需多次登陆

   
   管理后台：

    1. 实现对用户身份的识别

    2. 未登陆状态下跳转至登陆页

    3. 用户注销后，跳转登陆流程并清空用户数据

    4. 实现对百度新闻页进行增、删、查、改的功能

	5. 实现百度新闻页跳转

	6. 实现图片文件上传

	7. 配置error信息模板

***