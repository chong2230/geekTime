import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
var {width,height} = Dimensions.get('window');

export default class RechargeItem extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            textStyle: {}
        };
    }

    _onItemClick() {
        // this.setState({
        //     textStyle : { color: '#ea642e' }
        // });
        this.props.onPress(this.props.data.id);
    }

    render() {
        let textStyle = {}
        if (this.props.selectId == this.props.data.id) textStyle = { color: '#ea642e' };
        let data = this.props.data;
        return (
            <TouchableWithoutFeedback onPress={()=>{this._onItemClick()}}>
                <View style={styles.item}>
                    <Text> ￠ {data.rm}</Text>
                    <Text style={[styles.text, textStyle]}> ¥ {data.money}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

const styles = StyleSheet.create({    
    item: {
        flex: 1,
        flexDirection: 'column',
        width: width/3 - 20,
        height: 60,
        margin: 10,
        borderColor: '#e0e0e0',
        borderWidth: 1,
        alignItems: 'center',  
        justifyContent: 'center'
    },
    text: {

    }
});

