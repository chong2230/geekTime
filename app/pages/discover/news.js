/**
 * Created by cluo on 2017/12/20.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Button,
    Image,
    View,
    FlatList,
    StatusBar,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome'

import Common from '../../utils/Common';
import {formateMinSec} from '../../utils/FormatUtil';

const deviceW = Dimensions.get('window').width;
const len = 280;

export default class News extends Component<{}> {
    
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            listData: []
        };
    }

    componentWillMount() {
        Common.getNews((data)=>{
            this.setState({
                listData: data.list
            });
        })
    }

    _renderItem = (item) => {
        let rowData = item.item;
        let times = formateMinSec(rowData.times);
        let listenStyle = {}
        let listenedView
        if (rowData.listened > 0) {
            // listenStyle = { color: '#ea642e' };
            listenedView = <Text style={styles.listened}>已听{rowData.listened}%</Text>;
        }
        return (
            <TouchableWithoutFeedback onPress={()=>{this._onItemClick(rowData.id)}}>
                <View style={styles.item}>                    
                    <View style={styles.info}>                        
                        <Text numberOfLines={2} style={[styles.title, listenStyle]}>{rowData.title}</Text>  
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.createTime}>{rowData.create_time}</Text>
                            <Text style={styles.times}>时长{times}</Text>
                            {listenedView}
                        </View>                                                                  
                    </View>   
                    <Icon.Button
                      name="file-audio-o"
                      color="#898989"
                      backgroundColor="white"
                      size={20}
                      top={8}
                      right={5}
                      onPress={this._fetchDetail}
                      >
                    </Icon.Button>                 
                    <Icon.Button
                      name="ellipsis-h"
                      color="#898989"
                      backgroundColor="white"
                      size={20}
                      top={8}
                      right={5}
                      onPress={this._handle}
                      >
                    </Icon.Button>
                </View>
                
            </TouchableWithoutFeedback>
        );
    }

    _onItemClick(id, name) {
        const { navigate } = this.props.navigation;
        // navigate("SubjectSub", { id:id, title: name });
    }

    _fetchDetail = () => {
        console.log('fetch detail');
    }

    _handle = () => {
        console.log('handle');
    }

    _header = () => {
        return (
            <View>
                <Image source={require("../../images/news-header.jpg")} style={styles.headerImg} />
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
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            alert('刷新成功')
        },1500)
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    hidden={false}
                    backgroundColor={'white'}
                    translucent={true}
                    barStyle={'dark-content'}>
                </StatusBar>
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
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        //backgroundColor:'#6B6E80'
    },    
    list: {
        backgroundColor:'white'
    },
    headerImg: {
        width: deviceW,
        height:200,
        justifyContent:'center',
        alignItems:'center'
    },
    separator: {
        height: 5,
        backgroundColor:'#ECEFF2'
    },
    item: {
        height: 55,
        flexDirection: 'row'
    },
    info: {
        marginTop: 10,
        flexWrap: 'wrap',
    },
    title: {
        width: len,
        flexWrap: 'wrap',
        fontSize: 15,
        color: 'black',
        marginLeft: 10,
        height: 20
    },
    createTime: {
        fontSize: 13,
        color: '#828282',
        marginLeft: 10
    },
    times: {
        fontSize: 13,
        color: '#828282',
        marginLeft: 20
    },
    listened: {
        fontSize: 13,
        color: '#ea642e',
        marginLeft: 20
    }
    
});
