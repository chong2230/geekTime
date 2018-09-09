import React, {Component,PropTypes} from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Alert,
    Dimensions,
    DeviceEventEmitter
} from 'react-native';

import openShare from 'react-native-open-share';
import ImageButton from './ImageButton';

var deviceW = Dimensions.get('window').width;

export default  class ThirdPartyLogin extends Component {

    constructor(props) {
        super(props)     
    }

    _wechatLogin = () => {
        var _this = this;
        openShare.wechatLogin();

        if(!_this.wechatLogin) {
          _this.wechatLogin = DeviceEventEmitter.addListener(
            'managerCallback',
            (response) => {
                let data = JSON.stringify(response);
                Alert.alert(
                    'response',
                    JSON.stringify(response)
                );
                _this.props.loginCallback('wechat', data);
                _this.wechatLogin.remove();
                delete _this.wechatLogin;
            }
          );
        }
    }

    _qqLogin = () => {
        var _this = this;
        openShare.qqLogin();

        if(!_this._qqLogin) {
          _this._qqLogin = DeviceEventEmitter.addListener(
            'managerCallback',
            (response) => {
                let data = JSON.stringify(response);
                Alert.alert(
                    'response',
                    JSON.stringify(response)
                );
                _this.props.loginCallback('qq', data);
                _this._qqLogin.remove();
                delete _this._qqLogin;
            }
          );
        }
    }

    _weiboLogin = () => {
        var _this = this;
        openShare.weiboLogin();

        if(!_this._weiboLogin) {
          _this._weiboLogin = DeviceEventEmitter.addListener(
            'managerCallback',
            (response) => {
                let data = JSON.stringify(response);
                Alert.alert(
                    'response',
                    data
                );
                _this.props.loginCallback('weibo', data);
              
              _this._weiboLogin.remove();
              delete _this._weiboLogin;
            }
          );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.otherLogin}>其他方式登录</Text>
                <View style={styles.btns}>
                    <ImageButton source={require('../images/icon-wx.jpg')} style={styles.imageButton} onPress={this._wechatLogin} />
                    <ImageButton source={require('../images/icon-qq.jpg')} style={styles.imageButton} onPress={this._qqLogin} />
                    <ImageButton source={require('../images/icon-wb.jpg')} style={styles.imageButton} onPress={this._weiboLogin} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
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