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

import Sound from 'react-native-sound';
import NewsItem from './newsItem';

let sound = null;

export default class DiscoverNews extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            textStyle: {},
            selectedNews: null
        };
    }

    _onPress = (index, id, audio) => {
        let self = this;
        if (sound) {
            sound.release();
            sound = null;
        } 
        sound = new Sound(audio, null, (e) => {
            if (e) {
                 console.log('播放失败');
                return;
            }
            sound.play(() => {
                sound.release();
                index++;    // 播放下一条
                let item = self.props.item;
                let nextId = null;
                if (index < item.contents.length) {
                    nextId = item.contents[index].id;
                    self._onPress(index, nextId, item.contents[index].audio);
                }
                this.setState({
                    selectedNews: nextId
                });
                return;
            });
        });
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
                <NewsItem key={i+1} index={i} item={item.contents[i]} selectedNews={this.state.selectedNews} onPress={this._onPress}></NewsItem>                
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

