import React, { PureComponent } from 'react';
import {
    FlatList,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image,
    Text,
    View,
    Animated,
    Easing,
    ImageBackground
} from 'react-native';

import ajax from '../../utils/fetch';
import Common from '../../utils/Common';
import Toast from '../../utils/Toast';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const emptyHeight = screenWidth/screenHeight * 289;
const imgWidth = 91;
const imgHeight = 87;

export default class MessageList extends PureComponent{

    // 构造器
    constructor(props){
        super(props);
        this.state = {
            sourceData : [],
            refreshing: false,
            flatHeight: 0,
            indexText: '',
        };
    }

    // 改变value而不需要重新re-render的变量，声明在constructor外面
    currPage= 0;

    // 设置默认输入参数
    static defaultProps = {

    };

    // 组件创建前
    componentWillMount(){

    }

    // 渲染完成钩子
    componentDidMount() {
        this._getList();
    }

    _getNewsList = () => {
        let _this = this;
        let requestCode = this.props.requestCode;

        ajax({
            url: `http://c.m.163.com/nc/article/headline/${requestCode}/${_this.currPage}-10.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=10&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore`,
            success: (data)=>{
                _this.setState({
                    sourceData: _this.state.refreshing?data[requestCode]:[..._this.state.sourceData, ...data[requestCode]]
                });
                _this.currPage += 10;
            },
            error: (err)=>{
                _this.refs.toast.show('网络请求异常');
            },
            complete: ()=>{
                _this.state.refreshing && _this.setState({refreshing: false});
            }
        });

    };

    _getList = () => {
        Common.getNotes((result)=>{
            console.log(result);
            if (result.code == 0) {
                this.setState({
                    sourceData: result.data
                })
            }
        });
    }

    /**
     * 此函数用于为给定的item生成一个不重复的Key。
     * Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。
     * 若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标
     *
     * @param item
     * @param index
     * @private
     */
    _keyExtractor = (item, index) => index+'';

    /**
     * 使用箭头函数防止不必要的re-render；
     *
     * @param item
     * @private
     */
    _onPressItem = (item) => {

        this.setState({
            selected: item.id
        });

        // 跳转视频详情页面
        if(item['videoinfo']){
            this.props.navigation.push('VideoDetail', {item});
            return
        }

        // 跳转新闻详情页面
        this.props.navigation.push('NewsDetail', {item});


    };

    // 跳转到指定位置
    _doActionToItem = () => {
        // viewPosition: 指定选定行显示的位置，0代表top，0.5代表middle，1代表bottom
        this.flatList.scrollToIndex({ viewPosition: 0, index: this.state.indexText });
    };

    // 跳转到内容最底端
    _doActionToBottom = () => {
        this.flatList.scrollToEnd();
    };

    // Header布局
    /*_renderHeader = () => (
     <HomeHeader navigation={ this.props.navigation } />
     );*/

    // 空布局
    _renderEmptyView = () => (
        <View style={{height: this.state.flatHeight, backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../images/empty/empty-bought.png')} resizeMode={'contain'} style={{width: screenWidth, height: emptyHeight, top: 120}} />
        </View>
    );

    // Footer布局
    _renderFooter = () => {
        let len = this.state.sourceData.length;
        return (
            <View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', height: len<1?0:40}}>
                <Image source={require('../../images/i_loading.gif')} resizeMode={'contain'} style={{width: 20, height: 20, marginRight: 5 }} />
                <Text>正在加载...</Text>
            </View>
        )
    };

    // 自定义分割线
    _renderItemSeparatorComponent = ({highlighted}) => (
        <View style={{ height: 1, backgroundColor:'#e6e6e6' }} />
    );

    // 下拉刷新
    _renderRefresh = () => {
        this.setState({refreshing: true}); //开始刷新
        this.currPage = 0;
        // this._getList();
    };

    // 上拉加载更多
    _onEndReached = () => {
        // this._getList();
    };

    _getTitleBar = (item) => {
        return (
            <View style={styles.titleBar}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    }

    _renderItem = ({item}) =>{
        return(
            <View>
                {this._getTitleBar(item)}
                <MessageItem
                    item={item}
                    onPressItem={ this._onPressItem }
                    selected={ this.state.selected === item.id }
                />
            </View>
        );
    };

    _setFlatListHeight = (e) => {
        let height = e.nativeEvent.layout.height;
        if (this.state.flatHeight < height) {
            this.setState({flatHeight: height})
        }
    };


    render() {
        return (
        <View style={styles.container}>
            <FlatList
                ref={ ref => this.flatList = ref }
                data={ this.state.sourceData }
                extraData={ this.state.selected }
                keyExtractor={ this._keyExtractor }
                renderItem={ this._renderItem }
                // 初始加载的条数，不会被卸载
                initialNumToRender={10}
                // 决定当距离内容最底部还有多远时触发onEndReached回调；数值范围0~1，例如：0.5表示可见布局的最底端距离content最底端等于可见布局一半高度的时候调用该回调
                onEndReachedThreshold={0.1}
                // 当列表被滚动到距离内容最底部不足onEndReacchedThreshold设置的距离时调用
                onEndReached={ this._onEndReached }
                //ListHeaderComponent={ this._renderHeader }
                // ListFooterComponent={ this._renderFooter }
                ItemSeparatorComponent={ this._renderItemSeparatorComponent }
                ListEmptyComponent={ this._renderEmptyView }
                onLayout={this._setFlatListHeight}
                refreshing={ this.state.refreshing }
                onRefresh={ this._renderRefresh }
                // 是一个可选的优化，用于避免动态测量内容；+50是加上Header的高度
                //getItemLayout={(data, index) => ( { length: 40, offset: (40 + 1) * index + 50, index } )}
            />
            <Toast
                ref="toast"
                style={{backgroundColor:'black'}}
                position='center'
                opacity={0.8}
                textStyle={{color:'white'}}
            />
        </View>

        );
    }

}

// 根据数据返回不同布局的item
class MessageItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.item);
    };

