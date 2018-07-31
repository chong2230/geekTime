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
import Navigator1 from '../../utils/navigator1'
import AccountItem from './accountItem'
import Info from './infoItem'
import Setting from './setting'
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
            money: 0,   // 账户余额
            ticket: 0   // 礼券
        };
    }

    _showBalance = () => {

    }

    render() {
        return (
            <View style={{flex:1}}>
                <Navigator1 leftText = '' centerText = '我'  rightText = '        设置' leftAction = {()=>this.leftAction()} rightAction = {() => this.rightAction()}/>
                <ScrollView>
                    {/*个人信息*/}
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Image source={{uri:this.state.avatar_large}} style={{width:60,height:60,borderRadius:30}} />
                            <View style={{justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold'}}>{this.state.name}</Text>
                                <Text style={{color:'#CCCCCC',fontSize:11}}>{this.state.description}</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#F0F0F0',height:1}}></View>
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <Info txt1 = {this.state.statuses_count} txt2 = '微博' />
                            <Info txt1 = {this.state.friends_count} txt2 = '关注' />
                            <Info txt1 = {this.state.followers_count} txt2 = '粉丝' />
                        </View>
                        <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
                    </View>
                    <MineItem txt1 = "账户" count={this.state.money} source = {require('../../images/account/mine01.png')} onPress={this._showBalance}/>
                    <MineItem txt1 = "已购" source = {require('../../images/account/mine02.png')}/>
                    <MineItem txt1 = "礼券" count={this.state.ticket} source = {require('../../images/account/mine03.png')}/>
                    <MineItem txt1 = "分享有赏" source = {require('../../images/account/mine04.png')}/>
                    <View style={{backgroundColor:'#F0F0F0',height:5}}></View>                    
                    
                    <MineItem txt1 = "我的笔记" source = {require('../../images/account/mine05.png')}/>
                    <MineItem txt1 = "我的留言" source = {require('../../images/account/mine06.png')}/>
                    <MineItem txt1 = "我的收藏" source = {require('../../images/account/mine07.png')}/>
                    <MineItem txt1 = "我的下载" source = {require('../../images/account/mine08.png')}/>
                    <View style={{backgroundColor:'#F0F0F0',height:5}}></View>
                    <MineItem txt1 = "设置" source = {require('../../images/account/mine09.png')}/>                    
                </ScrollView>
            </View>
        );
    }



    leftAction = () =>{
        alert('添加好友')
    }

    rightAction = () =>{
        this.props.mynavigator.push({
            component:Setting,
            passProps:{
                access_token:this.props.access_token
            }
        })
    }


    componentDidMount() {
        //获取用户的uid
        //取出本地化的access_token
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
