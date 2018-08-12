import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions
} from 'react-native';

import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Common from '../../utils/Common';
import Toast from '../../utils/Toast';

export default class UpdatePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oldPwd : '',
            newPwd : '',
            confirmPwd : ''
        };
    }

    _checkPwd = () => {
        if (this.state.oldPwd == '' || this.state.newPwd == '') {
            this.refs.toast.show('请输入密码');
            return false;
        } else if (!this._checkLength(this.state.oldPwd) || !this._checkLength(this.state.newPwd)) {
            this.refs.toast.show('请输入6-24位的密码');
            return false;
        } else if (this.state.newPwd != this.state.confirmPwd) {
            this.refs.toast.show('两次输入的密码不一致');
            return false;
        }
        return true;
    }

    _checkLength = (str) => {
        if (str.length < 6 || str.length.length > 24) return false;
        else return true;
    }

    _changePwd = () => {
        if (this._checkPwd()) {
            Common.changePwd(this.state.oldPwd, this.state.newPwd, (result) => {
                this.refs.toast.show('修改密码成功');
                const { goBack } = this.props.navigation;
                setTimeout(function() {
                    goBack();
                }, 500);
                
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tip}>密码长度6~24位，可以是数字、字母等任意字符</Text>
                <TextInput placeholder="输入旧密码" secureTextEntry={true} style={styles.password} onChangeText={(text)=>this.setState({oldPwd: text})} />
                <TextInput placeholder="输入新密码" secureTextEntry={true} style={styles.password} onChangeText={(text)=>this.setState({newPwd: text})}  />
                <TextInput placeholder="确认新密码" secureTextEntry={true} style={styles.password} onChangeText={(text)=>this.setState({confirmPwd: text})}  />
                <Button text="完成" style={styles.btn} containerStyle={styles.btnContainer} onPress={this._changePwd} />
                <Toast ref="toast" position="center" />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    tip: {
        fontSize: 13,
        textAlign: 'center',
        margin: 10
    },
    password: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        fontSize: 15,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    },
    btnContainer: {
        borderColor: Colors.highlight,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: Colors.highlight,
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {        
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
});
