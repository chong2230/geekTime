import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Platform,
    ActivityIndicator,
    Image,
    View,
    Text,
    ToastAndroid
} from 'react-native'

var ImagePicker = require('react-native-image-picker');
import Icon from 'react-native-vector-icons/Ionicons';

const options = {
    title: '选择图片', 
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '图片库', 
    cameraType: 'back',
    mediaType: 'photo',
    videoQuality: 'high', 
    durationLimit: 10,
    maxWidth: 600,
    maxHeight: 600,
    aspectX: 2, 
    aspectY: 1,
    quality: 0.8,
    angle: 0,
    allowsEditing: false,
    noData: false,
    storageOptions: { 
        skipBackup: true, 
        path: 'images'
    }
};

class CameraButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false
        }
    }
    render() {
        const {photos,type} = this.props;
        let conText;
        if(photos.length > 0){
            conText = (<View style={styles.countBox}>
                <Text style={styles.count}>{photos.length}</Text>
            </View>);
        }
        return (
            <TouchableOpacity
                onPress={this.showImagePicker.bind(this)}
                style={[this.props.style,styles.cameraBtn]}>
                <View>                    
                    <Image source={require('../images/defaultAvatar.jpg')} style={styles.avatarIcon} />
                    {conText}
                </View>
            </TouchableOpacity>
        )
    }

    showImagePicker() {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                let source;
                if (Platform.OS === 'android') {
                    source = {uri: response.uri, isStatic: true}
                } else {
                    source = {uri: response.uri.replace('file://', ''), isStatic: true}
                }

                let file;
                if(Platform.OS === 'android'){
                    file = response.uri
                }else {
                    file = response.uri.replace('file://', '')
                }

                // this.setState({
                //     loading:true
                // });
                this.props.onFileUpload(file, response.fileName||'未命名文件.jpg')
                // .then(result=>{
                //     this.setState({
                //         loading:false
                //     })
                // })
            }
        });
    }
}
const styles = StyleSheet.create({
    avatarIcon: {
        width: 50,
        height: 50,        
        borderRadius: 25,
        alignSelf: 'center',
        right: 35
    },
    cameraBtn: {
        padding:5
    },
    count:{
        color:'#fff',
        fontSize:12
    },
    fullBtn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    countBox:{
        position:'absolute',
        right:-5,
        top:-5,
        alignItems:'center',
        backgroundColor:'#34A853',
        width:16,
        height:16,
        borderRadius:8,
        justifyContent:'center'
    }
});

export default CameraButton;