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

// import Sound from 'react-native-sound';

import NewsItem from './newsItem';

var {width,height} = Dimensions.get('window');

export default class DiscoverNews extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            textStyle: {}
        };
    }

    _onPress = (id) => {
        /*
        const s = new Sound('https://languagezenstorage.blob.core.windows.net/media0/xgcUXjHhP8.mp3',null, (e) => {
            if (e) {
                 console.log('播放失败');
                return;
            }
            s.play(() => s.release());
        });
        */
        this.setState({
            selectedNews: id
        })
    }

    render() {
        let listView = [];
        let item = this.props.item;
        for (let i=0; i<item.contents.length; i++) {
            let data = item.contents[i];
            listView.push(
                <NewsItem key={i+1} item={item.contents[i]} selectedNews={this.state.selectedNews} onPress={this._onPress}></NewsItem>                
            );
        }
        return (
            <View style={styles.newsList}>
                {listView}
            </View>
        );
    }

}

const styles = StyleSheet.create({    
    newsList: {
        paddingTop: 10,
        paddingBottom: 10
    }
});

