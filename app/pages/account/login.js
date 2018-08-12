import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    AsyncStorage,
    Dimensions
} from 'react-native';

import Button from '../../components/Button';
import ImageButton from '../../components/ImageButton';
import Colors from '../../components/Colors';
import Common from '../../utils/Common';
import Storage from '../../utils/Storage';
import Navigator1 from '../../utils/navigator1';
import Toast from '../../utils/Toast';

const deviceW = Dimensions.get('window').width;

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone : '',
            pwd : ''
        };
    }

    _check = () => {
        if (this.state.phone == '') {
            this.refs.toast.show('请输入手机号');
            return false;
        }  else if (this.state.pwd == '') {
            this.refs.toast.show('请输入密码');
            return false;
        }
        return true;
    }

    _checkLength = (str) => {
        if (str.length < 6 || str.length.length > 24) return false;
        else return true;
    }

    _login = () => {
        if (this._check()) {
            Common.login(this.state.phone, this.state.pwd, (result) => {
                this.refs.toast.show('登录成功');
                Storage.save('token', result.token).then(()=>{
                    const { navigate, state } = this.props.navigation;
                    if (state.params.refresh) state.params.refresh(result.token);
                    setTimeout(function() {
                        navigate('Main');
                    }, 400);
                });                
            });
        }
    }

    _regist = () => {
        const { navigate, state } = this.props.navigation;
        navigate('Regist', { isVisible: true, title: '注册', refresh: (token)=>{
            if (state.params.refresh) state.params.refresh(token);
        }});
    }

    _forgetPwd = () => {
        
    }

    leftAction = () => {
        const { navigate, goBack, state } = this.props.navigation;
        if (state.params.from == 'setting') navigate('Main');
        else goBack();
    }

    rightAction = () => {

    }

    _wxLogin = () => {
        console.log('wx login');        
    }

    _qqLogin = () => {
        console.log('qq login');        
    }

    _wbLogin = () => {
        console.log('wb login');        
    }

    render() {
        return (
            <View style={styles.container}>
                <Navigator1 leftText = '返回' centerText = '密码登录'  rightText = '免密登录' leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
                <TextInput placeholder="输入手机号" keyboardType='numeric' style={styles.phone} onChangeText={(text)=>this.setState({phone: text})} />
                <TextInput placeholder="输入密码" secureTextEntry={true} style={styles.password} onChangeText={(text)=>this.setState({pwd: text})}  />
                <Button text="登录" style={styles.btn} containerStyle={styles.btnContainer} onPress={this._login} />
                <View style={styles.other}>
                    <Button text="注册" style={styles.registBtn} containerStyle={styles.registBtnContainer} onPress={this._regist} />
                    <Button text="忘记密码" style={styles.forgetBtn} containerStyle={styles.forgetBtnContainer} onPress={this._forgetPwd} />
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.otherLogin}>其他方式登录</Text>
                    <View style={styles.btns}>
                        <ImageButton source={require('../../images/icon-wx.jpg')} style={styles.imageButton} onPress={this._wxLogin} />
                        <ImageButton source={require('../../images/icon-qq.jpg')} style={styles.imageButton} onPress={this._qqLogin} />
                        <ImageButton source={require('../../images/icon-wb.jpg')} style={styles.imageButton} onPress={this._wbLogin} />
                    </View>
                </View>
                <Toast ref="toast" position="center" />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    tip: {
        fontSize: 13,
        textAlign: 'center',
        margin: 10
    },
    phone: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        height: 50,
        fontSize: 15,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    password: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 50,
        fontSize: 15,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    btnContainer: {
        borderColor: Colors.highlight,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: Colors.highlight,
        width: deviceW - 20,
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {        
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    other: {
        flex: 1,
        height: 30,
        flexDirection: 'row',
        marginTop: 20
    },
    registBtnContainer: {
        flex: 1,
        left: 20,

    },
    registBtn: {
        fontSize: 15,
        color: '#ea642e'
    },
    forgetBtnContainer: {
        right: 20,
        
    },
    forgetBtn: {
        fontSize: 15,
        color: '#828282'
    },
    bottom: {
        bottom: 30
    },
    otherLogin: {
        margin: 20,
        textAlign: 'center',
        color: '#828282'
    },
    btns: {
        flexDirection: 'row',
        marginLeft: 60,
        marginRight: 60
    },
    imageButton: {
        width: 50,
        height: 50,
        margin: (deviceW-150-120)/6
    }
});
