/**
 * Created by shanqiang on 16/5/31.
 */
'use strict';
import Common from './Common';
import { NativeModules, Alert } from 'react-native';
import { InAppUtils } from 'NativeModules';

class IAP {

    // static inst = new IAP();

    constructor() {
        this.purchases = [];
        this.products = [];
        if (Common.system == 'android') {
            return;
        }
        this.loadProducts();

        if (!inst) {
            inst = this;
        }
        return inst;
    }

    loadProducts() {
        var products = [
            'com.shanqiang.geeekvr.s001'
        ];
        InAppUtils.loadProducts(products, (error, products) => {
            this.products = products;
            console.log(products);
            this.loadedProducts();
        });
    }

    loadedProducts() {
        for (var idx in this.purchases) {
            var elem = this.purchases[idx];
            this.purchase(elem.payIndex, elem.cb);
        }
        this.purchases = [];
    }

    purchase(name, payIndex, cb) {
        if (Common.system == 'android') {
            cb('true');
            return;
        }
        if (this.products.length <= 0) {
            this.purchases.push({
                name: name,
                payIndex: payIndex,
                cb: cb
            });
            return;
        }
        var productIdentifier = this.products[payIndex].identifier;
        InAppUtils.purchaseProduct(productIdentifier, (error, response) => {
            // NOTE for v3.0: User can cancel the payment which will be availble as error object here.
            if (response && response.productIdentifier && response.transactionIdentifier) {
                //AlertIOS.alert('Purchase Successful', 'Your Transaction ID is ' + response.transactionIdentifier);
                console.log('Purchase Successful');
                //unlock store here.
                this.receiptData(name, response.transactionIdentifier, cb);
            } else {
                cb(null);
            }
        });
    }

    restorePurchases(cb) {
        if (Common.system == 'android') {
            cb('true');
            return;
        }
        InAppUtils.restorePurchases((error, response)=> {
            if (error) {
                cb(null);
            } else {
                Alert.alert('恢复成功', '成功恢复所有你的购买');
                console.log(response);
                //unlock store here again.
                if (response.length == 0) {
                    cb(0);
                    return;
                }
                Common.restorePurchases(response, cb);
            }
        });
    }

    receiptData(name, transactionIdentifier, cb) {
        InAppUtils.receiptData((error, receiptData)=> {
            if (error) {
                AlertIOS.alert('itunes Error', 'Receipt not found.');
                cb(null);
            } else {
                console.log(receiptData);
                //send to validation server
                console.log('send to server');
                Common.checkPurchase(name, transactionIdentifier, receiptData, (result) => {
                    cb(result);
                });
            }
        });
    }

}

// let inst = new IAP();
export default IAP;
