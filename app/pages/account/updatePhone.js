import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
    DeviceEventEmitter
} from 'react-native';

import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Common from '../../utils/Common';
import Toast from '../../utils/Toast';

export default class UpdatePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phone : ''
        };
    }

    _check = () => {
        var reg = /^1\d{10}$/; 
        if (this.state.phone == '') {
            this.refs.toast.show('请输入手机号');
            return false;
        } else if (!reg.test(this.state.phone)) {
            this.refs.toast.show('手机号格式不正确');
            return false;
        }
        return true;
    }

    _changePhone = () => {
        if (this._check()) {
            let user = {
                phone : this.state.phone
            };
            Common.updateUser(user, (result) => {
                if (result.code == 0) {
                    this.refs.toast.show('修改成功');
                    DeviceEventEmitter.emit('refreshAccount', user);
                    const { goBack } = this.props.navigation;
                    setTimeout(function() {
                        goBack();
                    }, 500);
                } else {
                    this.refs.toast.show(result.msg);
                }
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tip}>更换手机号后，您需要使用新的手机号登录</Text>
                <TextInput placeholder="输入新手机号" style={styles.phone} onChangeText={(text)=>this.setState({phone: text})} />
                <Button text="完成" style={styles.btn} containerStyle={styles.btnContainer} onPress={this._changePhone} />
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
    phone: {
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
