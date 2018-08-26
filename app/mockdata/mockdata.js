// banner轮播图
const Mockdata = {
    '/discover/slide' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": [
            {
                "id": 1,
                "type": 1,
                "description": "\u8bad\u7ec31\u63cf\u8ff0",
                "icon": "banner/1.jpg",
                "name": "\u8bad\u7ec311"
            },
            {
                "id": 5,
                "type": 2,
                "description": "\u8bad\u7ec35\u63cf\u8ff0",
                "icon": "banner/5.jpg",
                "name": "\u8bad\u7ec35"
            },
            {
                "id": 2,
                "type": 3,
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
        "data": [
                {
                    title: "极客新闻",
                    type: 1,
                    contents : [
                        {
                            id: 101,
                            "title": "苏宁易购乔新亮：最有效的研发管理经验",
                            audio_url: "https://languagezenstorage.blob.core.windows.net/media0/xgcUXjHhP8.mp3"
                        },
                        {
                            id: 102, 
                            "title": "HAP新方法：容器比虚拟机更安全",
                            audio_url: "https://languagezenstorage.blob.core.windows.net/media0/xgcUXjHhP8.mp3"
                        },
                        {
                            id: 103, 
                            "title": "敏捷测试需要注意的五种危险行为",
                            audio_url: "https://languagezenstorage.blob.core.windows.net/media0/xgcUXjHhP8.mp3"
                        },
                        {
                            id: 104, 
                            "title": "赛灵思收购深鉴科技，AI芯片并购加速",
                            audio_url: "https://languagezenstorage.blob.core.windows.net/media0/xgcUXjHhP8.mp3"
                        }                    
                    ],
                },
                {
                    title: "精品专栏",
                    type: 2,
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
                    type: 3,
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
                    type: 4,
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
                    type: 5,
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
                    type: 6,
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
                    type: 7,
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

    // 文章列表 params: {cid}
    '/subject/articles' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            "list": [
            {
                "article_subtitle": "无",
                "article_ctime": 1534348800,
                "id": 13387,
                "article_cover": "https://static001.geekbang.org/resource/image/c9/65/c9d5c20e2acd5c065dd729e4c262ac65.jpg",
                "article_title": "01  | 多年前的那些工程师都去哪了？",
                "article_summary": "也许是现在，也许是未来，总有那么一天，你会操心自己的职业发展。当你抬起头来，眺望自己的职业道路的时候，也许这篇文章可以给你一些指引。",
                "had_viewed": true,
                "article_could_preview": true,
                "chapter_id": "0",
                "score": 1534348800
            },
            {
                "article_subtitle": "无",
                "article_ctime": 1534158300,
                "id": 13156,
                "article_cover": "https://static001.geekbang.org/resource/image/01/78/015e151c7ff8bb9eb9d36d9f3950c878.jpg",
                "article_title": "开篇词 | 你为什么需要学管理？",
                "article_summary": "与其说管理是一个职位，倒不如说管理是一组能力，是每个人职业发展中都绕不开的话题。本专栏会为你阐释管理的方方面面，从而让你心无旁骛地走上管理之路。",
                "had_viewed": false,
                "article_could_preview": true,
                "chapter_id": "0",
                "score": 1534158300
            }
        ]
        }
    },

    // 文章详情 params: {id}
    '/subject/article' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            "article_subtitle": "无",
            "column_had_sub": false,
            "audio_title": "01多年前的那些工程师改（没问题，已压缩）",
            "view_count": 2511,
            "video_cover": "",
            "audio_download_url": "https://res001.geekbang.org/resource/audio/6e/23/6e52d40304f579263f8aa7dd17325623.mp3",
            "audio_time": "00:10:24",
            "video_media": "",
            "article_content": "<p>也许是现在，也许是未来，总有那么一天，你会操心自己的职业发展。当你抬起头来，展望自己的职业道路的时候，也许这篇文章可以给你一些指引。</p>\n<p>实际上，我一直希望能够帮技术人整理一个职业发展路径的图谱，让技术人在碰到职业选择困惑的时候，可以看看别人走过的路。而上周的“老知道人”聚会，刚好给了我一个很好的机会，因为这是一个跨越了10年的比较完整的“样本集”。</p>\n<p>“老知道人”，是对百度知道早期团队成员的一个称谓，虽然大部分都已不在知道团队，但这并不影响大家对于这个产品以及同事的深厚感情。</p>\n<p>百度知道于2005年11月正式上线。我正是怀着对这个产品的无比喜爱，以及对百度“让人们平等便捷地获取信息，找到所求”使命的无比认同，于2005年12月加入知道团队，成为一名后端工程师，因此我对2005年～2008年百度知道的工程师们都非常熟悉。</p>\n<p>刚好就这次聚会，我整理了一下当年这批工程师的职业发展状况，如今大体分布在四个大类的八个方向。</p>\n<p>这四个大类分别是<strong>技术类、管理类、创业类和顾问类</strong>，接下来我逐个来详细说明。</p>\n<h2>一、技术类</h2>\n<p><strong>技术类</strong>主要包含两个大方向。</p>\n<p><strong>一个方向侧重于“广”</strong>，着眼技术的整体性、架构性和业务解决方案，我们姑且称为“<strong>架构师</strong>”或“首席架构师”。 他们往往是一个产品或服务的技术方案的“总设计师”，他们常见的作品包括社区类服务架构、云服务架构、搜索架构、电商服务架构、O2O服务架构、数据平台架构等等，每一个产品背后都有一位或几位技术架构师。</p><!-- [[[read_end]]] -->\n<p><strong>另外一个方向侧重于“专”</strong>，着眼于某个专项技术的深度、专业度和精细度，我们姑且称为“某领域技术专家”或“<strong>科学家</strong>”，比如图像技术、语音技术、机器学习、推荐算法等等。他们往往是一个专业领域里的“武林高手”，他们的作品被广泛应用在每一个专业领域。</p>\n<h2>二、管理类</h2>\n<p><strong>管理类</strong>也有两个不同的方向，即<strong>技术管理者</strong>和<strong>职业经理人</strong>。你可以认为职业经理人是技术管理者的更成熟阶段，但我更倾向于认为这是两个不同的选择。</p>\n<p><strong>技术管理者</strong>，这个方向很自然，就是从工程师到技术团队的一线经理，再慢慢做到部门经理等二线经理，然后是某个大技术体系或整个技术部的技术副总裁，如果还包括产品、设计等所有“产品交付”类团队，就成为了一个常规意义上的CTO，但总体上，都是技术管理者。</p>\n<p>另外一个方向是<strong>职业经理人</strong>。之所以叫职业经理人，是他不限于管理技术类团队，往往负责的是一个完整的业务，很像是这个业务的CEO，有些公司也会叫GM（group manager）。这个角色并不限定在具体一个业务，还可以根据公司需要去负责一个新业务，迁移性比较强，比较接近我们常说的“职业经理人”。这样的管理者会关心一个业务经营的方方面面，但本质还是公司高管，在公司整体框架下工作。</p>\n<h2>三、创业类</h2>\n<p><strong>创业类</strong>对于技术人来说，也有两个方向。</p>\n<p>一个方向是作为<strong>创始人</strong>牵头创业，做领头羊。创业成功后就成为我们所说的“企业家”，像李彦宏、马化腾、周鸿祎等，这都是技术人牵头创业的典范。当前人工智能、大数据、区块链、云服务这些技术方向的大热，也催生出很多技术出身的CEO，在自己的技术领域里开疆拓土，挥斥方遒，神策数据的CEO桑文锋就是我们“老知道人”在这个方向上的佼佼者。</p>\n<p>另一个方向是作为<strong>技术合伙人</strong>或<strong>技术高管</strong>全盘负责公司的技术，以技术管理为公司“安邦定国”。几乎每一个成功的创业公司，都有这么一个强有力的角色，比如互联网第二梯队的TMD中， 头条（T）的杨震原、美团（M）的穆荣均、滴滴（D）的张博，都是这个方向上的优秀代表。</p>\n<p>而且可以小小自豪一下的是，他们都是曾经的老百度人，其中荣均还是百度知道的元老之一。显然，这个方向上的成功案例不仅于此，大部分独角兽的公司背后都有一个强有力的技术高管。</p>\n<p>你可能会问，这个技术合伙人的方向，和技术管理者的方向有什么区别吗？看上去都是“技术高管”。但区别其实还是很大的，主要在于：你是从公司早期就共同创业做到高管的，还是你只是在一家比较成熟的公司做高管的？这是两条很不同的路。</p>\n<p>其中，前者的核心是共同创业，这里我列举的都是创业比较成功的案例，是为了方便你理解和认知，而现实中大部分的创业都是尚未成功的，所以大部分技术合伙人面临的是创业团队的压力和不确定性，他们在大部分时间内都不是技术高管，而是共同创业者；但后者，较成熟公司的技术高管则不同，他们大部分时间都是在做技术管理，工作方式、方法和创业公司差别是很大的，所以这其实是非常不同的两个职业方向。</p>\n<p>你可能还会问，为什么要把创业者和技术合伙人区分为两个方向呢？他们不都怀着创业的心态吗？我想说，我分开来讲的原因是这两个角色对人的要求的差异是相当大的，因为他们的职责差异很大，所以他们的“技能清单”差异也很大，因此我将其分为两个方向。</p>\n<h2>四、顾问类</h2>\n<p><strong>顾问类</strong>的两个方向离得有点远。</p>\n<p>一个方向是投资顾问，也就是做<strong>投资人</strong>，有做投前的，也有做投后的，基于对一个创业团队和项目的完整判断，从外围以资本运作和投后服务来支持创业公司发展。他们在做投资人之前，往往都有着相当丰富的企业经营管理经验、宽广的视野和敏锐的洞察力。比如百度风投的齐玉杰、清流资本的王梦秋和陈韫敏，之前都是百度的高管，都曾经直接或间接管理过百度知道团队，他们也都曾经是百度的工程师，典型的技术人。</p>\n<p>另外一个方向是<strong>管理顾问</strong>，也就是提供培训、咨询服务，偏人力发展和团队建设。这个方向是通过支持管理者和HR来支持公司的发展，往往以多年的管理经验、管理理论、教练技术和培训经验为依托。目前，这个方向的人是最少的，好像只有我在做。而且，1年前，我还是创业公司的技术高管，而5年前，我是百度的一名部门经理。</p>\n<p>上面，就是10年前的“老知道人”，在10年后的职业发展情况。你可能会问，除了上述8个方向，还有没有其他的发展路径呢？答案是有的，比如技术网红、技术媒体人，以及各种断崖式转行：专职理财、继承家业、全职奶爸奶妈、周游世界等等，这些情况太偶然，很难借鉴，所以不在我们的探讨范围内。</p>\n<p>你是不是会好奇，这20个人的分布情况会是什么样的呢？下面，我们来看看各个方向的占比：</p>\n<p><img src=\"https://static001.geekbang.org/resource/image/06/0b/067d21eb45780d8ae5e69cfea93c2a0b.jpg\" alt=\"\" /></p>\n<center><span class=\"reference\">“老知道人”发展方向分布</span></center>\n<p>综合这些数据我们不难发现如下三个特点：</p>\n<ol>\n<li>整体分布情况比较分散，大家10年后都有了自己的选择。</li>\n<li>技术管理者和创业公司的技术合伙人相对集中，两个方向加起来超过一半。</li>\n<li>10年后仍坚持做技术的比例比较低，在20%左右。</li>\n</ol>\n<p>当然，这个“样本集”用于说明整个互联网领域技术人的发展情况，显然是不能完全代表的。但是这也可以在一定程度上给你一些感性认知，供你参考。</p>\n<p>你可能会问，不同的发展方向，需要做哪些方面的准备和积累呢？对此，我先展示一下各个发展方向上的“技能清单”，这个技能清单都是“通常来说”需要具备的，并不能代表所有情况：</p>\n<p><img src=\"https://static001.geekbang.org/resource/image/88/5a/88094939f364186a2147c80709085a5a.jpg\" alt=\"\" /></p>\n<center><span class=\"reference\">八大方向技能清单</span></center>\n<p>上面这些“技能清单”，用的都是很大的词，听起来可能有些笼统，我理一下大体的逻辑。</p>\n<p>开始，你作为工程师，需要有很好的技术实操能力，这是作为工程师的职业素质。慢慢地，随着你能做的事情越来越多、越来越大，你会提升整体架构能力，成为一名架构师。而如果你对某个专业领域的技术越来越专精，你会成为一名技术专家或科学家。</p>\n<p>当然，你也可以不断拓展自己项目管理能力和带团队的能力，这样你会成为越来越高级的技术管理者，也可以去创业公司做技术合伙人。当你越来越关注行业发展、商业逻辑、公司经营，就慢慢拥有了职业经理人和公司创始人的视角；当越来越关注资本运作和资本产生的价值，就会从投资人的角度去看待各行各业和整个社会。</p>\n<p>这里我是按照视角的迁移和能力的扩展来阐述整个过程的，但是作为每个人的职业发展，却并不需要完全沿着这个过程，也并没有越后者越高级的说法，最终你会停留在自己喜欢和认同的角色上，那个就是最好的。</p>\n<p>但是，无论你走哪条路上，你都会发现有些能力是共通的，比如规划、带人、沟通、执行等管理能力覆盖了全部8个方向。</p>\n<p>因此，这里你还需要区分“技术管理能力”和“技术管理岗位”这两个概念。你可能出于兴趣、机遇等各种原因不会去选择做“技术管理岗位”，但是，“管理”作为一项综合能力，是你未来的职业发展所不可回避的，至少你都需要和管理者合作。只不过因为你的角色不同，需要掌握的程度不同。</p>\n<p>总之，对于技术人来说，无论你是否做技术管理岗，你所有的职业发展，都会围绕着<strong>技术</strong>和<strong>管理</strong>这两条腿在走路，一条腿是走不远的。</p>\n<p>所以，你现在知道多年前的那些工程师，是如何迈着两条腿走向远方的吗？</p>\n<p><img src=\"https://static001.geekbang.org/resource/image/0d/1e/0d14064fe5cb7e265a8c05d725922c1e.jpg\" alt=\"\" /></p>\n",
            "like_count": 40,
            "video_height": 0,
            "article_title": "01  | 多年前的那些工程师都去哪了？",
            "audio_size": 5004980,
            "article_sharetitle": "多年前的那些工程师都去哪了？",
            "author_name": "刘建国",
            "article_ctime": 1534348800,
            "id": 13387,
            "article_cover": "https://static001.geekbang.org/resource/image/c9/65/c9d5c20e2acd5c065dd729e4c262ac65.jpg",
            "audio_url": "https://res001.geekbang.org/media/audio/6e/23/6e52d40304f579263f8aa7dd17325623/ld/ld.m3u8",
            "video_size": 0,
            "chapter_id": "0",
            "column_is_experience": false,
            "had_liked": false,
            "audio_time_arr": {
                "m": "10",
                "s": "24",
                "h": "00"
            },
            "had_viewed": false,
            "column_bgcolor": "#bc9f86",
            "video_time": "",
            "column_cover": "https://static001.geekbang.org/resource/image/25/9d/25ec2a088e026ed72d464e8e0ccd839d.jpg",
            "audio_md5": "6e52d40304f579263f8aa7dd17325623",
            "article_poster_wxlite": "https://static001.geekbang.org/render/screen/8d/79/8d720d6313054c9694fd24a8186be379.jpeg",
            "article_cover_hidden": false,
            "cid": 113,
            "article_could_preview": true,
            "article_summary": "也许是现在，也许是未来，总有那么一天，你会操心自己的职业发展。当你抬起头来，眺望自己的职业道路的时候，也许这篇文章可以给你一些指引。",
            "video_width": 0,
            "audio_dubber": "刘飞",
            "column_id": 113
        }
    },

    // 评论 params: { aid }
    '/comments' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            "list": [
                {
                    "user_header": "https://static001.geekbang.org/account/avatar/00/0f/ee/67/c146c144.jpg",
                    "user_name": "W_T",
                    "id": 20335,
                    "like_count": 8,
                    "comment_is_top": false,
                    "had_liked": false,
                    "comment_content": "看到技能清单的时候突然有两个感想。<br>1. 清单里面都是发展得比较好的人，那些发展得不好的人，他们都去做什么了？占总人数的比例有多大呢？从他们身上我们能吸取什么教训呢？<br>2. 不管往哪个方向发展都要培养沟通能力，哪怕最后的目标是成为一个架构师...... 觉得往纯技术方向发展就不用培养沟通能力的童靴，真的要小心了。",
                    "comment_ctime": 1534382023,
                    "replies": [
                        {
                            "comment_id": 20335,
                            "content": "什么叫不好呢：）除了各种偶然情况，无论职位高低，回报多少，大约都在这八个方向上了",
                            "utype": 1,
                            "id": "7156",
                            "user_name": "作者回复",
                            "user_name_real": "刘建国",
                            "ctime": 1534420029,
                            "uid": "1085439"
                        }
                    ],
                    "score": "35894120391"
                },
                {
                    "user_header": "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epXRVmFJ6N5aaTQeNG773AFyiamAUQLDXxqxiaurQt4zOK5tu2eOKtaEcYmrTtYKEelJokHVozOlzaQ/132",
                    "user_name": "loveluckystar",
                    "id": 20336,
                    "like_count": 3,
                    "comment_is_top": false,
                    "had_liked": false,
                    "comment_content": "能力不够不可怕，意识到了就可以补。最可怕的是没有想清楚未来的方向，还刻意回避这个问题。",
                    "comment_ctime": 1534382650,
                    "replies": [
                        {
                            "comment_id": 20336,
                            "content": "厉害👍",
                            "utype": 1,
                            "id": "7157",
                            "user_name": "作者回复",
                            "user_name_real": "刘建国",
                            "ctime": 1534420093,
                            "uid": "1085439"
                        }
                    ],
                    "score": "14419284538"
                }
            ],
            "page": {
                "more": false,
                "count": 12
            }
        }
    },

    // 购买 params: {cid}
    '/subject/buy' : {
        "msg": "SUCCESS",
        "code": 0
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
    // 精品专栏详情
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
            // "column_intro" : '<p>如何才能持续成长，是每一个程序员都绕不开的话题。</p>↵<p>入行之初，你可能会困惑于技能选择的方向和掌握的方法；编程前期，你可能会苦恼于Bug的调试与修复；技术水平达到瓶颈期，你可能又急于寻求突破和上升。除此之外，职业倦怠了，如何去面对？技术停滞了，如何去解决？人到中年，是选择工作还是选择生活？换工作？换城市？换方向？如是种种，磨蚀着曾经的乐观和现在的不甘，是放任自流还是逆流而上？</p>↵<p>但，还好“永远有走在你前面的人”，别人留下的 “脚印” 和路径可以给予正在成长阶段的你很多启发与指引。</p>↵<p>在这个专栏里，胡峰将结合十余年从业经验，设身处地去思索、去剖析、去拆解程序员不同阶段可能面临的实际困惑和问题，并给出可供参考的答案。本专栏是胡峰长时间的资源积累，字字珠玑，有着清晰的路径和完整的体系，去启发、去指引，由“知” 改变 “行”，让你的程序之路走得更稳、更远。不仅传授知识，而且授人以渔——提供为程序员量身定做的进阶路径。</p>↵<h2>作者简介</h2>↵<p>胡峰，京东成都研究院技术专家，TGO会员。目前承担京东咚咚产品线技术架构工作，专注于 Java 后端分布式系统技术架构相关领域。</p>↵<p>工作至今十多年，毕业后先后进入金融、电信行业写程序，成为了一名程序员。七年前加入京东，跟随互联网电商行业的高速发展，快速成长，也一路从程序员成长为了架构师。除了技术工作，近年他也开始领导研究院技术委员会，负责人才识别，晋升选拔，关注人才梯队层次建设和个人成长发展。</p>↵<h2>专栏模块</h2>↵<p>本专栏共62期，分为六大模块。</p>↵<ol>↵<li>征途：启程之初。入行之初，需要具备哪些最基础的技能？会面临怎样的困惑？最初的感受如何？找到走上程序之路的初心，成就更好的自己。</li>↵<li>修炼：程序之术。程序之路前期，多会是以编程（炼术）为主：程序系统的架构与设计，功能模块的开发与编码，缺陷 Bug 的调试与修复。</li>↵<li>修行：由术入道。除了编程写代码之外，还有一些其他维度的修行道路：计划的体系，精进的思维，习惯的养成，展现的形式，上升的阶梯，工程的方法。</li>↵<li>徘徊：道中彷徨。行道中途，会面临成长平台期的困惑，该如何选择？</li>↵<li>寻路：路在何方。前路多分岔，关于方向、角色、自省与定位，该如何决断？</li>↵<li>蜕变：破茧成蝶。成长之路不连续，有阻挡你蜕变的边界与断层，该如何跨越？</li>↵</ol>↵<h2>专栏目录</h2>↵<p><img src="https://static001.geekbang.org/resource/image/6a/cf/6ad07ebe5c023b86517653f7d056e1cf.jpg" alt="" /></p>↵<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><h2>适宜人群</h2>↵<p>也许你正处于下面的某个阶段：</p>↵<ul>↵<li>入行之初，困惑于技能选择的方向和掌握的方法？</li>↵<li>编程前期，苦恼于只能写出Bug不断的挖坑代码？</li>↵<li>快速成长期，纠结于无法建立出自己的精进体系？</li>↵<li>进阶瓶颈期，迫切于做出改变、寻求突破和上升？</li>↵<li>面对成长断层，迷茫于停滞不前、无法跃迁成长？</li>↵</ul>↵<p>不管你处于何种阶段，也不管你是学生、初级开发人员、技术主管，或者是架构师，甚至是对程序相关领域感兴趣的人士，都可以利用专栏中所提及的框架体系和思维方法去践行，有所得、有所获。</p>↵<h2 class="js-audit">订阅须知</h2>↵<ol class="js-audit">↵<li>本专栏为订阅专栏，更新时间为2018年8月3日至2018年12月24日。订阅成功后，即可通过“极客时间”App端、小程序端、<a href="https://time.geekbang.org/columns">Web端</a> 永久阅读。</li>↵<li>  本专栏更新时间为每周一、三、五，形式为图文 + 音频，共计 62 期。</li>↵<li>本专栏为虚拟商品，一经订阅，概不退款。</li>↵<li>在专栏阅读过程中，如有任何问题，请邮件联系service@geekbang.org。</li>↵</ol>↵',
            "column_intro" : '<p>如何才能持续成长，是每一个程序员都绕不开的话题。</p>↵<p>入行之初，你可能会困惑于技能选择的方向和掌握的方法；编程前期，你可能会苦恼于Bug的调试与修复；技术水平达到瓶颈期，你可能又急于寻求突破和上升。除此之外，职业倦怠了，如何去面对？技术停滞了，如何去解决？人到中年，是选择工作还是选择生活？换工作？换城市？换方向？如是种种，磨蚀着曾经的乐观和现在的不甘，是放任自流还是逆流而上？</p>↵<p>但，还好“永远有走在你前面的人”，别人留下的 “脚印” 和路径可以给予正在成长阶段的你很多启发与指引。</p>↵<p>在这个专栏里，胡峰将结合十余年从业经验，设身处地去思索、去剖析、去拆解程序员不同阶段可能面临的实际困惑和问题，并给出可供参考的答案。本专栏是胡峰长时间的资源积累，字字珠玑，有着清晰的路径和完整的体系，去启发、去指引，由“知” 改变 “行”，让你的程序之路走得更稳、更远。不仅传授知识，而且授人以渔——提供为程序员量身定做的进阶路径。</p>↵<h2>作者简介</h2>↵<p>胡峰，京东成都研究院技术专家，TGO会员。目前承担京东咚咚产品线技术架构工作，专注于 Java 后端分布式系统技术架构相关领域。</p>↵<p>工作至今十多年，毕业后先后进入金融、电信行业写程序，成为了一名程序员。七年前加入京东，跟随互联网电商行业的高速发展，快速成长，也一路从程序员成长为了架构师。除了技术工作，近年他也开始领导研究院技术委员会，负责人才识别，晋升选拔，关注人才梯队层次建设和个人成长发展。</p>',
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
            // "is_bought" : true,
            "sub_count" : 2174,
            "update_frequency" : "8月3日正式更新"
        }
    },
    // 视频课程详情
    '/discover/detail' : {
        "msg": "SUCCESS",
        "code": 0,
        "data":{
            "column_cover_wxlite":"https://static001.geekbang.org/resource/image/4c/f7/4ccbfebe1000add7619fda8b605b21f7.jpg",
            "column_end_time":1846166400,
            "is_include_preview":true,
            "column_price_market":12900,
            "author_header":"https://static001.geekbang.org/resource/image/43/73/43a0bf741f96a10e4d9c788726bcea73.jpg",
            "column_title":"快速上手Kotlin开发",
            "column_type":3,
            "column_unit":"50讲",
            // "column_video_media":'{"hd":{"size":27481516,"url":"https:\/\/res001.geekbang.org\/media\/video\/c2\/7c\/c2eb9c3f1168a0be65a61b6f45e46f7c\/hd\/hd.m3u8"},"sd":{"size":12915840,"url":"https:\/\/res001.geekbang.org\/media\/video\/c2\/7c\/c2eb9c3f1168a0be65a61b6f45e46f7c\/sd\/sd.m3u8"}}',
            "column_video_media": "http://39.106.159.81/video/course/1.mp4",
            "column_cover":"https://static001.geekbang.org/resource/image/28/aa/281d8cd886ab290ac623e92939f0a3aa.jpg",
            "is_sharesale":true,
            "is_shareget":false,
            "column_begin_time":1530547200,
            "is_onborad":true,
            "column_sku":100009801,
            "column_ctime":1530587589,
            "update_frequency":"50课时·约450分钟",
            "column_share_title":"张涛 · 快速上手Kotlin开发",
            "id":105,
            "groupbuy_list":[
                {
                    "want_ucount":1,
                    "host_nickname":"aline",
                    "code":"mbewxk3F8v",
                    "host_avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKkkZBpiaOo4dDyiaGdyWg2yXia5PTDbFYtNaXbd49c0rNnhnrRibI4nmtor1DF2vZclEThGib9R7QRoLQ/132",
                    "left_seconds":23803
                }
            ],
            "column_bgcolor":"#FFFFFF",
            "groupbuy":{
                "could_groupbuy":true,
                "price":9900,
                "success_ucount":3,
                "join_code":"",
                "had_join":false
            },
            "column_poster_wxlite":"https://static001.geekbang.org/resource/image/80/4e/808a1cdb7abff2240c6f425facbd194e.jpg",
            "column_sharesale_data":'{"promo_pic_url":"https:\/\/static001.geekbang.org\/resource\/image\/a2\/a3\/a20a5a3693e286118068560c3c3faaa3.jpg","promo_pic_color":"FFFFFF","original_pic_url":"https:\/\/static001.geekbang.org\/resource\/image\/5d\/29\/5dcf5bd3b683624e8302bf6c7a2eac29.jpg","original_pic_color":"FFFFFF","share_sale_price":1600,"share_sale_guest_price":800}',
            "is_experience":false,
            "had_sub":false,
            "is_preorder":false,
            "is_include_audio":false,
            "author_intro":"“开源实验室”博主，资深Android开发工程师。",
            "column_cover_inner":"",
            "column_poster":"",
            "column_intro":'<h2>课程背景</h2><p>在 Google I/O 2017 大会上，Google 宣布 Kotlin 成为 Android 开发的官方编程语言。</p><p>仅仅一年之后，就已经有 35% 的专业 Android 开发者在使用 Kotlin，其中 95% 的开发者都对 Kotlin 非常满意。</p><p>Kotlin 不仅仅可以用于 Android 应用开发，它简洁和表现力强地代码，与 Java 完全兼容和平滑的学习曲线，足以让程序员选择 Kotlin 在服务器端编程。同时，Kotlin 还可以用来开发前端 React 应用，真的是多个平台通吃。</p><p>在 Google 官方加持下，随着 Kotlin 跨平台等等特性的推出，可以预见未来 Kotlin 的使用者将越来越多。</p><p>所以，无论是想提高自己的技术水平，还是想获得更好的职业发展，学习 Kotlin 都是非常有必要的。</p><h2>课程特点</h2><p>本课程分为三部分。</p><p>第一部分会帮助你快速熟悉 Kotlin 的特有语法特性，以及在与 Java 项目产生冲突时如何解决。</p><p>第二部分将带你深入的理解 Kotlin 语言的高级特性以及 Kotlin 特有语法背后的运行原理，同时掌握 Kotlin 协程库和 Google 推出的 KTX 扩展库的使用与内部实现原理。</p><p>第三部分将为你讲解 Kotlin 作为跨平台语言的特性，并介绍将 Java 项目迁移至 Kotlin 时需要注意的地方，更深入地理解 Kotlin 的优势和劣势，灵活利用 Kotlin 的扩展库以及跨平台特性，帮助团队更高效地进行实际项目的开发。</p><h2>作者简介</h2><p>张涛，“开源实验室”博主，资深 Android 工程师，Kotlin 技术推广者。曾经主导过百万级用户的 App 实现开发语言向 Kotlin 的迁移和过渡，具有丰富的 Kotlin 开发经验。</p><p>2012 年开始从事 Android 开发，带过团队、做过架构、写过应用、做过开源社区。三年前开始使用 Kotlin 语言，曾参加GMTC、QCon、Droidcon 等大会并做 Kotlin 相关技术分享。</p><h2>课程收获</h2><ol><li>掌握 Kotlin 的语法和高级特性；</li><li>用 Kotlin 改造和迁移现有工程；</li><li>Kotlin 在团队协作中的注意事项；</li><li>深入学习 Kotlin 跨平台开发实战。</li></ol><h2>适宜人群</h2><ol><li>掌握 Java 编程技能的同学；</li><li>有一定经验的 Android 移动应用开发工程师。</li></ol><h2>课程大纲</h2><p><img src="https://static001.geekbang.org/resource/image/a1/d8/a17e90e5eec05569d16dfefb57b8a6d8.jpg" alt="" /></p><h2>如何在电脑端观看视频</h2><ol><li>用浏览器访问 <a href="https://time.geekbang.org">https://time.geekbang.org</a> ，登录极客时间账号；</li><li>然后访问 <a href="https://time.geekbang.org/paid-content">https://time.geekbang.org/paid-content</a> ，选择相应的内容。</li></ol><h2 class="js-audit">订阅须知</h2><ol class="js-audit"><li> 本课程为视频课程，共 50 讲，现已全部更新完毕，订阅成功后即可通过“极客时间”App端、小程序端、<a href="https://time.geekbang.org/paid-content">Web端</a>永久观看；</li><li>由于视频内容为虚拟商品，一经订阅，概不退款；</li><li>在课程学习过程中，如有任何问题，请邮件联系 service@geekbang.org。</li></ol>',
            "column_sharesale":1,
            "author_name":"张涛",
            "lecture_url":"https://static001.geekbang.org/resource/image/4f/a0/4f040cc6855a3b4d0f1fc42ae5afaba0.jpg",
            "column_subtitle":"Java/Android开发者的实战指南",
            "column_wxlite_code":"https://static001.geekbang.org/product/wxa/trans-wxa_sku/100009801.png",
            "column_video_cover":"https://static001.geekbang.org/resource/image/77/bf/77aa96cba2aeddc7c3dc3f0c4b3856bf.jpg",
            "sub_count":2148,
            "column_price":12900,
            "column_utime":1534502250
        },
    },
    '/discover/latest' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            list : [
            {
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
            },
            {
                article_could_preview : true,
                article_cover : "https://static001.geekbang.org/resource/image/c6/4c/c665f31c352cdfd55825f9e23c77024c.jpg",
                article_ctime:1532939400,
                article_subtitle:"无",
                article_summary:"程序员的成长道路没那么平坦和舒适，会面临各种问题与困惑，一路上充满了崎岖、障碍和迷雾。所以，这个专栏会围绕程序这个行业、程序员这个职业，画出一条清晰的成长路径。",
                article_title:"开篇词 | 程序行知：走在同样的路上，遇见自己的风景",
                chapter_id:"0",
                had_viewed:false,
                id:12149,
                score : 1532939400
            }
            ]
        }
    },
    '/recharge/list' : {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            list : [
            {
                "id": "com.redatoms.imojo.sg.r001",
                "name": "60元宝",
                "money": "6",
                "rm": "60",
                "discount_money": "6",
                "discount": null,
                "description": null,
                "type": "1",
                "status": 0,
                "sub_id": null,
                "first_recharge_month": 1,
                "first_recharge_factor": 2
            },
            {
                "id": "com.redatoms.imojo.sg.r002",
                "name": "320元宝",
                "money": "30",
                "rm": "320",
                "discount_money": "30",
                "discount": null,
                "description": null,
                "type": "1",
                "status": 0,
                "sub_id": null,
                "first_recharge_month": 1,
                "first_recharge_factor": 2
            },
            {
                "id": "com.redatoms.imojo.sg.r003",
                "name": "750元宝",
                "money": "68",
                "rm": "750",
                "discount_money": "68",
                "discount": null,
                "description": null,
                "type": "1",
                "status": 0,
                "sub_id": null,
                "first_recharge_month": 1,
                "first_recharge_factor": 2
            },
            {
                "id": "com.redatoms.imojo.sg.r004",
                "name": "2300元宝",
                "money": "198",
                "rm": "2300",
                "discount_money": "198",
                "discount": null,
                "description": null,
                "type": "1",
                "status": 0,
                "sub_id": null,
                "first_recharge_month": 1,
                "first_recharge_factor": 2
            },
            {
                "id": "com.redatoms.imojo.sg.r005",
                "name": "750元宝",
                "money": "68",
                "rm": "750",
                "discount_money": "68",
                "discount": null,
                "description": null,
                "type": "1",
                "status": 0,
                "sub_id": null,
                "first_recharge_month": 1,
                "first_recharge_factor": 2
            },
            {
                "id": "com.redatoms.imojo.sg.r006",
                "name": "2300元宝",
                "money": "198",
                "rm": "2300",
                "discount_money": "198",
                "discount": null,
                "description": null,
                "type": "1",
                "status": 0,
                "sub_id": null,
                "first_recharge_month": 1,
                "first_recharge_factor": 2
            },
            ]
        }
    },
    '/account/changePwd': {
        "msg": "SUCCESS",
        "code": 0
    },
    '/account/getInfo': {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            token: 'kdsljladlkjdlk',
            uname: '一飞冲天',
            phone: '13552774423'
        }
    },
    '/login': {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            token: 'kdsljladlkjdlk',
            uname: '一飞冲天',
            phone: '13552774423'
        }
    },
    '/regist': {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            token: 'kdsljladlkjdlk',
            uname: '一飞冲天',
            phone: '13552774423'
        }
    },
    '/account/safeValidate': {
        "msg": "SUCCESS",
        "code": 0
    },
    '/account/setPassword': {
        "msg": "SUCCESS",
        "code": 0
    },
    '/account/freeLogin': {
        "msg": "SUCCESS",
        "code": 0,
        "data": {
            token: 'kdsljladlkjdlk',
            uname: '一飞冲天',
            phone: '13552774423'
        }
    }
}

export default Mockdata;

