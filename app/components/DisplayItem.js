import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

const propTypes = {
    onPress: PropTypes.func,
    txt1: PropTypes.string,
    txt2: PropTypes.string,
    txt3: PropTypes.string,
    showRight: PropTypes.bool
};

export default class DisplayItem extends Component {
    render() {
        let leftIcon, txt1, txt2, txt3, rightIcon;
        if (this.props.source) {
            leftIcon = <Image source={this.props.source} style={styles.leftIcon} />;
        }
        if (this.props.txt1) {
            txt1 = <Text style={styles.txt1}>{this.props.txt1}</Text>;
        }
        if (this.props.txt2) {
            txt2 = <Text style={styles.txt2}>{this.props.txt2}</Text>;
        }
        if (this.props.txt3) {
            txt3 = <Text style={styles.txt3}>{this.props.txt3}</Text>;
        }
        if (this.props.showRight) {
            rightIcon = <Image source={require('../images/account/right-arrow.png')} style={styles.rightIcon} />
        }
        let itemView = (
            <View style={styles.item}>
                {leftIcon}
                {txt1}
                {txt2}
                {txt3}
                {rightIcon}
            </View>
        );
        if (this.props.onPress) {
            return (
                <TouchableOpacity  onPress={this.props.onPress}>
                    {itemView}
                </TouchableOpacity>
            );
        } else {
            return itemView;
        }
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection:'row',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
    },
    leftIcon: {
        width: 20,
        height: 20
    },
    rightIcon: {
        width: 10,
        height: 10,
        position: 'absolute',
        right: 20
    },
    txt1: {
        width: 80,
        textAlign: 'center'
    },
    txt2: {
        fontSize: 12,
        color: '#828282',
        left: 10
    },
    txt3: {
        color: '#828282',
        position: 'absolute',
        right: 35
    }
});