    render() {
        let item = this.props.item;
        // 判断是否是三图布局
        let isThreePic = item['imgnewextra'];
        // 判断是否是视频布局
        let isVideo = item['videoinfo'];

        if(isThreePic){
            return(
                <TouchableOpacity
                    {...this.props}
                    onPress={this._onPress}
                    style={styles.picItem}
                    activeOpacity={.8}
                >
                    <View style={{  justifyContent: 'space-between'}}>
                        <Text style={{fontSize:16, lineHeight:25, color: '#2c2c2c'}}>{item.title}</Text>

                        <View style={{flexDirection: 'row', marginVertical: 5, justifyContent: 'space-between'}}>
                            <Image source={{uri: item.imgsrc}} style={{width: screenWidth*.35, height: 80}} />
                            {
                                item.imgnewextra.map((imgItem, index) => (
                                    <Image source={{uri: imgItem.imgsrc}} key={index+''} style={{width: screenWidth*.3, height: 80}} />
                                    )
                                )
                            }
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={{marginRight: 6}}>{item.source}</Text>
                                <Text style={{marginRight: 6}}>{item.replyCount}跟帖</Text>
                            </View>
                            <Text style={{color: '#ccc', fontSize: 18}}>x</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }

        if(isVideo){
            return(
                <TouchableOpacity
                    {...this.props}
                    onPress={this._onPress}
                    style={styles.picItem}
                    activeOpacity={.8}
                >
                    <View style={{justifyContent: 'space-between'}}>
                        <Text style={{fontSize:16, lineHeight:25, color: '#2c2c2c'}}>{item.title}</Text>
                        <ImageBackground source={{uri: item.imgsrc}} resizeMode={'cover'} style={{height: 180, marginVertical: 6, justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'rgba(0,0,0,.5)', justifyContent: 'center', alignItems: 'center'}}>
                                <Image source={require('../../images/i_play.png')} resizeMode={'contain'} style={{width: 18, height: 18, marginLeft: 3}} />
                            </View>
                        </ImageBackground>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={{marginRight: 6}}>{item.source}</Text>
                                <Text>{item.replyCount}跟帖</Text>
                            </View>
                            <Text style={{color: '#ccc', fontSize: 18}}>x</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }

        return(
            <TouchableOpacity
                {...this.props}
                onPress={this._onPress}
                style={styles.item}
                activeOpacity={.8}
            >
                <View style={{width: screenWidth*.63, height: 80, justifyContent: 'space-between'}}>
                    <View style={styles.content}>
                        <Image resizeMode={'stretch'} source={{uri:detail.column_cover}}
                           style={styles.img}/>
                        <View style={styles.info}>
                            <Text style={styles.title}>{detail.title}</Text>
                            <Text style={styles.tip}>共{detail.count}条笔记</Text>                                                
                        </View>
                        <Image source={require('../../images/account/right-arrow.png')} style={styles.rightIcon} />
                    </View>
                </View>
                <Image source={{uri: item.imgsrc}} style={{width: screenWidth*.3, height: 80}} />
            </TouchableOpacity>
        );


    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F8F8F8'
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
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 7
    },
    picItem: {
        padding: 7
    },
    content: {
        flexDirection: 'row',
        height: imgHeight,
        margin: 10
    },
    img: {
        width: imgWidth,
        height: imgHeight,
    },
    info: {
        flexDirection: 'column',
        width: screenWidth - imgWidth - 20,
        height: imgHeight,
        margin: 10
    },

});