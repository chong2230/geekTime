/**
* 我的礼券
*/
import React, { PureComponent } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    FlatList,
    StatusBar,
    Platform
} from 'react-native';

import Colors from '../../components/Colors';
import Common from '../../utils/Common';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const emptyHeight = screenWidth/screenHeight * 289;

export default class HistoryTicket extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            listData: []
        }
    }

    componentDidMount() {
        Common.getMyTickets(0, (result)=>{
            if (result.code == 0) {
                this.setState({
                    listData: result.data
                });
            }            
        })

    }

    _renderItem = (item) => {
        let rowData = item.item;
        let expiredStyle = {};
        let expiredText = null;
        // 历史礼券均已过期
        if (true || rowData.expired) {
            expiredStyle = [styles.expiredStyle];
            expiredText = <Text style={[styles.expired, expiredStyle]}>已过期</Text>;
        }         
        return (
            <View style={styles.item}>                    
                <View style={styles.top}>                        
                    <Text style={[styles.name, expiredStyle]}>{rowData.title}</Text>                    
                    <Text style={[styles.price, expiredStyle]}>￠ {rowData.price}</Text>
                </View>
                <Text numberOfLines={2} style={[styles.desc, expiredStyle]}>{rowData.content}</Text>
                <View style={styles.bottom}>
                    <Text style={[styles.time, expiredStyle]}>使用时间：{rowData.startDate} ~ {rowData.endDate}</Text> 
                    {expiredText}
                </View>
            </View>      
        );
    }

    // 空布局
    _renderEmptyView = () => (
        <View style={{height: this.state.flatHeight, backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../images/empty/empty-bought.png')} resizeMode={'contain'} style={{width: screenWidth, height: emptyHeight, top: 120}} />
            <Text style={{marginTop: 105, marginBottom: 10}}>空空如也</Text>
        </View>
    )

    _footer = () => {
        return <Text style={{height:55,backgroundColor:'#ECEFF2'}}></Text>;
    }

    _separator = () => {
        return <View style={styles.separator} />;
    }

    refreshing(){
        
    }

    render() {
        return(
        <View style={styles.container}>
            {/* 状态栏 */}
            <StatusBar backgroundColor={'rgba(255,255,255, 0)'} translucent={true}/>           

            {/* 栏目条 */}
            <FlatList 
                    style={styles.list}
                    ref={(flatList)=>this._flatList = flatList}
                    keyExtractor={(item, index) => {return item.id.toString();}}
                    // ListFooterComponent={this._footer}
                    ItemSeparatorComponent={this._separator}
                    ListEmptyComponent={ this._renderEmptyView }
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
        flex: 1,
        backgroundColor: '#F8F8F8',
        position: 'relative'
    },
    item: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderWidth: 1,
        borderColor: Colors.border,
        padding: 5,
        flexDirection: 'column'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 18,
        margin: 10
    },
    price: {
        fontSize: 18,
        right: 10,
        top: 10
    },
    desc: {
        fontSize: 13,
        marginLeft: 10
    },
    time: {
        fontSize: 13,
        margin: 10
    },
    expiredStyle: {
        color: Colors.gray,
        opacity: .6
    },
    expired: {
        right: 10
    },
    bottom: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    separator: {
        backgroundColor: '#ECEFF2',
        // height: 10
    }
});
