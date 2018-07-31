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

export default class NewsItem extends Component {

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
        this.props.onPress(this.props.item.id);
    }

    render() {
        let textStyle = {}
        if (this.props.selectedNews == this.props.item.id) textStyle = { color: '#ea642e' };
        return (
            <TouchableWithoutFeedback onPress={()=>{this._onItemClick()}}>
                <View style={styles.item}>
                    <Image source={require('../../images/button-play.png')} style={styles.icon}/>
                    <Text style={[styles.text, textStyle]}>{this.props.item.description}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

const styles = StyleSheet.create({    
    item: {
        flexDirection: 'row',
        height: 20
    },
    icon: {
        width: 15,
        height: 15,
        marginLeft: 10,
        marginRight: 10,
        opacity: .6
    },
    text: {

    }
});

