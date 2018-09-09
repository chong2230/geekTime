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

export default class ForgetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone : '',
            code : ''
        };
    }

    _check = () => {
        if (this.state.phone == '') {
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

    _next = () => {
        if (this._check()) {
            Common.safeValidate(this.state.phone, this.state.code, (result) => {
                if (result.code == 0) {
                    this.refs.toast.show('验证成功');
                    const { navigate, state } = this.props.navigation;
                    setTimeout(function() {
                        navigate('SetPassword', { isVisible: true, title: '设置密码', refresh: (token)=>{
                            if (state.params.refresh) state.params.refresh(token);
                        }});
                    }, 400);
                }
            });
        }
    }

    _getCode = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="输入手机号" keyboardType='numeric' style={styles.inputStyle} onChangeText={(text)=>this.setState({phone: text})} />
                <View style={styles.codeView}>
                    <TextInput placeholder="输入验证码" secureTextEntry={true} style={styles.codeInputStyle} onChangeText={(text)=>this.setState({code: text})}  />
                    <Button text="获取验证码" style={styles.codeBtn} containerStyle={styles.codeBtnContainer} onPress={this._getCode} />
                </View>
                <Button text="下一步" style={styles.btn} containerStyle={styles.btnContainer} onPress={this._next} />                
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
