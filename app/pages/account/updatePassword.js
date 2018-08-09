import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Alert
} from 'react-native';

import Button from '../../components/Button';
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
            Toast.show('请填写密码');
        } else if (!this._checkLength(this.state.oldPwd) || !this._checkLength(this.state.newPwd)) {
            Toast.show('请输入6－24位的密码');
        } else if (this.state.newPwd != this.state.confirmPwd) {
            Toast.show('两次输入的密码不一致');
        }
    }

    _checkLength = (str) {
        if (str.length < 6 || str.length.length > 24) return false;
        else return true;
    }

    _changePwd = () => {
        if (this._checkPwd()) {
            Common.changePwd(this.state.oldPwd, this.state.newPwd, (result) => {
                Toast.show('修改密码成功');
                const { goBack } = this.props.navigation;
                goBack();
            });
        }
    }

    render() {
        return (
            <View>
                <Text>密码长度6～24位，可以是数字、字母等任意字符</Text>
                <TextInput placeholder="输入旧密码" password={true} onChangeText={(text)=>this.setState({oldPwd: text})} />
                <TextInput placeholder="输入新密码" password={true} onChangeText={(text)=>this.setState({newPwd: text})}  />
                <TextInput placeholder="确认新密码" password={true} onChangeText={(text)=>this.setState({confirmPwd: text})}  />
                <Button text="完成" style={styles.btn} onPress={this._changePwd} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    btn: {

    }
});
