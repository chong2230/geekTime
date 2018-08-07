/**
 * Created by cluo on 2017/12/24.
 */
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
    ScrollView
} from 'react-native';

var {width,height} = Dimensions.get('window');
// import Navigator1 from '../../utils/navigator1'
import AccountItem from './accountItem';
// import Info from './infoItem'
// import Setting from './setting'
export default class Account_logined extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            access_token:null,
            statuses_count:0, //微博数
            friends_count:0,  //关注数
            followers_count:0, //粉丝
            name:'',  //用户名
            avatar_large:'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png', //头像
            description:'',  //个人描述
            // money: 0,   // 账户余额
            // ticket: 0   // 礼券
        };
    }

    componentDidMount() {
        //获取用户的uid
        //取出本地化的access_token
        AsyncStorage.getItem(
            'access_token',
            (error,result)=>{
                if (!error){
                    this.setState({
                        access_token:result
                    })
                }
            }
        )
        AsyncStorage.getItem(
            'uid',
            (error,result)=>{
                if (!error){
                    let url = 'https://api.weibo.com/2/users/show.json?access_token=' + this.props.access_token + '&uid=' + result
                    fetch(url)
                        .then((response) => response.json())
                        .then((json) => {
                            if(!json.error){
                                this.setState({
                                    avatar_large:json.avatar_large,
                                    statuses_count:json.statuses_count,
                                    friends_count:json.friends_count,
                                    followers_count:json.followers_count,
                                    name:json.name,
                                    avatar_large:json.avatar_large,
                                    description:json.description == ''? '简介: 暂无介绍' : json.description
                                })
                            }
                        })
                }
            }
        )
    }

    _showBalance = () => {

    }

    login = () => {
        const { navigate } = this.props.navigation;
        navigate('Login', { transition: 'forVertical' });
    }

    goSetting = () => {
        const { navigate } = this.props.navigation;
        navigate('Setting');
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../../images/account/person_bg.jpg')} style={styles.person} />
                </View>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.login()}>
                        <View style={styles.avatar}>
                            <Image source={require('../../images/defaultAvatar.jpg')} style={styles.avatarIcon} />
                            <View style={styles.avatarInfo}>
                                <Text style={styles.name}>{this.state.name || '未登录'}</Text>
                                <Text style={styles.description}>{this.state.description || '点击头像登录'}</Text>
                            </View>
                        </View>    
                    </TouchableOpacity>                    
                    <View style={styles.separator}></View>
                    <AccountItem txt1 = "账户" count={this.state.money} source = {require('../../images/account/mine01.png')} onPress={this._showBalance}/>
                    <AccountItem txt1 = "已购" source = {require('../../images/account/mine02.png')}/>
                    <AccountItem txt1 = "礼券" count={this.state.ticket} source = {require('../../images/account/mine03.png')}/>
                    <AccountItem txt1 = "分享有赏" source = {require('../../images/account/mine04.png')}/>
                    <View style={styles.separator}></View>                    
                    
                    <AccountItem txt1 = "我的笔记" source = {require('../../images/account/mine05.png')}/>
                    <AccountItem txt1 = "我的留言" source = {require('../../images/account/mine06.png')}/>
                    <AccountItem txt1 = "我的收藏" source = {require('../../images/account/mine07.png')}/>
                    <AccountItem txt1 = "我的下载" source = {require('../../images/account/mine08.png')}/>
                    <View style={styles.separator}></View>
                    <AccountItem txt1 = "设置" source = {require('../../images/account/mine09.png')} onPress={this.goSetting}/>                    
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
    description: {
        color: '#CCCCCC',
        fontSize: 11, 
        top: 5
    },
    separator: {
        backgroundColor: '#ECEFF2',
        height: 10
    }
});
