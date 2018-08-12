/**
 * 关于我们
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';

import SettingItem from './settingItem';
import Common from '../../utils/Common';
import Storage from '../../utils/Storage';

export default class About extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            token: null,
            info: {}
        };
    }

    _contact = () => {
        const { navigate } = this.props.navigation;
        navigate('Contact', {isVisiable: true, title: '联系我们'});
    }

    _service = () => {
        const { navigate } = this.props.navigation;
        navigate('Service', {isVisiable: true, title: ''});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Image source={require('../../images/logo.png')} style={styles.logo} />
                    <Text style={styles.topTitle}>极客时间-提升你的技术认知</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.versionLabel}>版本信息</Text>
                    <Text style={styles.versionValue}>1.16</Text>
                </View>
                <SettingItem txt1 = '联系我们' onPress={this._contact}/>
                <SettingItem txt1 = '服务条款' onPress={this._service}/>
                <View style={{flex: 1}}></View>
                <View style={styles.bottom}>
                    <Text style={styles.bottomLabel}>极客邦控股（北京）有限公司</Text>
                    <Text style={styles.bottomLabel}>@2018 Geekbang Holdings Beijing Co.,Ltd.</Text>
                </View>
            </View>
        );
    }    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    top: {
        height: 150,
        backgroundColor: '#f5f5f5'
    },
    topTitle: {
        color: '#828282',
        textAlign: 'center',
        top: 100
    },
    logo: {
        width: 50,
        height: 50,
        position: 'absolute',
        marginTop: 30,
        borderRadius: 25,
        alignSelf: 'center'
    },
    item: {
        flexDirection:'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        backgroundColor: 'white'
    },
    versionLabel: {
        flex: 1,
        marginLeft: 10
    },
    versionValue: {
        color: '#828282',
        right: 20
    }, 
    bottom: {
        bottom: 30
    },
    bottomLabel: {
        color: '#828282',
        fontSize: 12,
        textAlign: 'center'
    }
});
