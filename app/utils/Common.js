/**
 * Created by shanqiang on 16/5/31.
 */
'use strict';

import {
    NetInfo,
    Alert,
    AsyncStorage
} from 'react-native';
//var DeviceInfo = require('react-native-device-info');
import Mockdata from '../mockdata/mockdata';

export default class Common {
    static httpServer = 'http://112.124.51.74:8085';
    static hackServer = 'http://rap2api.taobao.org/app/mock/24885';
    static baseUrl = 'http://download.ent98.cn/img/geektime/';

    static isHack = true;   // 默认为false，mock数据
    static netStatus = 'unknown';
    static _netObserver = [];
    // static inst = new Common();

    constructor(props) {
        var self = this;
        NetInfo.fetch().done((reach) => {
            console.log('NetInfo init ' + reach);
            Common.netStatus = reach;
            self.handleNetChange = (reach) => {
                console.log('NetInfo: changeTo: ' + reach);
                Common.netStatus = reach;

                for(var index in Common._netObserver)
                {
                    Common._netObserver[index].onNetStateChange(reach);
                }
            };
            NetInfo.addEventListener(
                'connectionChange',
                self.handleNetChange
            );
        });

        //测试网络情况，测试代码    
        // setTimeout(() => {
        //     this.handleNetChange('cell');
        // }, 23000);
    }

    //注册player
    static subscribeNetState(func)
    {
        console.log("common.js subscribeNetState");
        if (func && Common._netObserver.indexOf(func) < 0) Common._netObserver.push(func);
    }

    static unSubscribeNetState(func)
    {
        console.log("common.js unSubscribeNetState");
        if (func) {
            Common._netObserver.splice(Common._netObserver.indexOf(func),1);
        }
    }

    static httpRequest(url, params) {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        if (params) headers['Content-Type'] = 'application/x-www-form-urlencoded';
        return fetch((Common.isHack ? Common.hackServer : Common.httpServer) + url, {
            method: params ? 'POST' : 'GET',
            mode: 'cors',
            headers: headers,
            body: Common.parseObj(params)
            //body: JSON.stringify({
            //    params: params,
            //})
        })
            .then((resp) => resp.json())
            .then((json) => {
                return Common.isHack ? Mockdata[url].data : json.data;
            })
            .catch((error) => {
                var text = "网络请求出错啦！";
                if (['none','NONE','unknown','UNKNOWN'].indexOf(Common.netStatus) >= 0) text = "没有网络了！";
                Alert.alert(text);
            });
    }

    static getBanners(cb) {
        Common.httpRequest('/discover/banner', {

        }).then((result)=>{
            cb(result);
        })
    }

    static getDiscoverList(cb) {
        Common.httpRequest('/discover/list', {

        }).then((result)=>{
            cb(result);
        })
    }

    // 专题列表
    static getSubjectList(cb) {
        Common.httpRequest('/subject/list', {
            
        }).then((result)=>{
            cb(result);
        })
    }

    // 视频课程
    static getCourseList(type, cb) {
        let url = '/course/list';
        if (type == 'microclass') url = '/microclass/list';
        Common.httpRequest(url, {
            
        }).then((result)=>{
            cb(result);
        })
    }

    // 新闻
    static getNews(cb) {
        Common.httpRequest('/news', {
            
        }).then((result)=>{
            cb(result);
        })
    }

    // 获取课程详情
    static getDetail(id, type, cb) {
        Common.httpRequest('/discover/detail', {
            id : id,
            type : type
        }).then((result)=>{
            // console.log(result);
            cb(result);
        })
    }

    // 获取最新课程列表
    static getLatest(id, type, cb) {
        Common.httpRequest('/discover/latest', {
            id : id,
            type : type
        }).then((result)=>{
            console.log(result);
            cb(result);
        })
    }

    static getRechargeList(cb) {
        Common.httpRequest('/recharge/list', {
            
        }).then((result)=>{
            console.log(result);
            cb(result);
        })
    }    

    static parseObj(obj) {
        var str = '';
        for (var key in obj) {
            str += key + '=' + obj[key] + '&';
        }
        return str.substr(0, str.length-1);
    }

}
