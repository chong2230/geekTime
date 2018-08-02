// banner轮播图
const Mockdata = {
    '/discover/banner' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": [
            {
                "id": 1,
                "description": "\u8bad\u7ec31\u63cf\u8ff0",
                "icon": "banner/1.jpg",
                "name": "\u8bad\u7ec311"
            },
            {
                "id": 5,
                "description": "\u8bad\u7ec35\u63cf\u8ff0",
                "icon": "banner/5.jpg",
                "name": "\u8bad\u7ec35"
            },
            {
                "id": 2,
                "description": "\u8bad\u7ec32\u63cf\u8ff0",
                "icon": "banner/2.jpg",
                "name": "\u8bad\u7ec32"
            }
        ]
    },

    // 发现列表
    '/discover/list' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            list : [
                {
                    title: "极客新闻",
                    key: "news",
                    contents : [
                        {
                            id: 101,
                            "description": "苏宁易购乔新亮：最有效的研发管理经验",
                            audio: ""
                        },
                        {
                            id: 102, 
                            "description": "HAP新方法：容器比虚拟机更安全",
                            audio: ""
                        },
                        {
                            id: 103, 
                            "description": "敏捷测试需要注意的五种危险行为",
                            audio: ""
                        },
                        {
                            id: 104, 
                            "description": "赛灵思收购深鉴科技，AI芯片并购加速",
                            audio: ""
                        }                    
                    ],
                },
                {
                    title: "精品专栏",
                    key: "subjects",
                    contents : [
                        {
                            "id": 1,
                            "name": "机器学习40讲",
                            "description": "帮你打通机器学习的任督二脉",
                            "icon": "banner/3.jpg",
                            "is_new": true,
                            "title": "21 | 基函数扩展：属性的非线性...",
                            "author": "王天一",
                            "honor": "工学博士，副教授",
                            "avatar_image": "avatar/1.jpg",
                            "cost": 68,     // 花费
                            "period": 40,   // 多少期，不传或传0时为每年
                        },
                        {
                            "id": 2,
                            "name": "从0开始学游戏开发",
                            "description": "你的游戏开发入门第一课",
                            "icon": "banner/4.jpg",
                            "is_new": true,
                            "title": "第25讲 | 热点剖析（六）：AR和...",
                            "author": "蔡能",
                            "honor": "原网易游戏引擎架构师，资深...",
                            "avatar_image": "avatar/2.jpg",
                            "cost": 68,     // 花费
                            "period": 36,   // 多少期
                        },
                        {
                            "id": 3,
                            "name": "Java核心技术36讲",
                            "description": "Oracle首席工程师带你修炼Java内功",
                            "icon": "banner/6.jpg",
                            "is_new": true,
                            "title": "第33讲 | 后台服务出现明显“变...",
                            "author": "杨晓峰",
                            "honor": "Oracle首席工程师",
                            "avatar_image": "avatar/3.jpg",
                            "cost": 68,     // 花费
                            "period": 36,   // 多少期
                        },
                    ],
                },
                {
                    title: "视频课程",
                    key: "courses",
                    contents : [
                        {
                            "id": 101,
                            "name": "快速上手Kotlin开发",
                            "description": "Java/Android开发者的实战指南",
                            "icon": "author/1.jpg",
                            "author": "张涛",
                            "honor": "资深Android工程师",
                            "cost": 129,     // 花费
                            "period": 36,   // 多少课时
                            "times": 550,    // 分钟
                        },
                        {
                            "id": 102,
                            "name": "React实战进阶45讲",
                            "description": "掌握当下最热门的前端利器",
                            "icon": "author/2.jpg",
                            "author": "王沛",
                            "honor": "eBay资深技术专家",
                            "cost": 199,     // 花费
                            "period": 45,   // 多少课时
                            "times": 500,    // 分钟
                        },
                        {
                            "id": 103,
                            "name": "零基础学Python",
                            "description": "掌握AI时代的编程语言",
                            "icon": "author/3.jpg",
                            "author": "尹会生",
                            "honor": "金山软件西山居技术经理",
                            "cost": 199,     // 花费
                            "period": 71,   // 多少课时
                            "times": 600,    // 分钟
                        },
                    ]
                },
                {
                    title: "极客商城",
                    key: "mall",
                    contents : [
                        {
                            "id": 401,
                            "description": "《算法》算法领域的经典参考书",
                            "icon": "book/1.jpg",
                            "cost": 78.9,     // 花费
                        },
                        {
                            "id": 402,
                            "description": "《算法图解》像小说一样的算法书",
                            "icon": "book/2.jpg",
                            "cost": 38.9,     // 花费
                        },
                        {
                            "id": 403,
                            "description": "《裂变》王天一作品",
                            "icon": "book/3.jpg",
                            "cost": 59,     // 花费 人民币
                        },
                        {
                            "id": 404,
                            "description": "《跃迁》朱赟作品",
                            "icon": "book/4.jpg",
                            "cost": 59,     // 花费 人民币
                        }
                    ]
                },
                {
                    title: "精品微课",
                    key: "microclass",
                    contents : [
                        {
                            "id": 501,
                            "name": "Service Mesh实践指南",
                            "description": "来自一线大厂的第一手经验总结",
                            "icon": "micro/1.jpg",
                            "cost": 9,     // 花费
                            "period": 6,   // 多少文章
                            "times": 0,    // 字数
                        },
                        {
                            "id": 502,
                            "name": "深入浅出gRPC",
                            "description": "详解gRPC运行机制与原理",
                            "icon": "micro/2.jpg",
                            "cost": 9,     // 花费
                            "period": 6,   // 多少文章
                            "times": 45000,    // 字数
                            audio: ""
                        },
                        {
                            "id": 503,
                            "name": "性能优化面面观",
                            "description": "来自业界顶尖的最佳实践",
                            "icon": "micro/3.jpg",
                            "cost": 6,     // 花费
                            "period": 5,   // 多少文章
                            "times": 0,    // 多少字数
                        },
                    ]
                },
                {
                    title: "热点专题",
                    key: "hots",
                    contents : [
                        {
                            "id": 601,
                            "icon": "hot/1.jpg",
                        },
                        {
                            "id": 602,
                            "icon": "hot/2.jpg",
                        },
                        {
                            "id": 603,                        
                            "icon": "hot/3.jpg",
                        }
                    ],
                },
                {
                    title: "二叉树视频",
                    key: "videos",
                    contents : [
                        {
                            "id": 701,
                            "description": "Facebook曲晓音--别人家的产品经理是啥样",
                            "icon": "home/1.jpg",
                            "author": "曲晓音"
                        },
                        {
                            "id": 702,
                            "description": "第一批创业者如何看待区块链项目？",
                            "icon": "home/2.jpg",
                            "author": "陈浩"
                        },
                        {
                            "id": 703,                        
                            "description": "逐浪硅谷的华人程序媛",
                            "icon": "home/3.jpg",
                            "author": "朱赟"
                        }
                    ],
                },

            ]                        
        }
    },

    // 专栏
    '/subject/list' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            headerImg : "subject/header/geek.jpg",
            list : [
                {
                    "id": 101,
                    "name": "快速上手Kotlin开发",
                    "description": "Java/Android开发者的实战指南",
                    "icon": "course/1.jpg",
                    "avatar_image": "avatar/1.jpg",
                    "author": "张涛",
                    "honor": "资深Android工程师",
                    "cost": 129,     // 花费
                    "period": 36,   // 多少课时
                    "times": 550,    // 分钟
                    "sub_count": 2458,   // 多少人购买
                    "update_frequency": "周一/三/五更新"  // 更新频率
                },
                {
                    "id": 102,
                    "name": "React实战进阶45讲",
                    "description": "掌握当下最热门的前端利器",
                    "icon": "course/2.jpg",
                    "avatar_image": "avatar/2.jpg",
                    "author": "王沛",
                    "honor": "eBay资深技术专家",
                    "cost": 199,     // 花费
                    "period": 45,   // 多少课时
                    "times": 500,    // 分钟
                    "sub_count": 5458,
                    "update_frequency": "已更新完毕"
                },
                {
                    "id": 103,
                    "name": "零基础学Python",
                    "description": "掌握AI时代的编程语言",
                    "icon": "course/3.jpg",
                    "avatar_image": "avatar/3.jpg",
                    "author": "尹会生",
                    "honor": "金山软件西山居技术经理",
                    "cost": 199,     // 花费
                    "period": 71,   // 多少课时
                    "times": 600,    // 分钟
                    "sub_count": 9458,
                    "update_frequency": "7月30日正式更新"
                },
                {
                    "id": 104,
                    "name": "快速上手Kotlin开发",
                    "description": "Java/Android开发者的实战指南",
                    "icon": "course/1.jpg",
                    "avatar_image": "avatar/1.jpg",
                    "author": "张涛",
                    "honor": "资深Android工程师",
                    "cost": 129,     // 花费
                    "period": 36,   // 多少课时
                    "times": 550,    // 分钟
                    "sub_count": 2458,   // 多少人购买
                    "update_frequency": "周一/三/五更新"  // 更新频率
                },
                {
                    "id": 105,
                    "name": "React实战进阶45讲",
                    "description": "掌握当下最热门的前端利器",
                    "icon": "course/2.jpg",
                    "avatar_image": "avatar/2.jpg",
                    "author": "王沛",
                    "honor": "eBay资深技术专家",
                    "cost": 199,     // 花费
                    "period": 45,   // 多少课时
                    "times": 500,    // 分钟
                    "sub_count": 5458,
                    "update_frequency": "已更新完毕"
                },
                {
                    "id": 106,
                    "name": "零基础学Python",
                    "description": "掌握AI时代的编程语言",
                    "icon": "course/3.jpg",
                    "avatar_image": "avatar/3.jpg",
                    "author": "尹会生",
                    "honor": "金山软件西山居技术经理",
                    "cost": 199,     // 花费
                    "period": 71,   // 多少课时
                    "times": 600,    // 分钟
                    "sub_count": 9458,
                    "update_frequency": "7月30日正式更新"
                }
            ]
        }    
    },

    // 视频课程
    '/course/list' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            list : [
                {
                    "id": 101,
                    "name": "快速上手Kotlin开发",
                    "description": "Java/Android开发者的实战指南",
                    "icon": "course/1.jpg",
                    "avatar_image": "avatar/1.jpg",
                    "author": "张涛",
                    "honor": "资深Android工程师",
                    "cost": 129,     // 花费
                    "period": 36,   // 多少课时
                    "times": 550,    // 分钟
                    "sub_count": 2458,   // 多少人购买
                    "update_frequency": "周一/三/五更新"  // 更新频率
                },
                {
                    "id": 102,
                    "name": "React实战进阶45讲",
                    "description": "掌握当下最热门的前端利器",
                    "icon": "course/2.jpg",
                    "avatar_image": "avatar/2.jpg",
                    "author": "王沛",
                    "honor": "eBay资深技术专家",
                    "cost": 199,     // 花费
                    "period": 45,   // 多少课时
                    "times": 500,    // 分钟
                    "sub_count": 5458,
                    "update_frequency": "已更新完毕"
                },
                {
                    "id": 103,
                    "name": "零基础学Python",
                    "description": "掌握AI时代的编程语言",
                    "icon": "course/3.jpg",
                    "avatar_image": "avatar/3.jpg",
                    "author": "尹会生",
                    "honor": "金山软件西山居技术经理",
                    "cost": 199,     // 花费
                    "period": 71,   // 多少课时
                    "times": 600,    // 分钟
                    "sub_count": 9458,
                    "update_frequency": "7月30日正式更新"
                },
                {
                    "id": 104,
                    "name": "快速上手Kotlin开发",
                    "description": "Java/Android开发者的实战指南",
                    "icon": "course/1.jpg",
                    "avatar_image": "avatar/1.jpg",
                    "author": "张涛",
                    "honor": "资深Android工程师",
                    "cost": 129,     // 花费
                    "period": 36,   // 多少课时
                    "times": 550,    // 分钟
                    "sub_count": 2458,   // 多少人购买
                    "update_frequency": "周一/三/五更新"  // 更新频率
                },
                {
                    "id": 105,
                    "name": "React实战进阶45讲",
                    "description": "掌握当下最热门的前端利器",
                    "icon": "course/2.jpg",
                    "avatar_image": "avatar/2.jpg",
                    "author": "王沛",
                    "honor": "eBay资深技术专家",
                    "cost": 199,     // 花费
                    "period": 45,   // 多少课时
                    "times": 500,    // 分钟
                    "sub_count": 5458,
                    "update_frequency": "已更新完毕"
                },
                {
                    "id": 106,
                    "name": "零基础学Python",
                    "description": "掌握AI时代的编程语言",
                    "icon": "course/3.jpg",
                    "avatar_image": "avatar/3.jpg",
                    "author": "尹会生",
                    "honor": "金山软件西山居技术经理",
                    "cost": 199,     // 花费
                    "period": 71,   // 多少课时
                    "times": 600,    // 分钟
                    "sub_count": 9458,
                    "update_frequency": "7月30日正式更新"
                }
            ]
        }    
    },
    // 精品微课
    '/microclass/list' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            list : [
                {
                    "id": 101,
                    "name": "Service Mesh实践指南",
                    "description": "来自一线大厂的第一手经验总结",
                    "icon": "course/1.jpg",
                    "avatar_image": "avatar/1.jpg",
                    "author": "张涛",
                    "honor": "资深Android工程师",
                    "cost": 129,     // 花费
                    "period": 36,   // 多少课时
                    "times": 550,    // 分钟
                    "sub_count": 2458,   // 多少人购买
                    "update_frequency": "周一/三/五更新"  // 更新频率
                },
                {
                    "id": 102,
                    "name": "深入浅出gRPC",
                    "description": "详解gRPC运行机制与原理",
                    "icon": "course/2.jpg",
                    "avatar_image": "avatar/2.jpg",
                    "author": "王沛",
                    "honor": "eBay资深技术专家",
                    "cost": 199,     // 花费
                    "period": 45,   // 多少课时
                    "times": 500,    // 分钟
                    "sub_count": 5458,
                    "update_frequency": "已更新完毕"
                },
                {
                    "id": 103,
                    "name": "性能优化面面观",
                    "description": "来自业界顶尖的最佳实践",
                    "icon": "course/3.jpg",
                    "avatar_image": "avatar/3.jpg",
                    "author": "尹会生",
                    "honor": "金山软件西山居技术经理",
                    "cost": 199,     // 花费
                    "period": 71,   // 多少课时
                    "times": 600,    // 分钟
                    "sub_count": 9458,
                    "update_frequency": "7月30日正式更新"
                }
            ]
        }    
    },
    // 极客新闻
    '/news' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            list : [
                {
                    "id": 101,
                    "title": "你需要了解的11个实用的JavaScript库",
                    "create_time": "2018-07-29",
                    "times": 213,   // 时长（秒）
                    "listened": 19, // 已听百分比
                },
                {
                    "id": 102,
                    "title": "Azure虚拟WAN和Azure防火墙公开预览",
                    "create_time": "2018-07-29",
                    "times": 183,   // 时长（秒）
                    "listened": 0, // 已听百分比
                },
                {
                    "id": 103,
                    "title": "微软提供Windows 10 IoT Core Services",
                    "create_time": "2018-07-29",
                    "times": 197,   // 时长（秒）
                    "listened": 0, // 已听百分比
                },
                {
                    "id": 104,
                    "title": "GDPR条例对SaaS的影响",
                    "create_time": "2018-07-29",
                    "times": 110,   // 时长（秒）
                    "listened": 0, // 已听百分比
                },
                {
                    "id": 105,
                    "title": "你需要了解的11个实用的JavaScript库",
                    "create_time": "2018-07-29",
                    "times": 213,   // 时长（秒）
                    "listened": 19, // 已听百分比
                },
                {
                    "id": 106,
                    "title": "Azure虚拟WAN和Azure防火墙公开预览",
                    "create_time": "2018-07-29",
                    "times": 183,   // 时长（秒）
                    "listened": 0, // 已听百分比
                },
                {
                    "id": 107,
                    "title": "微软提供Windows 10 IoT Core Services",
                    "create_time": "2018-07-29",
                    "times": 197,   // 时长（秒）
                    "listened": 0, // 已听百分比
                },
                {
                    "id": 108,
                    "title": "GDPR条例对SaaS的影响",
                    "create_time": "2018-07-29",
                    "times": 110,   // 时长（秒）
                    "listened": 0, // 已听百分比
                }
            ]
        }    
    },
    '/discover/detail' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            "author_header" : "https://static001.geekbang.org/resource/image/c4/9c/c4289562a7f9fe318831393b2b2c309c.jpg",
            "author_intro" : "京东成都研究院技术专家",
            "author_name" : "胡峰",
            "column_begin_time" : 1532620800,
            "column_bgcolor" : "#c2c7c3",
            "column_cover" : "https://static001.geekbang.org/resource/image/4e/90/4ebac909a273eecd46f33edd88108a90.jpg",
            "column_cover_inner" : "https://static001.geekbang.org/resource/image/4f/aa/4fcf7ff0762edfdb46adbf47800297aa.jpg",
            "column_cover_wxlite" : "https://static001.geekbang.org/resource/image/3e/e2/3e3fc6ba9c5a105c76822b09fb24cfe2.jpg",
            "column_ctime" : 1532673079,
            "column_end_time" : 1545580800,
            "column_intro" : '<p>如何才能持续成长，是每一个程序员都绕不开的话题。</p>↵<p>入行之初，你可能会困惑于技能选择的方向和掌握的方法；编程前期，你可能会苦恼于Bug的调试与修复；技术水平达到瓶颈期，你可能又急于寻求突破和上升。除此之外，职业倦怠了，如何去面对？技术停滞了，如何去解决？人到中年，是选择工作还是选择生活？换工作？换城市？换方向？如是种种，磨蚀着曾经的乐观和现在的不甘，是放任自流还是逆流而上？</p>↵<p>但，还好“永远有走在你前面的人”，别人留下的 “脚印” 和路径可以给予正在成长阶段的你很多启发与指引。</p>↵<p>在这个专栏里，胡峰将结合十余年从业经验，设身处地去思索、去剖析、去拆解程序员不同阶段可能面临的实际困惑和问题，并给出可供参考的答案。本专栏是胡峰长时间的资源积累，字字珠玑，有着清晰的路径和完整的体系，去启发、去指引，由“知” 改变 “行”，让你的程序之路走得更稳、更远。不仅传授知识，而且授人以渔——提供为程序员量身定做的进阶路径。</p>↵<h2>作者简介</h2>↵<p>胡峰，京东成都研究院技术专家，TGO会员。目前承担京东咚咚产品线技术架构工作，专注于 Java 后端分布式系统技术架构相关领域。</p>↵<p>工作至今十多年，毕业后先后进入金融、电信行业写程序，成为了一名程序员。七年前加入京东，跟随互联网电商行业的高速发展，快速成长，也一路从程序员成长为了架构师。除了技术工作，近年他也开始领导研究院技术委员会，负责人才识别，晋升选拔，关注人才梯队层次建设和个人成长发展。</p>↵<h2>专栏模块</h2>↵<p>本专栏共62期，分为六大模块。</p>↵<ol>↵<li>征途：启程之初。入行之初，需要具备哪些最基础的技能？会面临怎样的困惑？最初的感受如何？找到走上程序之路的初心，成就更好的自己。</li>↵<li>修炼：程序之术。程序之路前期，多会是以编程（炼术）为主：程序系统的架构与设计，功能模块的开发与编码，缺陷 Bug 的调试与修复。</li>↵<li>修行：由术入道。除了编程写代码之外，还有一些其他维度的修行道路：计划的体系，精进的思维，习惯的养成，展现的形式，上升的阶梯，工程的方法。</li>↵<li>徘徊：道中彷徨。行道中途，会面临成长平台期的困惑，该如何选择？</li>↵<li>寻路：路在何方。前路多分岔，关于方向、角色、自省与定位，该如何决断？</li>↵<li>蜕变：破茧成蝶。成长之路不连续，有阻挡你蜕变的边界与断层，该如何跨越？</li>↵</ol>↵<h2>专栏目录</h2>↵<p><img src="https://static001.geekbang.org/resource/image/6a/cf/6ad07ebe5c023b86517653f7d056e1cf.jpg" alt="" /></p>↵<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><h2>适宜人群</h2>↵<p>也许你正处于下面的某个阶段：</p>↵<ul>↵<li>入行之初，困惑于技能选择的方向和掌握的方法？</li>↵<li>编程前期，苦恼于只能写出Bug不断的挖坑代码？</li>↵<li>快速成长期，纠结于无法建立出自己的精进体系？</li>↵<li>进阶瓶颈期，迫切于做出改变、寻求突破和上升？</li>↵<li>面对成长断层，迷茫于停滞不前、无法跃迁成长？</li>↵</ul>↵<p>不管你处于何种阶段，也不管你是学生、初级开发人员、技术主管，或者是架构师，甚至是对程序相关领域感兴趣的人士，都可以利用专栏中所提及的框架体系和思维方法去践行，有所得、有所获。</p>↵<h2 class="js-audit">订阅须知</h2>↵<ol class="js-audit">↵<li>本专栏为订阅专栏，更新时间为2018年8月3日至2018年12月24日。订阅成功后，即可通过“极客时间”App端、小程序端、<a href="https://time.geekbang.org/columns">Web端</a> 永久阅读。</li>↵<li>  本专栏更新时间为每周一、三、五，形式为图文 + 音频，共计 62 期。</li>↵<li>本专栏为虚拟商品，一经订阅，概不退款。</li>↵<li>在专栏阅读过程中，如有任何问题，请邮件联系service@geekbang.org。</li>↵</ol>↵',
            "column_poster" : "https://static001.geekbang.org/resource/image/cf/f6/cfb66959bb0739b53d5ab32869d18af6.jpg",
            "column_poster_wxlite" : "https://static001.geekbang.org/resource/image/b0/e6/b0207623c798ada63524f38fbec85be6.jpg",
            "column_price" : 6800,
            "column_price_market" : 9900,
            "column_share_title" : "胡峰 · 程序员进阶攻略",
            "column_sharesale" : 1,
            "column_sharesale_data" : '{"promo_pic_url":"https:\/\/static001.geekbang.org\/resource\/image\/60\/e0\/60bb75bca78bfa0a5acbe9a52d87c6e0.jpg","promo_pic_color":"595656","original_pic_url":"https:\/\/static001.geekbang.org\/resource\/image\/50\/13\/50c80af032b7fec654cd3a5663924c13.jpg","original_pic_color":"FFFFFF","share_sale_price":2400,"share_sale_guest_price":0}',
            "column_sku" : 100012101,
            "column_subtitle" : "每个程序员都应该知道的成长法则",
            "column_title" : "程序员进阶攻略",
            "column_type" : 1,
            "column_unit" : "62期",
            "column_utime" : 1533030347,
            "column_video_cover" : "",
            "column_video_media" : "",
            "column_wxlite_code" : "https://static001.geekbang.org/product/wxa/trans-wxa_sku/100012101.png",
            "had_sub" : false,
            "id" : 111,
            "is_experience" : false,
            "is_include_audio" : true,
            "is_include_preview" : true,
            "is_onborad" : true,
            "is_preorder" : true,
            "is_shareget" : false,
            "is_sharesale" : true,
            "sub_count" : 2174,
            "update_frequency" : "8月3日正式更新"
        }
    },
    '/discover/latest' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            list : {
                article_could_preview : true,
                article_cover : "https://static001.geekbang.org/resource/image/c6/4c/c665f31c352cdfd55825f9e23c77024c.jpg",
                article_ctime:1532939400,
                article_subtitle:"无",
                article_summary:"程序员的成长道路没那么平坦和舒适，会面临各种问题与困惑，一路上充满了崎岖、障碍和迷雾。所以，这个专栏会围绕程序这个行业、程序员这个职业，画出一条清晰的成长路径。",
                article_title:"开篇词 | 程序行知：走在同样的路上，遇见自己的风景",
                chapter_id:"0",
                had_viewed:false,
                id:12148,
                score : 1532939400
            }
        }
    }
}

export default Mockdata;

