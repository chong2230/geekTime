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

import HTMLView from 'react-native-htmlview';
import Button from '../../components/Button';

// var CalendarManager = NativeModules.CalendarManager;  //导入iOS端原生

export default class Recharge extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            listData: []

        })
    }

    componentWillMount() {
        Common.getDiscoverList((result)=>{ 
            this.setState({listData: result.list});
        });
    }

    pay = () => {

    }

    render() {      
        let listView = [];
        for (let i=0; i<this.state.listData.length; i++) {
            let data = this.state.listData[i];
            let item = (
                <RechargeItem data={data} />
            );
            listView.push(item);
        }  
        let intro = "1. 充值金额仅限iOS版使用；<br>2. 充值成功后，暂不支持账户余额退款、提现或转赠他人；<br>3. 使用苹果系统充值可以参考<span>App Store充值引导</span>；<br> 4. 如在充值过程中遇到任何问题，请关注公众号，我们将为您提供解决方案，帮助您快速完成充值。";
        return (
            <ScrollView style={{marginBottom:0}}>
                <View>
                    <Text>￠ {this.props.money}</Text>
                    <Text>账户余额</Text>
                </View>
                <View>
                    <View>
                        <Text>充值</Text>
                        <Text>充值金额仅限{Platform.OS === 'ios' ? 'iOS' : 'Android'} App使用</Text>
                    </View>
                    { listView }
                </View>
                <Button text="确认支付" onPress={this.pay} 
                        style={styles.payBtn} containerStyle={styles.payContainer} />
                <View style={styles.separator}></View>
                <View>
                    <Text>充值说明</Text>
                    <HTMLView value={intro} style={styles.htmlStyle} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white'
    },
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: 'white'        
    },
    logoutBtn: {
        color: '#ea642e',
        marginTop: 5,
        marginBottom: 5,
        fontWeight: '500'
    },
    payContainer: {
        borderColor: '#ea642e',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#ea642e',
        width: deviceW - 20,
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    payBtn: {        
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
    htmlStyle: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'white'
    },
    separator: {
        backgroundColor: '#ECEFF2',
        height: 10
    }
});
