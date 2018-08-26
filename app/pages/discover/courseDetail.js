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

import Button from '../../components/Button';
import Colors from '../../components/Colors';
import VideoPlayer from '../../components/VideoPlayer';
import Common from '../../utils/Common';
import { formatDateString } from '../../utils/FormatUtil';

const deviceW = Dimensions.get('window').width;

export default class CourseDetail extends Component<{}> {
    // 构造
    constructor(props) {
        super(props);
        this.state = {
            detail : {}
        };
        
    }

    componentWillMount() {
        //Orientation.lockToLandscape();
        const { params } = this.props.navigation.state;
        //var data = JSON.parse(params.data);
        Common.getDetail(params.id, params.type, (result)=>{
            // console.log(result);
            this.setState({
                detail : result
            });
        });
    }

    _onOrientationChanged = (isFullScreen) => {
        if (isFullScreen) {
            Orientation.lockToPortrait();
        } else {
            Orientation.lockToLandscape();
        }
    }

    _onClickBackButton = () => {
        this.props.navigation.goBack();
    }

    _onLayoutChange = (event) => {
        let {x, y, width, height} = event.nativeEvent.layout;
        let isLandscape = (width > height);
        if (isLandscape) {
            this.setState({
                isFullScreen: true,
            });
            this.videoPlayer.updateLayout(width, height, true);
        } else {
            this.setState({
                isFullScreen: false
            });
            this.videoPlayer.updateLayout(width, width * 9/16, false);
        }
        //Orientation.unlockAllOrientations();
    }

    readFree = () => {

    }

    subscribe = () => {

    }

    render() {
        let detail = this.state.detail;
        console.log(detail);
        let subscribeTxt = '加入学习￠' + detail.column_price/100;
        let video;
        if (detail.column_video_media) {
            video = <VideoPlayer
                            ref={(ref) => this.videoPlayer = ref}
                            videoURL={detail.column_video_media}
                            videoTitle={detail.column_title}
                            videoCover={detail.column_cover}
                            onChangeOrientation={this._onOrientationChanged}
                            onTapBackButton={this._onClickBackButton}
                        />;
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
                        {video}
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
                </ScrollView>
                <View style={styles.bottom}>
                    <Button text="免费试读" onPress={this.readFree} 
                        style={styles.readBtn} containerStyle={styles.readContainer} />
                    <Button text={subscribeTxt} onPress={this.subscribe} 
                        style={styles.subscribeBtn} containerStyle={styles.subscribeContainer} />
                </View>                
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
    header: {
        backgroundColor:'white',
        width: deviceW,
        height: 55
    },
    headerTitle : {
        width: deviceW,
        height: 30,
        marginTop: 25,
        fontSize: 20,
        color: 'black',
        fontWeight: '400',
        textAlign: 'center'
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
    }
});