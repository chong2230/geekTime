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

import Colors from '../../components/Colors';
import Storage from '../../utils/Storage';
import SettingItem from './settingItem';

// var CalendarManager = NativeModules.CalendarManager;  //导入iOS端原生

export default class Setting extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            cache: 0,   //缓存大小
            token: null
        });
    }
    componentWillMount() {
        Storage.get('token').then((val)=>{
            if (val) {
                this.setState({
                    token: val
                });
            }
        });
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

    _safeAccount = () => {
        const { navigate } = this.props.navigation;
        if (this.state.token == null) {
            navigate('Login', { isVisiable: true, title: '密码登录', transition: 'forVertical' });
        } else {
            navigate('SafeAccount', {isVisible: true, title: "账户安全"});    
        }        
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
        const { navigate } = this.props.navigation;
        navigate('About', {isVisiable: true, title: '关于'});
    }

    _recommend = () => {
        
    }

    _logout = () => {
        Storage.delete('token').then(()=>{
            global.token = null;
            const { navigate, state } = this.props.navigation;
            setTimeout(function() {
                if (state.params.refresh) state.params.refresh(null);
                navigate('Login', { isVisiable: true, title: '密码登录', from: 'setting', transition: 'forVertical', refresh: (token)=>{
                    if (token != null) {
                        state.params.refresh(token);
                    }
                }});
            }, 400);
        });   
    }

    render() {
        let logoutView;
        if (this.state.token != null) {
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
                <ScrollView style={{marginBottom:0}}>
                    <SettingItem txt1 = '账号安全' onPress={this._safeAccount}/>
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
        flex: 1
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'white'        
    },
    logoutBtn: {
        color: Colors.highlight,
        marginTop: 5,
        marginBottom: 5,
        fontWeight: '500'
    },
    separator: {
        backgroundColor: '#ECEFF2',
        height: 10
    }
});
