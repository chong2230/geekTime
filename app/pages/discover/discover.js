/**
 * Created by cluo on 2017/12/20.
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    // Button,
    MenuButton,
    Image,
    Alert,
    View,
    StatusBar,
    ScrollView,
    ListView,
    FlatList,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';
import ViewPager from 'react-native-viewpager';
import Orientation from 'react-native-orientation';

import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Common from '../../utils/Common';
import DiscoverNews from './discoverNews';

const deviceW = Dimensions.get('window').width;
const bannerHeight = deviceW*319/671;
const BANNER_IMGS = [];
let bannerImgs = [];
const len = 160;
const subjectWidth = 300;
const mallWidth = 100;
const microWidth = 100; // 微课
const hotWidth = 150;
const hotHeight = hotWidth*156/292;

export default class Discover extends React.Component {
    static navigationOptions = {
        title: '发现',
        isVisible: true
    };

    // 构造
    constructor(props) {
        super(props);

        let dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2
        });
        this._onItemClick = this._onItemClick.bind(this);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 实际的DataSources存放在state中
        this.state = {
            selectedNews: 0,
            dataSource: dataSource.cloneWithPages(BANNER_IMGS),
            listData: []
        }
    }

    componentWillMount() {
        Orientation.lockToPortrait();
        Common.getBanners((result)=>{
            var dataSource = new ViewPager.DataSource({
                pageHasChanged: (p1, p2) => p1 !== p2
            });
            this.setState({
                dataSource: dataSource.cloneWithPages(result),
            })
        });

        Common.getDiscoverList((result)=>{ 
            this.setState({listData: result.list});
        });

    }

    _renderPage(data, pageID) {
        return (
            <TouchableWithoutFeedback
                style={styles.banner}
                onPress={() => this._onBannerClick(data, pageID)}>
                    <Image
                        source={{uri : Common.baseUrl + data.icon}}
                        style={styles.page} />
            </TouchableWithoutFeedback>
        );
    }

    _onBannerClick = (data, pageID) => {
        this._onItemClick(data.id, data.type);
    }

    // type: 2 subjects:精品专栏 3 courses:视频课程 4 mall:极客商城 5 microclass:精品微课 6 hots:热点专题 7 videos:二叉树视频
    _onItemClick(type, id) {
        const { navigate } = this.props.navigation;
        switch(type) {
            case 2:
            case 5:
                navigate("SubjectDetail", {id: id, type: type});
                break;
            case 3:
                navigate("CourseDetail", {id: id, type: type});
                break;
            case 4:
                break;
            case 6:
                break;
            case 7:
                break;    
            default:
                break;    
        }
    }

    refreshing(){
        
    }

    _onload(){
        
    }

    _renderItem = (item) => {
        let data = item.item;
        for (let i=0; i<data.contents.length; i++) {
            data.contents[i].key = '' + (i+1);
        }
        // news:极客新闻 subjects:精品专栏 courses:视频课程 mall:极客商城 microclass:精品微课 hots:热点专题 videos:二叉树视频
        // 对应类型type分别为1~7
        switch (data.type) {
            case 1:
                return this._renderNews(data);
            case 2:
                return this._renderSubjects(data);
            case 3:
                return this._renderCourses(data);
            case 4:
               return this._renderMall(data);
            case 5:
               return this._renderMicroclass(data);
            case 6:
               return this._renderHots(data);
            case 7:
               return this._renderVideos(data);         
        }
    }

    _getTitleBar = (item) => {
        let btnTxt = "查看全部 >";
        if (item.type == 4) btnTxt = "进入商城 >";
        return (
            <View style={styles.titleBar}>
                <Text style={styles.title}>{item.title}</Text>
                <Button text={btnTxt} onPress={()=>this._viewAll(item)} style={styles.viewAll}></Button>
            </View>
        );
    }

    _renderNews = (item) => {        
        return (
            <View style={styles.contents}>
                {this._getTitleBar(item)}
                <DiscoverNews item={item} />                
            </View>
        );
    }

    _renderSubjects = (item) => {
        return (
            <View style={styles.contents}>
                {this._getTitleBar(item)}
                <FlatList 
                    style={styles.list}
                    renderItem={this._renderSubjectItem}
                    onRefresh={this.refreshing}
                    refreshing={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}                
                    data={item.contents}>
                </FlatList>
            </View>
        );
    }

    _renderSubjectItem = (item) => {
        let rowData = item.item;
        return (
            <TouchableWithoutFeedback onPress={()=>{this._onItemClick(2, rowData.id)}}>
                <View style={styles.subjectItem}>
                    <Image resizeMode={'stretch'} source={{uri:Common.baseUrl + rowData.icon}}
                           style={styles.subjectImg}/>
                    <View style={styles.subjectMask}></View>
                    <Text numberOfLines={2} style={styles.subjectTitle}>{rowData.title}</Text>
                    <View style={styles.subjectInfo}>
                       <Text style={[styles.name, styles.subjectName]}>{rowData.name}</Text>
                       <Text style={[styles.cost, styles.subjectCost]}>￠ {rowData.cost} / {rowData.periods}期</Text> 
                    </View>
                    <Text numberOfLines={2} style={styles.description}>{rowData.description}</Text>
                    <View style={styles.subjectAuthor}>
                        <Image resizeMode={'stretch'} source={{uri:Common.baseUrl + rowData.avatar_image}}
                               style={styles.avatarImage}/>
                       <Text style={styles.authorName}>{rowData.author}</Text>
                       <Text style={styles.authorHonor}> | {rowData.honor}</Text> 
                    </View>
                </View>
                
            </TouchableWithoutFeedback>
        );
    }

    _renderCourses = (item) => {
        return (
            <View style={styles.contents}>
                {this._getTitleBar(item)}
                <FlatList 
                    style={styles.list}
                    renderItem={this._renderCourseItem}
                    onRefresh={this.refreshing}
                    refreshing={false}                    
                    data={item.contents}>
                </FlatList>
            </View>
        );
    }

    _renderCourseItem = (item) => {
        let rowData = item.item;
        return (
            <TouchableWithoutFeedback onPress={()=>{this._onItemClick(3, rowData.id)}}>
                <View style={styles.courseItem}>
                    <Image resizeMode={'stretch'} source={{uri:Common.baseUrl + rowData.icon}}
                           style={styles.courseImg}/>
                    <View style={styles.courseInfo}>
                        <Text style={styles.name}>{rowData.name}</Text>                    
                        <Text numberOfLines={2} style={styles.description}>{rowData.description}</Text>
                        <View style={styles.authorInfo}>
                           <Text style={[styles.authorName, {color: '#828282'}]}>{rowData.author}</Text>
                           <Text style={styles.authorHonor}> | {rowData.honor}</Text> 
                        </View>
                        <View style={styles.courseBottom}>
                            <Text style={styles.period}>{rowData.period}课时 · 约 {rowData.times}分钟</Text> 
                            <Text style={[styles.cost, {marginTop: 20}]}>￠ {rowData.cost}</Text> 
                        </View>
                    </View>
                </View>
                
            </TouchableWithoutFeedback>
        );
    }

    _renderMall = (item) => {
        return (
            <View style={styles.contents}>
                {this._getTitleBar(item)}
                <FlatList 
                    style={styles.list}
                    renderItem={this._renderMallItem}
                    onRefresh={this.refreshing}
                    refreshing={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}                    
                    data={item.contents}>
                </FlatList>
            </View>
        );
    }

    _renderMallItem = (item) => {
        let rowData = item.item;
        return (
            <TouchableWithoutFeedback onPress={()=>{this._onItemClick(4, rowData.id)}}>
                <View style={styles.item}>
                    <View style={styles.mallBox}>
                        <Image resizeMode={'stretch'} source={{uri: Common.baseUrl + rowData.icon}}
                               style={styles.mallImg}/>
                    </View>
                    <Text numberOfLines={2} style={[styles.name, styles.mallName]}>{rowData.description}</Text>
                    <Text style={styles.cost}>¥ {rowData.cost}</Text> 
                </View>
                
            </TouchableWithoutFeedback>
        );
    }

    _renderMicroclass = (item) => {
        return (
            <View style={styles.contents}>
                {this._getTitleBar(item)}
                <FlatList 
                    style={styles.list}
                    renderItem={this._renderMicroclassItem}
                    onRefresh={this.refreshing}
                    refreshing={false}
                    showsHorizontalScrollIndicator={false}                    
                    data={item.contents}>
                </FlatList>
            </View>
        );
    }

    _renderMicroclassItem = (item) => {
        let rowData = item.item;
        return (
            <TouchableWithoutFeedback onPress={()=>{this._onItemClick(5, rowData.id)}}>
                <View style={styles.courseItem}>
                    <Image resizeMode={'stretch'} source={{uri: Common.baseUrl + rowData.icon}}
                           style={styles.microImg}/>
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.name}>{rowData.name}</Text>                    
                        <Text numberOfLines={2} style={styles.description}>{rowData.description}</Text>
                        
                        <View style={styles.microBottom}>
                            <Text style={styles.period}>共{rowData.period}篇文章</Text> 
                            <Text style={[styles.cost, {marginTop: 20}]}>￠ {rowData.cost}</Text> 
                        </View>
                    </View>
                </View>
                
            </TouchableWithoutFeedback>
        );
    }

    _renderHots = (item) => {
        return (
            <View style={styles.contents}>
                {this._getTitleBar(item)}
                <FlatList 
                    style={styles.list}
                    renderItem={this._renderHotItem}
                    onRefresh={this.refreshing}
                    refreshing={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}                    
                    data={item.contents}>
                </FlatList>
            </View>
        );
    }

    _renderHotItem = (item) => {
        let rowData = item.item;
        return (
            <TouchableWithoutFeedback onPress={()=>{this._onItemClick(6, rowData.id)}}>
                <View style={styles.hotItem}>
                    <Image resizeMode={'stretch'} source={require('../../images/hot/1.jpg')}
                           style={styles.hotImg}/>
                    <Text numberOfLines={2} style={styles.subjectTitle}>{rowData.title}</Text>                    
                </View>
                
            </TouchableWithoutFeedback>
        );
    }

    _renderVideos = (item) => {
        return (
            <View style={styles.contents}>
                {this._getTitleBar(item)}
                <FlatList 
                    style={styles.list}
                    renderItem={this._renderVideoItem}
                    onRefresh={this.refreshing}
                    refreshing={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}                    
                    data={item.contents}>
                </FlatList>
            </View>
        );
    }

    _renderVideoItem = (item) => {
        let rowData = item.item;
        return (
            <TouchableWithoutFeedback onPress={()=>{this._onItemClick(7, rowData.id)}}>
                <View style={styles.videoItem}>
                    <View>
                        <Image resizeMode={'stretch'} source={{uri:Common.baseUrl + rowData.icon}}
                               style={styles.videoImg}/>
                        <Image resizeMode={'stretch'} source={require('../../images/button-play.png')}
                               style={styles.playBtn}/>       
                    </View>
                    <Text numberOfLines={2} style={[styles.name, styles.videoName]}>{rowData.description}</Text>
                    <Text style={[styles.authorName, {color: '#828282'}]}>{rowData.author}</Text> 
                </View>
                
            </TouchableWithoutFeedback>
        );
    }

    _header = () => {
        return (
            <View>
                <ViewPager
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage.bind(this)}
                    isLoop={true}
                    autoPlay={true}/>

            </View>
        );
    }

    _footer = () => {
        return <Text style={{height:65,backgroundColor:'#ECEFF2'}}></Text>;
    }

    _separator = () => {
        return <View style={{height:10,backgroundColor:'#ECEFF2'}}/>;
    }

    _viewAll = (item) => {
        const { navigate } = this.props.navigation;
        switch (item.type) {
            case 1:
                navigate("News", {isVisible: true, title: "极客新闻", type: 1});
                break;
            case 2:
                this.props.main.setState({selectedTab: 'subject'})
                break;
            case 3:
                navigate("Course", {isVisible: true, title: "视频课程", type: 3});
                break;
            case 5:
                navigate("Course", {isVisible: true, title: "精品微课", type: 5});
               break;
            case 4:
            case 6:
            case 7:
                Alert.alert('', '程序小哥正在快马加鞭，敬请期待噢~');
               break;
        }
    }

    render() {        
        return (
            <View styles={styles.container}>
                <StatusBar
                    animated={true}
                    hidden={false}
                    backgroundColor={'white'}
                    translucent={true}
                    barStyle={'default'}>
                </StatusBar>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>发现</Text>
                </View>
                <FlatList 
                    style={styles.list}
                    ref={(flatList)=>this._flatList = flatList}
                    keyExtractor={(item, index) => {return '' + item.type}}
                    ListHeaderComponent={this._header.bind(this)}
                    ListFooterComponent={this._footer}
                    ItemSeparatorComponent={this._separator}
                    renderItem={this._renderItem}
                    onRefresh={this.refreshing}
                    refreshing={false}
                    onEndReachedThreshold={0}
                    onEndReached={
                        this._onload
                    }
                    data={this.state.listData}>
                    
                    
                </FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1
        // flexDirection: 'column'
    },
    header: {
        backgroundColor:'white',
        width: deviceW,
        height: 55
    },
    headerTitle : {
        width: deviceW,
        height: 30,
        marginTop: 25,
        fontSize: 20,
        color: 'black',
        fontWeight: '400',
        textAlign: 'center'
    },
    list: {
        backgroundColor:'#ECEFF2'
    },    
    banner: {
        flex: 1,
        width: deviceW,
        height: bannerHeight,
    },
    page: {
        flex: 1,
        height: bannerHeight,
        resizeMode: 'stretch'
    },
    contents: {
        // marginTop: 20,
        backgroundColor: 'white',  
        // flexDirection: 'column'      
    },
    titleBar: {
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        margin: 5,
        flexDirection: 'row'
    },
    title: {
        flexWrap: 'wrap',
        fontSize: 18,
        color: 'black',
        flex: 1,
        marginTop: 8,
        marginLeft: 8,
        height: 30,
    },
    viewAll: {
        marginTop: 10,
        marginRight: 10,
        color: '#a4a4a4',
        fontSize: 12
    },
    subjectItem: {
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    subjectTitle: {
        position: 'absolute',
        width: subjectWidth,
        top: 45,
        color: 'white',
        textAlign: 'center'
    },
    subjectImg: {
        width: subjectWidth,
        height: 100,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },    
    subjectMask: {
        width: subjectWidth,
        height: 100,
        backgroundColor: 'black',
        opacity: .6,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        position: 'absolute',
        top: 0,
        left: 0
    },
    subjectInfo: {
        width: subjectWidth - 20,
        // marginLeft: 10,
        flexDirection: 'row'
    },
    subjectName: {
        flex: 1
    },
    subjectAuthor: {
        flexDirection: 'row',
        height: 50,
        margin: 10,
        paddingTop: 15,
        borderTopColor: '#e0e0e0',
        borderTopWidth: .5
    },
    subjectCost: {
        marginTop: 10
    },
    avatarImage: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    authorName: {
        fontSize: 11,
        color: 'black',
        marginTop: 10,
        marginLeft: 10
    },
    authorHonor: {
        fontSize: 11,
        color: '#828282',
        marginTop: 10,
        // marginLeft: 10
    },
    courseItem: {
        marginTop: 10,
        flexDirection: 'row'
    },
    courseImg: {
        marginLeft: 10,
        width: 120,
        height: 130,
    },
    courseInfo: {
        // marginLeft: 10
    },
    courseBottom: {
        flexDirection: 'row', 
        width: deviceW - 130
    },
    authorInfo: {
        flexDirection: 'row',
    },
    mallBox: {
        width: mallWidth,
        height: mallWidth,
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 5,
        borderColor: '#e0e0e0',
        borderWidth: 1
    },
    mallImg: {
        width: mallWidth -20,
        height: mallWidth - 20,
        top: 10,
        left: 15
    },
    mallName: {
        width: mallWidth,
        fontSize: 12
    },
    microImg: {
        width: microWidth,
        height: microWidth,
        left: 10
    },
    microBottom: {
        flexDirection: 'row', 
        width: deviceW - microWidth - 10
    },
    hotItem: {
        marginLeft: 10
    },
    hotImg: {
        borderRadius: 8,
        width: hotWidth,
        height: hotHeight
    },
    videoItem: {
        marginLeft: 10
    },
    videoImg: {
        width: hotWidth,
        height: hotHeight
    },
    videoName: {
        width: hotWidth,
        fontSize: 12
    },
    item: {
        flex:1,
        alignItems:'flex-start'
    },
    img: {
        width:len,
        height:len
    },
    name: {
        flexWrap: 'wrap',
        // flex: 1,
        fontSize: 15,
        color: 'black',
        marginTop: 8,
        marginLeft: 10,
        height: 30,
    },
    description: {
        fontSize: 13,
        color: '#828282',
        marginLeft: 10
    },
    period: {
        flex: 1,
        fontSize: 13,
        color: '#828282',
        marginTop: 20,
        marginLeft: 10
    },
    cost: {
        fontSize: 12,
        color: Colors.highlight,
        marginLeft: 10,
        marginRight: 10
    },
    playBtn: {
        position: 'absolute',
        width: 40,
        height: 40,
        top: hotHeight/2 - 20,
        left: hotWidth/2 - 20
    }
});
