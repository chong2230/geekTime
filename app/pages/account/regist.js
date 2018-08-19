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

export default class Regist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uname : '',
            phone : '',
            code : ''
        };
    }

    _check = () => {
        if (this.state.uname == '') {
            this.refs.toast.show('请输入昵称');
            return false;
        } else if (this.state.phone == '') {
            this.refs.toast.show('请输入手机号');
            return false;
        }  else if (this.state.code == '') {
            this.refs.toast.show('请输入验证码');
            return false;
        }
        return true;
    }

    _checkLength = (str) => {
        if (str.length < 6 || str.length.length > 24) return false;
        else return true;
    }

    _regist = () => {
        if (this._check()) {
            Common.regist(this.state.uname, this.state.phone, this.state.code, (result) => {
                this.refs.toast.show('注册成功');
                global.token = result.token;
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

    _getCode = () => {

    }

    _getService = () => {
        const { navigate } = this.props.navigation;
        navigate('Service', {isVisiable: true, title: ''});
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
                <TextInput placeholder="输入昵称" style={styles.name} onChangeText={(text)=>this.setState({uname: text})} />
                <TextInput placeholder="输入手机号" keyboardType='numeric' style={styles.inputStyle} onChangeText={(text)=>this.setState({phone: text})} />
                <View style={styles.codeView}>
                    <TextInput placeholder="输入验证码" secureTextEntry={true} style={styles.codeInputStyle} onChangeText={(text)=>this.setState({code: text})}  />
                    <Button text="获取验证码" style={styles.codeBtn} containerStyle={styles.codeBtnContainer} onPress={this._getCode} />
                </View>
                <Button text="完成" style={styles.btn} containerStyle={styles.btnContainer} onPress={this._regist} />
                <View style={styles.other}>
                    <Text style={styles.tip}>点击『完成』，即表示您同意并愿意遵守</Text>
                    <Button text="《极客邦用户协议》" style={styles.serviceBtn} containerStyle={styles.serviceBtnContainer} onPress={this._getService} />
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
    name: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
        height: 50,
        fontSize: 15,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    inputStyle: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 50,
        fontSize: 15,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    codeView: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 50,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    codeInputStyle: {
        flex: 1
    },
    codeBtnContainer: {
        right: 10,
        paddingLeft: 10,
        borderLeftColor: '#e0e0e0',
        borderLeftWidth: 1
    },
    codeBtn: {
        fontSize: 15,
        color: Colors.highlight
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
        color: Colors.highlight
    },
    tip: {
        marginLeft: 10,
        fontSize: 13,
        color: '#828282'
    },
    serviceBtnContainer: {
        // right: 20,
        
    },
    serviceBtn: {
        fontSize: 13,
        color: '#3584d9'
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
