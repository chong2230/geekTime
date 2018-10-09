/**
* 我的留言
*/
import React, { PureComponent } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    FlatList
} from 'react-native';
import { isLT19 } from '../../utils/ScreenUtil';
import Common from '../../utils/Common';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default class Message extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            listData: []
        }
    }

    componentDidMount() {
        Common.getMyMessages((result)=>{
            if (result.code == 0) {
                this.setState({
                    listData: result.data
                });
            }            
        })
    }

    render() {
        return(
        <View style={styles.container}>
            {/* 状态栏 */}
            <StatusBar backgroundColor={'rgba(255,255,255, 0)'} translucent={true}/>           

            {/* 栏目条 */}
            <View style={styles.container}>                
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
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#d81e06',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        paddingTop: isLT19()?0:25,
        paddingBottom: 5
    },        
    tabViewItemContainer: {
        flex: 1,
        backgroundColor: '#FFCCCC',
        justifyContent: 'center',
        alignItems: 'center'
    },
    columnSelect: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: screenWidth* .1,
        height: 50,
        top: 0,
        right: 0,
        /*shadowColor:'red',
        shadowOffset:{h:-10,w:-10},
        shadowRadius:3,
        shadowOpacity:1,*/
    }


});
