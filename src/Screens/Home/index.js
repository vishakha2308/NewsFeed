import React,{useEffect,useState} from 'react';
import {View,StyleSheet,Text,FlatList, TouchableOpacity} from 'react-native';
import RenderItem from './renderItem';
import {styles} from './styles';
import {newsData} from '../services'

const Home =props =>{
  const [data,setData] = useState([]);
  useEffect(()=>{
      newsApiData();
      console.log('itemData',itemData)
    },[])
  const onBoxPress =(url) =>{
    props.navigation.navigate('News',{itemData:url})
  }
    
    const newsApiData =async()=>{
        const res=await newsData();
        console.log('Resssssss++++ ',res);
        if(res){
          setData(res.data.sources)
        }
      }
    return(
        <View style ={styles.container}>
        <Text style ={styles.HeaderText}>News</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item})=>{
            return(
              <RenderItem
                data={item}
                onBoxPress ={onBoxPress}
              />
            )
          }}
          keyExtractor={(item, index) => index.toString()}
          />
        </View>
    )
}

export default Home