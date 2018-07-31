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

import Orientation from 'react-native-orientation';

import Common from '../../utils/Common';

const deviceW = Dimensions.get('window').width;

export default class Detail extends Component<{}> {
    // 构造
    constructor(props) {
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onBuffer = this.onBuffer.bind(this);
        // 初始状态
        this.state = {
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
            isBuffering: false,
            description: '',
            count: '100',
            keyPoints: ''
        };
    }

    componentWillMount() {
        //Orientation.lockToLandscape();
        const { params } = this.props.navigation.state;
        //var data = JSON.parse(params.data);
        Common.getTrainDetail(params.id, (result)=>{
            this.setState({
                description : result.description,
                count : result.count,
                keyPoints : result.key_points
            });
        });
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
                <View style={styles.content}>
                    <Text style={styles.title}>介绍</Text>
                    <Text style={styles.desc}>{this.state.description}</Text>
                    <Text style={styles.title}>动作次数</Text>
                    <Text style={styles.desc}>{this.state.count}次</Text>
                    <Text style={styles.title}>要点</Text>
                    <Text style={styles.desc}>{this.state.keyPoints}</Text>
                </View>
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
        width: deviceW,
        height: 210,
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