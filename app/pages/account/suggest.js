/**
* 意见与建议
**/
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

export default class Suggest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email : '',
            content : ''
        };
    }

    _check = () => {
        if (this.state.email == '') {
            this.refs.toast.show('请输入您的邮箱或手机号');
            return false;
        } else if (this.state.content == '') {
            this.refs.toast.show('请输入您的意见或建议');
            return false;
        }
        return true;
    }

    _checkLength = (str) => {
        if (str.length < 6 || str.length.length > 24) return false;
        else return true;
    }

    _send = () => {
        if (this._check()) {
            const { navigate, state } = this.props.navigation;
            Common.suggest(this.state.name, this.state.email, this.state.content, (result) => {
                if (result.code == 0) {
                    this.refs.toast.show('发送成功');
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
                <TextInput placeholder="请描述您的意见或建议" multiline={true} style={[styles.inputStyle, styles.contents]} onChangeText={(text)=>this.setState({content: text})}  />
                <TextInput placeholder="您的邮箱或手机号" style={styles.inputStyle} onChangeText={(text)=>this.setState({email: text})}  />
                <TextInput placeholder="您的称呼" style={styles.inputStyle} onChangeText={(text)=>this.setState({name: text})}  />
                <Button text="发送" style={styles.btn} containerStyle={styles.btnContainer} onPress={this._send} />
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
    contents: {
    	height: 200
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
