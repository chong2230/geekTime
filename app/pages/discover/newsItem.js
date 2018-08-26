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

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../components/Colors';

export default class NewsItem extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            
        };
    }

    _onItemClick() {
        this.props.onPress(this.props.index, this.props.item.id, this.props.item.audio_url);
    }

    render() {
        let textStyle = {}
        let playIcon;
        if (this.props.selectedNews == this.props.item.id) {
            textStyle = { color: Colors.highlight };
            iconStyle = { opacity: 1 };
            playIcon = <Icon name="pause-circle-o" color={Colors.highlight} style={[styles.icon, iconStyle]} />;
        } else {
            playIcon = <Icon name="play-circle-o" color={Colors.gray} style={styles.icon} />;
        }
        return (
            <TouchableWithoutFeedback onPress={()=>{this._onItemClick()}}>
                <View style={styles.item}>
                    {playIcon}
                    <Text style={[styles.text, textStyle]}>{this.props.item.title}</Text>
                    }
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
        width: 20,
        height: 20,
        marginLeft: 10,
        marginTop: 1,
        opacity: .6
    },
    text: {

    }
});

