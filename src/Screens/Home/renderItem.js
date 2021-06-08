import React from 'react';
import {View,StyleSheet,Text,Flatlist, TouchableOpacity,Image} from 'react-native';
import {styles} from './styles'

const RenderItem =props =>{
    const {data} = props
    const onBoxPress=() =>{
    props.onBoxPress(data.url);
    }
    return(
        <View>
         <TouchableOpacity
             style ={styles.box} 
             onPress ={onBoxPress}>
         </TouchableOpacity>
        <Text numberOfLines={2}
        style ={styles.text}>
            {data.description}
        </Text>
        </View>
    )
}

export default RenderItem