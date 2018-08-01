import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    Image,
    Dimensions,
    TouchableOpacity,
    Navigator,
} from 'react-native';

import Navigator1 from '../../utils/navigator1';

var {width,height} = Dimensions.get('window');

export default class Account_notlogin extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            access_token:null
        };
    }

    loginAction = () =>{
        const { navigate } = this.props.navigation;
        navigate('Login');
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Navigator1 leftText = '        '  centerText = '我'  rightText = '设置' leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>

                <View>
                    <Image source={require('../../images/account/person_bg.jpg')} style={{width:width,height:200}} />
                    <Image source={require('../../images/account/prrson.png')} style={{width:50,height:50,position:'absolute',marginTop:75,borderRadius:25,alignSelf:'center'}} />
                </View>

                <View style={{alignItems:'center',marginTop:100}}>
                    <Text style={{color:'#CCCCCC'}}>登录后.你的个人信息</Text>
                    <Text style={{color:'#CCCCCC'}}>会显示在这里,展示给别人</Text>
                </View>

                <View style={{flexDirection:'row',marginTop:50,justifyContent:'space-around',marginLeft:50,marginRight:50}}>
                    <TouchableOpacity onPress={()=>this.loginAction()}>
                        <Image source={require('../../images/account/登录.png')} style={{width: 60,height:30}}/>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});