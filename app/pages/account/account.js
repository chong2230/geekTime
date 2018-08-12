/**
 * Created by cluo on 2017/12/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';

import AccountItem from './accountItem';
import Common from '../../utils/Common';
import Storage from '../../utils/Storage';

export default class Account extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            token: null,
            info: {}
        };
    }

    componentDidMount() {
        let self = this;
        //取出本地化的token
        Storage.get('token').then((val)=>{
            if (val) {
                self._getAccount(val);
            }
        });
    }

    _getAccount = (token) => {
        Common.getAccount(token, (data)=>{
            let phone = data.phone.substr(0, 3) + '****' + data.phone.substr(data.phone.length-4, 4);
            data.phone = phone;
            this.setState({
                token: token,
                info : data
            });
        });
    }

    _onPress = (type) => {
        if (this.state.token == null) {
            this._goLogin();
            return;
        }
        const { navigate } = this.props.navigation;
        switch (type) {
            case 0:
            navigate('Profile', {isVisiable: true, title: '个人信息', info: JSON.stringify(this.state.info)});
                break;
            case 1:
                navigate('Recharge', {isVisiable: true, title: '账户'});
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                Alert.alert('', '程序小哥正在快马加鞭，敬请期待噢~');
                break;
        }
    }

    _showInfo = () => {

    }

    _goLogin = () => {
        const { navigate } = this.props.navigation;
        navigate('Login', { isVisiable: true, title: '密码登录', transition: 'forVertical', refresh: (token)=>{
            if (token != null) {
                this._getAccount(token);
            }
        }});
    }

    _goSetting = () => {
        const { navigate } = this.props.navigation;
        navigate('Setting', {isVisiable: true, title: '设置', refresh: (token)=>{
            if (token == null) {
                this.setState({
                    token: token,
                    info: {}
                });
            } else {
                this._getAccount(token);
            }
            
        }});
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../../images/account/person_bg.jpg')} style={styles.person} />
                </View>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this._onPress(0)}>
                        <View style={styles.avatar}>
                            <Image source={require('../../images/defaultAvatar.jpg')} style={styles.avatarIcon} />
                            <View style={styles.avatarInfo}>
                                <Text style={styles.name}>{this.state.info.uname || '未登录'}</Text>
                                <Text style={styles.phone}>{this.state.info.phone || '点击头像登录'}</Text>
                            </View>
                        </View>    
                    </TouchableOpacity>                    
                    <View style={styles.separator}></View>
                    <AccountItem txt1 = "账户" count={this.state.money} source = {require('../../images/account/mine01.png')} onPress={()=>this._onPress(1)} />
                    <AccountItem txt1 = "已购" source = {require('../../images/account/mine02.png')} onPress={()=>this._onPress(2)} />
                    <AccountItem txt1 = "礼券" count={this.state.ticket} source = {require('../../images/account/mine03.png')} onPress={()=>this._onPress(3)} />
                    <AccountItem txt1 = "分享有赏" source = {require('../../images/account/mine04.png')} onPress={()=>this._onPress(4)} />
                    <View style={styles.separator}></View>                    
                    
                    <AccountItem txt1 = "我的笔记" source = {require('../../images/account/mine05.png')} onPress={()=>this._onPress(5)} />
                    <AccountItem txt1 = "我的留言" source = {require('../../images/account/mine06.png')} onPress={()=>this._onPress(6)} />
                    <AccountItem txt1 = "我的收藏" source = {require('../../images/account/mine07.png')} onPress={()=>this._onPress(7)} />
                    <AccountItem txt1 = "我的下载" source = {require('../../images/account/mine08.png')} onPress={()=>this._onPress(8)} />
                    <View style={styles.separator}></View>
                    <AccountItem txt1 = "设置" source = {require('../../images/account/mine09.png')} onPress={this._goSetting}/>                    
                </ScrollView>
            </View>
        );
    }    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    person: {
        height: 150
    },
    avatar: {
        flexDirection:'row', 
        height: 80
    },
    avatarIcon: {
        width: 50,
        height: 50,        
        borderRadius: 25,
        alignSelf: 'center',
        left: 10
    },
    avatarInfo: {
        justifyContent:'center', 
        flexDirection: 'column',
        left: 20
    },
    name: {
        fontWeight: 'bold', 
    },
    phone: {
        color: '#828282',
        fontSize: 11, 
        top: 5
    },
    separator: {
        backgroundColor: '#ECEFF2',
        height: 10
    }
});
