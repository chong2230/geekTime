/**
 * 个人信息
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Platform,
    NativeModules,
    AsyncStorage,
    Modal
} from 'react-native';

// import Picker from 'react-native-picker';
import Colors from '../../components/Colors';
import DisplayItem from '../../components/DisplayItem';
import Common from '../../utils/Common';
import Toast from '../../utils/Toast';
import { trim } from '../../utils/Util';
import SexModal from './SexModal';
import EducationModal from './EducationModal';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            info: {},
            uname: '',
            email: '',
            show: false,
            showSex: false,
            showEducation: false         
        });
    }
    componentWillMount() {
        const {state} = this.props.navigation;
        let info = JSON.parse(state.params.info);
        this.setState({
            info : info
        });
    }

    _updateNickname = () => {
        if (trim(this.state.uname) == '') return;
        let user = {};
        user.nickName = this.state.uname;
        this._updateUser(user);
    }

    _updateEmail = () => {
        if (trim(this.state.email) == '') return;
        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(this.state.email)) {
            this.refs.toast.show('电子邮箱格式错误');
            return;
        }
        let user = {};
        user.email = this.state.email;
        this._updateUser(user);
        
    }

    _updateUser = (user, cb) => {
        Common.updateUser(user, (result) => {
            if (result.code == 0) {
                let info = Object.assign({}, this.state.info, user);
                this.setState({
                    info: info
                });   
                const { state } = this.props.navigation;
                if (state.params.refresh) state.params.refresh(info);                             
                this.refs.toast.show("修改成功");
            } else {
                this.refs.toast.show(result.msg);                
            }
            if (cb) cb();
        });
    }

    _showSexModal = () => {
        this.setState({
            show: !this.state.show,
            showSex: !this.state.showSex
        })
    }

    _updateSex = (sex) => {
        this._showSexModal();
        if (sex == 0) return;
        let user = {};
        user.sex = sex;
        this._updateUser(user);        
    }

    _showBirthModal = () => {
        let data = [];
        for(var i=0;i<100;i++){
            data.push(i);
        }

        // Picker.init({
        //     pickerData: data,
        //     selectedValue: [59],
        //     onPickerConfirm: data => {
        //         console.log(data);
        //     },
        //     onPickerCancel: data => {
        //         console.log(data);
        //     },
        //     onPickerSelect: data => {
        //         console.log(data);
        //     }
        // });
        // Picker.show();
    }

    _showEducationModal = () => {
        this.setState({
            show: !this.state.show,
            showEducation: !this.state.showEducation
        })
    }

    _updateEducation = (education) => {
        this._showEducationModal();
        if (education == 0) return;
        let user = {};
        user.education = education;
        this._updateUser(user);        
    }

    modalShow = () => {
        this.setState({
            show:!this.state.show
        })
    }

    _getSex() {
        let str = '';
        let sex = this.state.info.sex;
        if (sex == 1) str = '男';
        else if (sex == 2) str = '女';
        else str = '未设定';
        return str;
    }

    _getEducation() {
        let str = '';
        let education = this.state.info.education;
        switch(education) {
            case 1:
                str = '高中及以下';
                break;
            case 2:
                str = '专科';
                break;
            case 3:
                str = '本科';
                break;
            case 4:
                str = '硕士';
                break;
            case 5:
                str = '博士及以上';
                break; 
            default:
                str = '未设定';
        }
        return str;
    }

    render() {  
        let sex = this._getSex();
        let education = this._getEducation();
        return (
            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Text>头像</Text>
                </View>
                <View style={styles.separator}></View>
                <DisplayItem txt1="昵称" />
                <TextInput placeholder={this.state.info.nickName} placeholderTextColor={Colors.gray} style={[styles.inputStyle, styles.nameInputStyle]} onChangeText={(text)=>this.setState({uname: text})} onBlur={this._updateNickname} />
                <DisplayItem txt1="性别" txt3={sex} onPress={this._showSexModal} />
                <DisplayItem txt1="生日" txt3={this.state.info.birth || "未设定"} onPress={this._showBirthModal} />
                <DisplayItem txt1="电子邮箱" />
                <TextInput ref="emailInput" placeholder={this.state.info.email || "未设定"} placeholderTextColor={Colors.gray} style={[styles.inputStyle, styles.emailInputStyle]} onChangeText={(text)=>this.setState({email: text})} onBlur={this._updateEmail} />
                <View style={styles.separator}></View>
                <DisplayItem txt1="学历" txt3={education}  onPress={this._showEducationModal}  /> 
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.show}
                >
                    { this.state.showSex ? <SexModal showOnclick = {(sex)=>this._updateSex(sex)} /> : null }
                    { this.state.showEducation ? <EducationModal showOnclick = {(education)=>this._updateEducation(education)} /> : null }
                </Modal>   
                <Toast ref="toast" position="center" />            
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    avatar: {
        flexDirection:'row',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 30,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
    },
    separator: {
        backgroundColor: '#eceff2',
        height: 10
    },
    inputStyle: {        
        right: 35,
        width: 200,
        height: 50,
        fontSize: 13,
        textAlign: 'right',
        color: Colors.gray,
        position: 'absolute'
    },
    nameInputStyle: {
        top: 102
    },
    emailInputStyle: {
        top: 235
    }
});
