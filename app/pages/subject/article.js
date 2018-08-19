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
const imgHeight = deviceW*640/1142;

export default class Article extends Component<{}> {
    // 构造
    constructor(props) {
        super(props);
        this.state = {
            detail : {},    // 课程详情
            data: {}        // 文章详情
        };
        
    }

    componentWillMount() {
        //Orientation.lockToLandscape();
        const { params } = this.props.navigation.state;
        Common.getDetail(params.cid, params.type, (result)=>{
            this.setState({
                detail : result
            });
        });
        Common.getArticle(params.id, (result)=>{
            this.setState({
                data : result
            });
        });
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
            detail: JSON.stringify(this.state.detail), cid: state.params.cid});   
    }

    render() {
        let detail = this.state.detail;
        let data = this.state.data;
        let bottom;
        // 没有购买时，显示订阅按钮
        if (!detail.is_bought) {
            let subscribeTxt = '订阅￠' + detail.column_price/100;
            bottom = (
                <View style={styles.bottom}>                    
                    <Button text={subscribeTxt} onPress={this._subscribe} 
                        style={styles.subscribeBtn} containerStyle={styles.subscribeContainer} />
                </View> 
            );
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

                    <Text numberOfLines={2} style={styles.title}>{data.article_title}</Text>
                    <View style={styles.viewStyle}>
                        <Text style={styles.time}>{formatDateString(data.article_ctime)}</Text>
                        <Text style={styles.authorName}>{data.author_name}</Text>
                    </View>
                    <Image resizeMode={'stretch'} source={{uri:data.article_cover}}
                           style={styles.img}/>                    
                    <HTMLView value={data.article_content || ''} style={styles.htmlStyle} />                    
                    <Text style={{height: 100}}></Text>
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
        backgroundColor: Colors.bg,
        margin: 10
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 10
    },
    viewStyle: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        height: 30
    },
    time: {
        fontSize: 13,
        color: Colors.gray,
        // margin: 10
    },
    authorName: {
        fontSize: 13,
        color: Colors.gray,
        marginLeft: 10
    },
    img: {
        width: deviceW-20,
        height: imgHeight,
        resizeMode: 'stretch'
    },    
    htmlStyle: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white'
    },    
    bottom: {
        flexDirection: 'row'
    },
    subscribeContainer: {
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
    subscribeBtn: {        
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
});