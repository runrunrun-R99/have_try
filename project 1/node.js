// git 第二天
// 开源和闭源（作商用）的概念
// 开源协议：MIT 要求少很多（基本上没有要求）
// 核心思想：我为人人，人人为我（jquery 开源项目，nodejs）
// 开源托管平台：
// github 特点：访问很慢 全世界的开发喜欢在这里去交流（全球最大的同性交友网站）
// gitlab 特点：企业里面都喜欢用（每个公司基本上都会部署一套托管平台）（需要用内网访问）
// gitee  特点：是国内的托管平台，访问很慢（可以做学习用）
// Watch 跟踪的意思
// Star 点赞的数量（单位：k -> 1000）
// Fork 复制一份到自己的仓库里面去（想根据这个项目，自己另外加点东西）
// Code 就是次工程的代码列表
// Sponsor 表示可以赞助一杯瑞幸
// 先去注册一个账号
// 新建远程仓库：New Repository
// mkdir qdjy51  - 表示创建一个叫 qdjy51 这个名字的文件夹
// cd qdjy51  - 表示进入到后面叫这个名字的文件夹里面去
// touch README.md  - 表示创建一个名字叫 README.md 文件
// 链接远程仓库的两种方式：https ssh
// https 缺点，每次登录的时候需要输入账号和密码（winds每次对你输入的账号和密码，会自动保存）
// 场景：如果第一次输入账号密码有误，需要去 控制面板\用户帐户\凭据管理器 把原先存储的账号密码删掉，再重新输入账号密码
// ssh：企业里面比较推荐的一种方式，一次配置，终身使用（会有一些配置的步骤）
// echo "# qdjy51" >> README.md   -  新建 README.md 文件的同时写入 "# qdjy51"
// master 比较特殊，受：“Black Lives Matter”，缩写为“BLM”，黑人人权运动，意为“黑人的命也是命” 影响
// 2020年10月1号 把名字改成了 main
// 推荐阅读：https://blog.csdn.net/H176Nhx7/article/details/111350550
// git remote add origin https://github.com/zlc1000/qdjy51.git
//      远程  添加
// origin译为：源; 此处表示一个别名的意思
// 上句命令的意思是：将本地仓库和远程仓库地址进行关联
// 如何查看当前仓库关联的仓库是什么：git remote -v
// 如果你关联的地址不是你想关联的，可以删掉：git remote remove origin

// git push -u origin main
// 添加完远程仓库的关联之后，就要朝仓库进行推送了
// 解释：如果是第一个提交到仓库的话，要写全了：-u 表示是第一次提交 origin 是指明提交到哪个仓库 main 是表示朝这个仓库的哪个房间
// 如果是第二次提交的话，只需要执行：git push 就好了
// 如果是第二次提交的话，只需要执行：git push 就好了

// https://github.com/settings/keys 路径 generate 表示是生成的意思
// 命令：ssh-keygen -t ed25519 -C "写自己的邮箱"
// 私钥和公钥默认存放的位置：C:\Users\lianchang\.ssh

// 测试一下私钥公钥是否正确（github比较慢，请去 gitee 码云）

// 测试：ssh -T git@github.com   /    ssh -T git@gitee.com
// 不行的话，换用热点   换别人的热点