/**
 * Created by cluo on 2017/12/20.
 */
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
//import SubjectDetail from './detail';

const deviceW = Dimensions.get('window').width;
const len = 160;

export default class SubjectList extends Component<{}> {

    // 构造
    constructor(props) {
        super(props);

        this._onRecommendClick = this._onRecommendClick.bind(this);
        this._renderRow = this._renderRow.bind(this);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 实际的DataSources存放在state中
        this.state = {
            count: 0,
            listData: ds
        };
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        var data = JSON.parse(params.data);
        Common.getSubjectList(data.id, (result)=>{
            var ds = this.state.listData.cloneWithRows(result.list);
            this.setState({
                listData: ds,
                count: result.list.length,
            });
        });
    }

    _renderItem(rowData) {
        return (
            <View style={styles.content}>
                <TouchableWithoutFeedback onPress={()=>{this._onItemClick(rowData.id, rowData.name)}}>
                    <View style={styles.item}>
                        <Text>{rowData.title}</Text>
                        <Image resizeMode={'stretch'} source={{uri:Common.baseUrl + rowData.icon}}
                               style={styles.img}/>
                        <View style={styles.info}>
                            <Text numberOfLines={2} style={styles.name}>{rowData.name}</Text>
                            <Text style={styles.times}>{rowData.count || 100}次</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    _onItemClick(id, name) {
        const { navigate } = this.props.navigation;
        navigate("SubjectDetail", { id:id, title: name });
    }

    _header = () => {
        return (
            <View style={styles.headerStyle}>
                <Icon name="bolt" size={px2dp(22)} color={Colors.highlight} />
                <Text>倒序</Text>
                <Text>已更新{this.state.count}篇</Text>
            </View>
        );
    }

    _footer = () => {
        return <Text style={{height:55,backgroundColor:'#ECEFF2'}}></Text>;
    }

    _separator = () => {
        return <View style={styles.separator} />;
    }

    refreshing(){
        
    }

    _onload(){
        
    }

    render() {
        const { params } = this.props.navigation.state;
        var data = JSON.parse(params.data);
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
        flexDirection: 'row'
    },
    topImg: {
        width: deviceW,
        height:150,
        resizeMode: 'stretch'
    },
    row: {
        backgroundColor: 'white',
        marginTop: 15
    },
    content: {
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10
    },
    img: {
        //flex: 1,
        width: 120,//90,
        height:72, //55
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        width: len,
        height: 72,
        marginLeft: 15
    },
    name: {
        width: len,
        flexWrap: 'wrap',
        //fontSize: 12,
        color: 'black',
        flex: 1,
        marginTop: 15,
        height: 30,
        textAlign: 'left'
    },
    times: {
        width: len,
        //fontSize: 12,
        color: 'black',
        height: 30,
        textAlign: 'left'
    },
    description: {
        flexWrap: 'wrap',
        fontSize: 15,
        color: 'black',
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10
    },
    count: {
        flexWrap: 'wrap',
        fontSize: 15,
        color: 'black',
        marginLeft: 10
    },
    separator: {
        height: 5,
        backgroundColor:'#ECEFF2'
    }
});
