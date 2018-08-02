import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    StatusBar,
    Alert,
    FlatList,
    Dimensions
} from 'react-native';

import Orientation from 'react-native-orientation';

import Common from '../../utils/Common';

const deviceW = Dimensions.get('window').width;

export default class MicroDetail extends Component<{}> {
    // 构造
    constructor(props) {
        super(props);
        this.state = {
            detail : {},
            latest : []
        };
        
    }

    componentWillMount() {
        //Orientation.lockToLandscape();
        const { params } = this.props.navigation.state;
        //var data = JSON.parse(params.data);
        Common.getDetail(params.id, params.type, (result)=>{
            this.setState({
                detail : result
            });
        });
        Common.getLatest(params.id, params.type, (result)=>{
            this.setState({
                latest : result.list
            });
        });
    }

    _header = () => {
        return (
            <Text>最近更新</Text>
        );
    }

    _footer = () => {
        return <Text style={{height:5,backgroundColor:'#ECEFF2'}}></Text>;
    }

    _separator = () => {
        return <View style={styles.separator} />;
    }

    _renderItem = () => {
        return (
            <View>
                <Icon.Button
                  name="file-audio-o"
                  color="#898989"
                  backgroundColor="white"
                  size={20}
                  top={8}
                  right={5}
                  onPress={this._fetchDetail}
                  >
                </Icon.Button>    

            </View>
        );
    }

    render() {
        let detail = this.state.detail;
        return (
            <View style={styles.container}>
                <StatusBar
                    animated={true}
                    hidden={false}
                    backgroundColor={'white'}
                    translucent={true}
                    barStyle={'dark-content'}>
                </StatusBar>    
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{detail.column_title}</Text>
                </View>
                <View style={styles.author}>
                    <View style={styles.authorAvatar}>
                        <Image resizeMode={'stretch'} source={{uri:Common.baseUrl + detail.author_header}}
                            style={styles.avatarImage}/>
                    </View>
                    <View style={styles.authorInfo}>
                       <Text style={styles.authorName}>{detail.author_name}</Text>
                       <Text style={styles.authorHonor}>{detail.author_intro}</Text> 
                    </View>
                    <Text>{detail.sub_count}购买</Text>
                </View>
                <View>
                    <Text>{detail.column_intro}</Text>
                </View>
                <FlatList 
                    style={styles.list}
                    ref={(flatList)=>this._flatList = flatList}
                    keyExtractor={(item, index) => {return item.id.toString();}}
                    ListHeaderComponent={this._header}
                    ListFooterComponent={this._footer}
                    ItemSeparatorComponent={this._separator}
                    renderItem={this._renderItem}
                    refreshing={false}
                    onEndReachedThreshold={0.1}
                    onEndReached={
                        this._onload
                    }
                    data={this.state.latest}>                                        
                </FlatList>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        backgroundColor:'white',
        width: deviceW,
        height: 55
    },
    headerTitle : {
        width: deviceW,
        height: 30,
        marginTop: 25,
        fontSize: 20,
        color: 'black',
        fontWeight: '400',
        textAlign: 'center'
    },
});