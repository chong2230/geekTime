import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Platform,
    NativeModules,
    AsyncStorage
} from 'react-native';
import Navigator1 from '../../utils/navigator1'
import SettingItem from './settingItem'

// var CalendarManager = NativeModules.CalendarManager;  //导入iOS端原生

export default class Setting extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            cache: 0,   //缓存大小
            access_token: null

        })
    }
    componentWillMount() {
        //通过原生计算缓存大小
        // Platform.OS === 'ios' ?
        //     CalendarManager.cacheSize((error, events) => {
        //         if (error) {
        //             console.error(error);
        //         } else {
        //             this.setState({
        //                 cache:Math.round((events/1024/1024)*100)
        //             })
        //         }
        //     })
        //     :
        //     console.log('安卓清除缓存未实现')
    }

    leftAction =() =>{
        const { goBack } = this.props.navigation;
        goBack();
    }

    rightAction =() =>{

    }

    //清除缓存
    clearCache =() =>{
        /*
        Platform.OS === 'ios' ?
            CalendarManager.cleanCache((error, events) => {
                if (error) {
                    console.error(error);
                } else {
                    this.setState({
                        cache:0
                    })
                }
            })
            :
            console.log('安卓清除缓存未实现')
            */
    }

    _setAccount = () => {

    }

    _setPull = () => {
        
    }

    _setPlay = () => {
        
    }

    _clearCache = () => {
        
    }

    _appraise = () => {
        
    }
    
    _about = () => {
        
    }

    _recommend = () => {
        
    }

    _logout = () => {
        
    }

    render() {
        let logoutView;
        if (this.state.access_token != null) {
            logoutView = (
                <TouchableOpacity  onPress={()=> this._logout()}>
                        <View style={styles.bottom}>
                            <Text style={styles.logoutBtn}>退出当前账号</Text>
                        </View>
                    </TouchableOpacity>
            );
        }
        return (
            <View style={styles.container}>
                <Navigator1 leftText = '<' centerText = '设置'  rightText = '  ' leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
                <ScrollView style={{marginBottom:0}}>
                    <SettingItem txt1 = '账号安全' onPress={this._setAccount}/>
                    <View style={styles.separator}></View>
                    <SettingItem txt1 = '推送设置' onPress={this._setPull}/>
                    <SettingItem txt1 = '播放和下载' onPress={this._setPlay}/>
                    <SettingItem txt1 = '清除缓存'  onPress={this._clearCache}/>
                    <View style={styles.separator}></View>
                    <SettingItem txt1 = '给应用评分' onPress={this._appraise}/>
                    <SettingItem txt1 = '帮助与反馈' onPress={this._suggest}/>
                    <View style={styles.separator}></View>
                    <SettingItem txt1 = '关于' onPress={this._about}/>
                    <SettingItem txt1 = '推荐给好友' onPress={this._recommend}/>
                    <View style={{backgroundColor:'#F0F0F0',height:20}}></View>
                    
                    {logoutView}
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white'
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'white'        
    },
    logoutBtn: {
        color: '#ea642e',
        marginTop: 5,
        marginBottom: 5,
        fontWeight: '500'
    },
    separator: {
        backgroundColor: '#ECEFF2',
        height: 10
    }
});
