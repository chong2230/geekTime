/**
 * Created by shaotingzhou on 2017/5/8.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    AsyncStorage,
    ScrollView
} from 'react-native';
var {width,height} = Dimensions.get('window');

import Colors from '../../components/Colors';

export default class SexModal extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            sex: 0
        };
    }

    choose = (sex) => {
        this.setState({
            sex : sex
        })
    }

    passMethod = () => {
        this.props.showOnclick(this.state.sex)
    }

    render() {
        return (
            <View style={styles.container}>
                {/*阴影*/}
                <TouchableWithoutFeedback onPress={()=>this.passMethod()}>
                    <View style={styles.shadowView}>
                    </View>
                </TouchableWithoutFeedback>
                {/*modal*/}
                <View style={styles.modalStyle}>
                    <View style={styles.top}>
                        <TouchableOpacity onPress={()=>this.passMethod()}>
                            <View style={styles.item}>
                                <Text style={styles.cancelStyle}>取消</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.passMethod()}>
                            <View style={styles.item}>
                                <Text style={styles.okStyle}>确定</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>this.choose(1)}>
                        <View style={[styles.item, this.state.sex == 1 ? styles.choosed : {}]}>
                            <Text style={[styles.textStyle, this.state.sex == 1 ? styles.textChoosed : {}]}>男</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.separator}></View>
                    <TouchableOpacity onPress={()=>this.choose(2)}>
                        <View style={[styles.item, this.state.sex == 2 ? styles.choosed : {}]}>
                            <Text style={[styles.textStyle, this.state.sex == 2 ? styles.textChoosed : {}]}>女</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    shadowView:{
        backgroundColor: 'black',
        opacity: 0.5,
        height: height*0.75,
        width: width,
    },
    //modal
    modalStyle:{
        backgroundColor: 'white',
        width: width,
        height: height*0.25
    },
    item: {
        backgroundColor: 'white',
        alignItems: 'center'
    },
    top: {
        flexDirection: 'row',
        justifyContent:'space-between',
        width: width,
        marginBottom: 30
    },
    cancelStyle: {
        fontSize: 20,
        margin: 10,
        color: Colors.blue
    },
    okStyle: {
        fontSize: 20,
        margin: 10,
        color: Colors.blue,
        fontWeight: '500'
    },    
    textStyle: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10
    },
    choosed: {
        backgroundColor: Colors.highlight,
    },
    textChoosed: {
        color: 'white'
    },
    separator: {
        backgroundColor: '#eceff2',
        height: 1
    }
});

