/**
* 我的笔记
*/
import React, { PureComponent } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Alert,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar,
    Platform
} from 'react-native';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import NoteList from './noteList';
import { isLT19 } from '../../utils/ScreenUtil';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default class Note extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    tabArr = [
    	{columnName: '全部', requestCode: 'T1348647909107'},
        {columnName: '专栏', requestCode: 'T1348648517839'},
        {columnName: '其他', requestCode: 'T1348649580692'}
    ];

    render() {
        return(
        <View style={styles.container}>
            {/* 状态栏 */}
            <StatusBar backgroundColor={'rgba(255,255,255, 0)'} translucent={true}/>           

            {/* 栏目条 */}
            <View style={styles.container}>                
                <ScrollableTabView
                    ref={'tabView'}
                    renderTabBar={() => <ScrollableTabBar style={{borderBottomWidth: 0, paddingBottom: 5, width: screenWidth, height: 45}} />}
                    tabBarUnderlineStyle={{ height: 2, minWidth: Math.floor(screenWidth/5), backgroundColor: 'rgba(216,30,6,.8)'}}
                    tabBarInactiveTextColor="#515151"
                    tabBarActiveTextColor="#d81e06"
                    tabBarTextStyle={{fontSize: 15}}
                    onChangeTab={(ref)=>{}}
                    onScroll={(postion)=>{}}
                    locked={false}
                    initialPage={0}
                >

                    {
                        this.tabArr.map(item => {
                            return (
                                <NoteList
                                    key={item.columnName}
                                    tabLabel={item.columnName}
                                    requestCode={item.requestCode}
                                    navigation={ this.props.navigation }
                                />
                            )
                        })
                    }

                </ScrollableTabView>

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
