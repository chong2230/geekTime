/**
 * 账户和充值
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

import HTMLView from 'react-native-htmlview';
import Button from '../../components/Button';
import Colors from '../../components/Colors';
import Common from '../../utils/Common';
import IAP from '../../utils/IAP';
import RechargeItem from './rechargeItem';

export default class Recharge extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            selectId: null,
            listData: []
        })
    }

    componentWillMount() {
        Common.getRechargeList((result)=>{ 
            if (result.code == 0) {
                this.setState({listData: result.list});
            }
        });
    }

    _onPress = (id) => {        
        this.setState({
            selectId: id
        })
    }

    pay = () => {
        if (this.state.selectId == null) return;
        let payIndex = 0;
        let payObj = {};
        for (let i=0; i<this.state.listData.length; i++) {
            let d = this.state.listData[i];
            if (this.state.selectId == d.id) {
                payIndex = i;
                payObj = d;
            }
        }
        IAP.purchase(payObj.name, payIndex, (result) => {
            let tip = result == 'true' ? "购买成功" : "购买失败";
            Alert.alert(tip, "", [
                    {
                        text: '关闭', onPress: () => {
                        self.setState({showLoading: false});
                    }
                    }
                ]);
        });
    }

    render() {      
        let listView = [];
        for (let i=0; i<this.state.listData.length; i++) {
            let data = this.state.listData[i];
            let item = (
                <RechargeItem key={data.id} data={data} selectId={this.state.selectId} onPress={this._onPress} />
            );
            listView.push(item);
        }  
        let intro = "1. 充值金额仅限iOS版使用；<br>2. 充值成功后，暂不支持账户余额退款、提现或转赠他人；<br>3. 使用苹果系统充值可以参考App Store充值引导；<br> 4. 如在充值过程中遇到任何问题，请关注公众号，我们将为您提供解决方案，帮助您快速完成充值。";
        return (
            <ScrollView style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.money}>￠ {this.props.money || 0.00}</Text>
                    <Text style={styles.title}>账户余额</Text>
                </View>
                <View style={styles.center}>
                    <Text style={styles.rechargeLabel}>充值</Text>
                    <Text style={styles.rechargeTip}>充值金额仅限{Platform.OS === 'ios' ? 'iOS' : 'Android'} App使用</Text>
                </View>
                <View style={styles.listView}>
                    { listView }
                </View>
                <Button text="确认支付" onPress={this.pay} 
                        style={styles.payBtn} containerStyle={styles.payContainer} />
                <View style={styles.separator}></View>
                <View>
                    <Text style={styles.introLabel}>充值说明</Text>
                    <View style={styles.line}></View>
                    <HTMLView value={intro} style={styles.htmlStyle} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom:0, 
        backgroundColor: 'white'
    },
    top: {
        padding: 10,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
    },
    money: {
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center'
    },
    title: {
        fontSize: 15,
        color: '#828282',
        textAlign: 'center'
    },
    center: {
        flexDirection: 'row',
        margin: 15       
    },
    rechargeLabel: {
        flex: 1,
        marginLeft: 10
    },
    rechargeTip: {
        fontSize: 11,
        marginRight: 10,
        color: '#a4a4a4',
        fontSize: 12
    },
    listView: {
        justifyContent: 'space-around',  
        flexDirection: 'row',  
        flexWrap: 'wrap',
        backgroundColor: 'white'
    },
    payContainer: {
        borderColor: Colors.highlight,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: Colors.highlight,
        height: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    payBtn: {        
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    payBtnDisabled: {
        opacity: .6
    },
    introLabel: {
        margin: 10,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '500'
    },
    htmlStyle: {
        padding: 10,
    },
    separator: {
        backgroundColor: '#ECEFF2',
        height: 10
    },
    line: {
        backgroundColor: '#ECEFF2',
        height: 1
    }
});
