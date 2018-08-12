import React, { Component } from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Main from './main';
import Course from './app/pages/discover/course';
import News from './app/pages/discover/news';
import CourseDetail from './app/pages/discover/courseDetail';
import SubjectDetail from './app/pages/subject/subjectDetail';
// import List from './app/pages/discover/list';
// import SubjectSub from './app/pages/subject/sub';
// import SubjectList from './app/pages/subject/list';
// import SubjectDetail from './app/pages/subject/detail';
import Login from './app/pages/account/login';
import Regist from './app/pages/account/regist';
import Recharge from './app/pages/account/recharge';
import SafeAccount from './app/pages/account/safeAccount';
import Profile from './app/pages/account/profile';
import UpdatePassword from './app/pages/account/updatePassword';
import Setting from './app/pages/account/setting';
import About from './app/pages/account/about';
import Service from './app/pages/account/service';
import Contact from './app/pages/account/contact';

const StackOptions = ({navigation}) => {
    let {state,goBack} = navigation;

    // 用来判断是否隐藏或显示header
    const visible= state.params.isVisible;
    let header;
    if (visible === false){
        header = null;
    }
    const headerStyle = {backgroundColor:'white'};
    const headerTitle = state.params.title;
    const headerTitleStyle = {fontSize:20,color:'black',fontWeight:'400'};
    const headerBackTitle = false;
    const headerLeft = (
        <Button
            title=" < "
            color="black"
            isCustom={true}
            customView={
                            <Icon
                                name='ios-arrow-back'
                                size={30}
                                color='black'
                                style={{marginLeft:13}}
                            />
                       }
            onPress={()=>{goBack()}}
            />
    );
    return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,header}
};

const App = createStackNavigator({
    Main: {
        screen: Main
    },
    Course: {
        screen: Course,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    News: {
        screen: News,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    CourseDetail: {
        screen: CourseDetail,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    SubjectDetail: {
        screen: SubjectDetail,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    Login: {
        screen: Login
    }, 
    Regist: {
        screen: Regist,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },     
    Recharge: {
        screen: Recharge,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    SafeAccount: {
        screen: SafeAccount,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    Profile: {
        screen: Profile,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    Setting: {
        screen: Setting,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    About: {
        screen: About,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    Service: {
        screen: Service,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    Contact: {
        screen: Contact,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    },
    UpdatePassword: {
        screen: UpdatePassword,
        navigationOptions: ({navigation}) => StackOptions({navigation})
    }
}, {
    navigationOptions:{
        header: null,
        // headerStyle: { height: 20 }
    }
});

export default App;
