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

import Colors from '../../components/Colors';
import ajax from '../../utils/fetch';
import Common from '../../utils/Common';
import Toast from '../../utils/Toast';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const emptyHeight = screenWidth/screenHeight * 289;
const imgWidth = 91;
const imgHeight = 87;

export default class NoteList extends PureComponent{

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

    _getList = () => {
        Common.getMyNotes((result)=>{
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
        const { navigate } = this.props.navigation;
        let params = {
            id: item.resourceId, 
            type: item.type
        };
        switch(item.type) {
            case 2:
            case 5:
                navigate("SubjectDetail", params);
                break;
            case 3:
                navigate("CourseDetail", params);
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
    };

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
        <View>
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
                <Text style={styles.title}>{item.alias}</Text>
            </View>
        );
    }

    _renderItem = ({item}) =>{
        let rowData = item.list;
        let notes = [];
        for (i in rowData) {
            rowData[i].type = item.type;
            let note = <NoteItem
                key={i}
                item={rowData[i]}
                onPressItem={ this._onPressItem }
            />
            notes.push(note);
        }
        return(
            <View style={{marginBottom: 15}}>
                {this._getTitleBar(item)}
                {notes}
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
class NoteItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.item);
    };

    render() {
        let item = this.props.item;        
        return(
            <TouchableOpacity
                {...this.props}
                onPress={this._onPress}
                style={styles.item}
                activeOpacity={.8}
            >
                <View style={styles.content}>
                    <Image resizeMode={'stretch'} source={{uri:Common.baseUrl + item.image}}
                       style={styles.img}/>
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.title}</Text>
                        <Text style={styles.tip}>共{item.total}条笔记</Text>                                                
                    </View>
                    <Image source={require('../../images/account/right-arrow.png')} style={styles.rightIcon} />
                </View>
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
        alignItems: 'center',
    },
    picItem: {
        padding: 7
    },
    content: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10,
        width: screenWidth, 
        height: imgHeight 
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
    name: {
        flexWrap: 'wrap',
        fontSize: 15,
        color: Colors.black,
        marginTop: 8,
        marginLeft: 8,
        height: 20,
    },
    tip: {
        color: Colors.gray,
        marginTop: 8,
        marginLeft: 8
    },
    rightIcon: {
        width: 10,
        height: 10,
        position: 'absolute',
        top: 35,
        right: 30
    }
});