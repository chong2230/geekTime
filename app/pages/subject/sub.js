/**
 * Created by cluo on 2017/12/20.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    ListView,
    StatusBar,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

import Common from '../../utils/Common';

const deviceW = Dimensions.get('window').width;

export default class SubjectSub extends Component<{}> {

    // 构造
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // 初始状态
        this.state = {
            listData: ds
        };
    }

    componentWillMount() {
        const { params } = this.props.navigation.state;
        Common.getSubjectList(params.id, (result)=>{
            if (result.code == 0) {
                console.log("result: %j", result);
                var ds = this.state.listData.cloneWithRows(result);
                this.setState({listData: ds});
            }
        })
    }

    _renderRow(rowData) {
        return (
            <View style={styles.row}>
                <TouchableWithoutFeedback activeOpacity={0.8} style={{flex:1,alignItems:'center'}}
                                          onPress={()=>{this._onItemClick(rowData)}}>
                    <View style={styles.center}>
                        <Image source={{uri : Common.baseUrl + rowData.icon}} style={styles.img} />
                        <View style={[styles.center, styles.mask]}></View>
                        <View style={styles.titleContainer}>
                            <Text style={[styles.title]}>{rowData.name}</Text>
                            <Text style={[styles.description]}>{rowData.description}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    _onItemClick(data) {
        const { navigate } = this.props.navigation;
        navigate("SubjectList", { data: JSON.stringify(data), title: data.name });
    }

    render() {
        return (
            <ListView
                style={styles.list}
                dataSource={this.state.listData}
                renderRow={this._renderRow.bind(this)}
                renderHeader={()=>{return(
                <View>
                    <StatusBar barStyle={'light-content'} />
                </View>)}}>
            </ListView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor:'#6B6E80'
    },
    header: {
        //backgroundColor:'#6B6E80',
        backgroundColor:'#5d595d',
        width: deviceW,
        height: 25
    },
    headerTitle : {
        width: deviceW,
        height: 30,
        marginTop: 25,
        fontSize:20,
        color:'white',
        fontWeight:'500',
        textAlign: 'center'
    },
    list: {
        flex:1,
        backgroundColor:'white'
    },
    row: {
        flexDirection:'row',
        marginBottom: 3
    },
    img: {
        //flex: 1,
        //height: 210,
        //resizeMode: 'stretch',
        //marginBottom: 3
        width: deviceW,
        height:200,
        justifyContent:'center',
        alignItems:'center'
    },
    center: {
        justifyContent:'center',
        alignItems:'center'
    },
    mask: {
        width: deviceW,
        height: 200,
        backgroundColor: 'black',
        opacity: 0.5,
        position: 'absolute'
    },
    titleContainer: {
        width: deviceW,
        height: 200,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 70
    },
    title: {
        fontSize:18,
        color: '#FDFCFC',
        opacity: 1,
        fontWeight: 'bold',
        alignItems:'center',
        textAlign:'center',
        backgroundColor:'transparent',
    },
    description: {
        fontSize:15,
        color: '#FDFCFC',
        opacity: 1,
        fontWeight: 'bold',
        alignItems:'center',
        textAlign:'center',
        backgroundColor:'transparent',
        marginTop: 20
    }
});
