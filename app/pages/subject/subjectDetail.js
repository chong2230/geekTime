import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    // Button,
    Image,
    View,
    ScrollView,
    StatusBar,
    Alert,
    WebView,
    FlatList,
    Dimensions
} from 'react-native';

import Orientation from 'react-native-orientation';
import HTMLView from 'react-native-htmlview';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../components/Colors';
import Button from '../../components/Button';
import Common from '../../utils/Common';
import Storage from '../../utils/Storage';
import { formatDateString } from '../../utils/FormatUtil';

const deviceW = Dimensions.get('window').width;

export default class SubjectDetail extends Component<{}> {
    // 构造
    constructor(props) {
        super(props);
        this.state = {
            detail : {},
            latest : []
        };
        
    }

    componentWillMount() {
        //Orientation.lockToLandscape();
        const { params } = this.props.navigation.state;
        //var data = JSON.parse(params.data);
        Common.getDetail(params.id, params.type, (result)=>{
            this.setState({
                detail : result
            });
        });
        Common.getLatest(params.id, params.type, (result)=>{
            this.setState({
                latest : result.list
            });
        });
    }

    _readFree = () => {
        const { navigate, state } = this.props.navigation;
        navigate("Articles", {isVisible: true, title: this.state.detail.column_title, 
            cid: this.state.detail.id, type: state.params.type})
    }

    _subscribe = () => {
        let self = this;
        Storage.get('token').then((val)=>{
            if (val) {
                self._goBalance();
            } else {
                self._goLogin();
            }
        });
    }

    _goLogin = () => {
        const { navigate } = this.props.navigation;
        navigate('Login', { isVisiable: true, title: '密码登录', transition: 'forVertical'});
    }

    _goBalance = () => {
        const { navigate, state } = this.props.navigation;
        navigate('Balance', { isVisiable: true, title: '结算台', 
            detail: JSON.stringify(this.state.detail), cid: this.state.detail.id, 
            type: state.params.type});   
    }

    // 开始阅读
    _startRead = () => {
        const { navigate, state } = this.props.navigation;
        navigate("Articles", {isVisible: true, title: this.state.detail.column_title, 
            cid: this.state.detail.id, type: state.params.type});
    }

    render() {
        let detail = this.state.detail;
        let bottom;
        let subscribeTxt;
        // 没有购买时，显示订阅按钮
        if (!detail.is_bought) {
            subscribeTxt = '订阅￠' + detail.column_price/100;
            bottom = (                
                <View style={styles.bottom}>
                    <Button text="免费试读" onPress={this._readFree} 
                        style={styles.readBtn} containerStyle={styles.readContainer} />
                    <Button text={subscribeTxt} onPress={this._subscribe} 
                        style={styles.subscribeBtn} containerStyle={styles.subscribeContainer} />
                </View>
            );
        } else {
            bottom = (                
                <View style={styles.bottom}>                    
                    <Button text="开始阅读" onPress={this._startRead} 
                        style={styles.subscribeBtn} containerStyle={[styles.subscribeContainer, styles.startContainer]} />
                </View>
            );
        }
        let latestView = [];
        for (let i=0; i<this.state.latest.length; i++) {
            let d = this.state.latest[i];
            let item = (
                <View key={d.id} style={styles.latestItem}>
                    <View style={styles.latestTop}>
                        <Icon
                          name="hand-o-right"
                          color={Colors.highlight}
                          backgroundColor="white"
                          size={15}
                          >
                        </Icon>  
                        <Text style={styles.latestItemTitle}>{d.article_title}</Text>
                    </View>
                    <Text style={styles.latestCtime}>{formatDateString(d.article_ctime)}</Text>
                    <Text numberOfLines={1} style={styles.latestSummary}>{d.article_summary}</Text>
                </View>
            );
            latestView.push(item);
        }
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <StatusBar
                        animated={true}
                        hidden={false}
                        backgroundColor={'white'}
                        translucent={true}
                        barStyle={'dark-content'}>
                    </StatusBar>    
                    <View>
                        <Image source={{uri:detail.column_cover_inner}} style={styles.headerImg} />
                    </View>
                    <View style={styles.author}>
                        <View style={styles.authorAvatar}>
                            <Image resizeMode={'stretch'} source={{uri:detail.author_header}}
                                style={styles.avatarImage}/>
                        </View>
                        <View style={styles.authorInfo}>
                           <Text style={styles.authorName}>{detail.author_name}</Text>
                           <Text style={styles.authorHonor}>{detail.author_intro}</Text> 
                        </View>
                        <Text style={styles.subCount}>{detail.sub_count}购买</Text>
                    </View>
                    <HTMLView value={detail.column_intro} style={styles.htmlStyle} />
                    <View style={styles.latest}>
                        <Text style={styles.latestTitle}>最近更新</Text>
                        {latestView}
                    </View>
                </ScrollView>
                {bottom}                
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        backgroundColor: '#ECEFF2'
    },
    headerImg: {
        width: deviceW,
        height:200,
        justifyContent:'center',
        alignItems:'center'
    },
    author: {
        width: deviceW,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        backgroundColor: 'white'
    },
    authorAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: '#ff5a05',
        borderWidth: 1,
        backgroundColor: 'white',
        flexShrink: 0,
        justifyContent: 'center'
    },
    avatarImage: {
        width: 36,
        height: 36,
        borderRadius: 18,
        left: 1
    },
    authorInfo: {
        width: deviceW-150,
        marginTop: 10,
        marginLeft: 10
    },
    authorName: {
        fontSize: 13,
        color: 'black',
        textAlign: 'left'
    },
    authorHonor: {
        fontSize: 13,
        color: '#828282',
    },
    subCount: {
        fontSize: 13,
        color: '#828282',
        flex: 1
    },
    htmlStyle: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    latest: {
        marginTop: 10,
        backgroundColor: 'white'  
    }, 
    latestTitle: {
        fontSize: 20, 
        fontWeight: '500',
        marginTop: 10,
        marginLeft: 10
    },
    latestItem: {
        marginLeft: 10
    },
    latestTop: {
        marginTop: 10,
        flexDirection: 'row',
    },
    latestItemTitle: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 10
    },
    latestCtime: {
        marginTop: 6,        
        fontSize: 13,
        color: '#828282'
    },
    latestSummary: {
        marginTop: 6,
        marginBottom: 5,
        fontSize: 13,
        color: '#828282'
    },
    bottom: {
        flexDirection: 'row'
    },
    readContainer: {
        borderColor: Colors.highlight,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: 'white',
        width: deviceW/3 - 20,
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    readBtn: {        
        color: Colors.highlight,
        fontSize: 16,
        textAlign: 'center',
    },
    subscribeContainer: {
        borderColor: Colors.highlight,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: Colors.highlight,
        width: deviceW * 2 / 3 - 20,
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subscribeBtn: {        
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    startContainer: {
        width: deviceW - 20
    }
});