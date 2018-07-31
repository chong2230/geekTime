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
                            "icon": "home/1.jpg",
                            "cost": 9,     // 花费
                            "period": 6,   // 多少文章
                            "times": 0,    // 字数
                        },
                        {
                            "id": 502,
                            "name": "深入浅出gRPC",
                            "description": "详解gRPC运行机制与原理",
                            "icon": "home/2.jpg",
                            "cost": 9,     // 花费
                            "period": 6,   // 多少文章
                            "times": 45000,    // 字数
                            audio: ""
                        },
                        {
                            "id": 503,
                            "name": "性能优化面面观",
                            "description": "来自业界顶尖的最佳实践",
                            "icon": "home/3.jpg",
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
    // 新闻
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
    }
}

export default Mockdata;

