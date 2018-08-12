/**
 * 个人信息
 */
 import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Platform,
    NativeModules,
    AsyncStorage
} from 'react-native';

import DisplayItem from '../../components/DisplayItem';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            info: {}
        });
    }
    componentWillMount() {
        const {state} = this.props.navigation;
        let info = JSON.parse(state.params.info);
        this.setState({
        	info : info
        });
    }

    render() {        
        return (
            <View style={styles.container}>
            	<View style={styles.avatar}>
            		<Text>头像</Text>
            	</View>
            	<View style={styles.separator}></View>
            	<DisplayItem txt1="昵称" txt3={this.state.info.uname} />
            	<DisplayItem txt1="性别" txt3={this.state.info.sex || "未设定"} />
            	<DisplayItem txt1="生日" txt3={this.state.info.birth || "未设定"} />
            	<View style={styles.separator}></View>
            	<DisplayItem txt1="学历" txt3={this.state.info.education || "未设定"}  />                
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    avatar: {
    	flexDirection:'row',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 30,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
    },
    separator: {
        backgroundColor: '#ECEFF2',
        height: 10
    }
});
