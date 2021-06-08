import React from 'react';
import {View,StyleSheet,Text,Flatlist} from 'react-native';
import { WebView } from 'react-native-webview';

const News = props =>{
    console.log('itemData',props)
    return(
        <WebView source={{ uri: props.route.params.itemData  }} />
    )
}

export default News