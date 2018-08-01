import React, { Component } from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Main from './main';
import Course from './app/pages/discover/course';
import News from './app/pages/discover/news';
// import List from './app/pages/discover/list';
// import Detail from './app/pages/discover/detail';
// import SubjectSub from './app/pages/subject/sub';
// import SubjectList from './app/pages/subject/list';
// import SubjectDetail from './app/pages/subject/detail';
import Login from './app/pages/account/login';
import Setting from './app/pages/account/setting';


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
    // List: {
    //     screen: List,
    //     navigationOptions: ({navigation}) => StackOptions({navigation})
    // },
    // Detail: {
    //     screen: Detail,
    //     navigationOptions: ({navigation}) => StackOptions({navigation})
    // },
    // SubjectSub: {
    //     screen: SubjectSub,
    //     navigationOptions: ({navigation}) => StackOptions({navigation})
    // },
    // SubjectList: {
    //     screen: SubjectList,
    //     navigationOptions: ({navigation}) => StackOptions({navigation})
    // },
    // SubjectDetail: {
    //     screen: SubjectDetail,
    //     navigationOptions: ({navigation}) => StackOptions({navigation})
    // },
    // Play: {
    //     screen: Play,
    // },
    Login: {
        screen: Login
    },
    Setting: {
        screen: Setting
    }
}, {
    navigationOptions:{
        header: null,
        // headerStyle: { height: 20 }
    }
});

export default App;
