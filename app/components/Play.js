/**
 * Created by cluo on 2017/12/27.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    StatusBar,
    Alert,
    ListView,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

import Video from 'react-native-video';
import Orientation from 'react-native-orientation';

import Common from './Lib/Common';

const deviceW = Dimensions.get('window').width;

export default class Play extends Component<{}> {
    // 构造
    constructor(props) {
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onBuffer = this.onBuffer.bind(this);
        this.index = 0;
        this.videos = [
            'http://ojiastorevideos.bs2dl.huanjuyun.com/629cb8a9b7bccdb10e9987eb648a2915.mp4',
            'http://dw-w6.dwstatic.com/55/10/1619/1946139-100-1462849389.mp4',
            'http://dw-w6.dwstatic.com/49/4/1617/1838196-100-1461898619.mp4',
            'http://dw-w6.dwstatic.com/53/2/1619/1946120-100-1462849219.mp4'
        ];
        // 初始状态
        this.state = {
            url: this.videos[this.index],
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            controls: false,
            paused: true,
            skin: 'custom',
            ignoreSilentSwitch: null,
            isBuffering: false
        };
    }

    componentWillMount() {
        Orientation.lockToLandscape();
        const { params } = this.props.navigation.state;
        //var data = JSON.parse(params.data);
        //Common.getSubjectDetail(params.id, (result)=>{
        //    this.setState({
        //        description : result.description,
        //        count : result.count,
        //        keyPoints : result.key_points
        //    });
        //});
    }

    onLoad(data) {
        console.log('On load fired!');
        this.setState({duration: data.duration});
    }

    onProgress(data) {
        this.setState({currentTime: data.currentTime});
    }

    onBuffer({ isBuffering }: { isBuffering: boolean }) {
        this.setState({ isBuffering });
    }

    render() {
        return (
            <View style={styles.container}>
                <Video source={{uri: this.state.url}}   // Can be a URL or a local file. require("./../../broadchurch.mp4")
                       ref={(ref) => {
                         this.player = ref
                       }}                                      // Store reference
                       //rate={this.state.rate}
                       //paused={this.state.paused}
                       //volume={this.state.volume}
                       //muted={this.state.muted}
                       //ignoreSilentSwitch={this.state.ignoreSilentSwitch}
                       //resizeMode={this.state.resizeMode}

                       rate={1.0}                              // 0 is paused, 1 is normal.
                       volume={1.0}                            // 0 is muted, 1 is normal.
                       muted={false}                           // Mutes the audio entirely.
                       paused={false}                          // Pauses playback entirely.
                       resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                       repeat={false}                           // Repeat forever.
                       playInBackground={false}                // Audio continues to play when app entering background.
                       playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                       ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                       progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                       onLoad={this.onLoad}
                       onBuffer={this.onBuffer}
                       onProgress={this.onProgress}
                       onEnd={() => {
                           //Alert.alert('Done!')
                           this.index++;
                           if (this.index > this.videos.length) return;
                           this.setState({
                                url : this.videos[this.index]
                           });
                       }}
                       style={styles.backgroundVideo} />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
        //width: deviceW,
        //height: 210,
        //resizeMode: 'stretch'

    },
    content: {
        position: 'absolute',
        marginTop: 210,
    },
    item: {

    },
    title: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 15
    },
    desc: {
        marginLeft: 10,
        marginTop: 10
    },
});