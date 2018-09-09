import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    FlatList,
    StatusBar,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Common from '../../utils/Common';
import Colors from '../../components/Colors';
import { formatDateString } from '../../utils/Util';

const deviceW = Dimensions.get('window').width;
const imgHeight = deviceW*640/1142;
const len = 160;
const basePx = 375;

function px2dp(px) {
  return px *  deviceW / basePx
}

export default class Articles extends Component<{}> {

    // 构造
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            listData: []
        };
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        // TODO: 排序
        Common.getArticles(params.cid, (result)=>{
            if (result.code == 0) {
                this.setState({
                    listData: result.data.list,
                    count: result.data.list.length,
                });
            }
        });
    }

    _renderItem = (item) => {
        let rowData = item.item;
        return (
            <View style={styles.content}>
                <TouchableWithoutFeedback onPress={()=>{this._onItemClick(rowData.id, rowData.name)}}>
                    <View style={styles.item}>
                        <Text style={styles.title}>{rowData.article_title}</Text>
                        <View style={styles.viewStyle}>
                            <Icon name="eye" size={px2dp(15)} color={rowData.had_viewed?Colors.gray:Colors.highlight} />
                            <Text style={styles.time}>{formatDateString(rowData.article_ctime)}</Text>
                        </View>
                        <Image resizeMode={'stretch'} source={{uri:rowData.article_cover}}
                               style={styles.img}/>
                        <Text numberOfLines={2} style={styles.summary}>{rowData.article_summary}</Text>
                        <View style={styles.read}>
                            <Text style={styles.readLabel}>阅读全文</Text>
                            <Text style={styles.rightArrow}>&gt;</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    _onItemClick(id, name) {
        const { navigate, state } = this.props.navigation;
        navigate("Article", { cid: state.params.cid, id: id});
    }

    _header = () => {
        return (
            <View style={styles.headerStyle}>
                <Icon name="arrow-circle-o-down" size={px2dp(15)} color={Colors.gray} />
                <Text style={styles.order}>倒序</Text>
                <Text style={styles.count}>|  已更新{this.state.count}篇</Text>
            </View>
        );
    }

    _footer = () => {
        return <Text style={{height:5,backgroundColor:'#ECEFF2'}}></Text>;
    }

    _separator = () => {
        return <View style={styles.separator} />;
    }

    refreshing(){
        
    }

    _onload(){
        
    }

    render() {        
        return (
            <FlatList 
                    style={styles.list}
                    ref={(flatList)=>this._flatList = flatList}
                    keyExtractor={(item, index) => {return item.id.toString();}}
                    ListHeaderComponent={this._header}
                    ListFooterComponent={this._footer}
                    ItemSeparatorComponent={this._separator}
                    renderItem={this._renderItem}
                    onRefresh={this.refreshing}
                    refreshing={false}
                    onEndReachedThreshold={0.1}
                    onEndReached={
                        this._onload
                    }
                    data={this.state.listData}>
                    
                    
                </FlatList>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex:1,
        backgroundColor: 'white'
    },
    headerStyle: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        marginTop: 10,
        marginLeft: 10
    },
    item: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column',
        margin: 10
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 10
    },
    viewStyle: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    time: {
        fontSize: 13,
        color: Colors.gray,
        margin: 10,
    },
    img: {
        width: deviceW-20,
        height: imgHeight,
        resizeMode: 'stretch'
    },
    summary: {
        color: Colors.gray,
        marginTop: 10
    },
    read: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },
    readLabel: {
        flex: 1,
        color: Colors.black
    },
    rightArrow: {
        right: 10,
        color: Colors.gray
    },
    order: {
        color: Colors.gray,
        marginLeft: 10
    },
    count: {        
        color: Colors.gray,
        marginLeft: 10
    },
    separator: {
        height: 5,
        backgroundColor:'#ECEFF2'
    }
});
