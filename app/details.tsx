import React from 'react';
import {Image, View, Text,TouchableOpacity,FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useArticles } from '../apis/NewsApi';
import NewsCard from '../components/NewsCard'
const Details = () => {
  const params = useLocalSearchParams();
  const { data } = useArticles();
  const articlesToShow = data.articles.slice(1, 3);
  return (
    <View className='my-4 py-4 px-2 mx-2 h-full'>
   
         <Text className='font-bold text-lg '>{params.title}</Text>
         <Text className='text-sm'> By {params.author}</Text>
         <Image 
          className='w-full h-40 mt-2 '
           source={params.urlToImage ? { uri: params.urlToImage } :  require('../assets/images/empty.png')}
         />
         <Text className=' my-2'>{params.description}</Text>
       <View className='border my-8'></View>
         <Text className='font-bold text-lg  mb-2'>Similar News</Text>
         <FlatList data={articlesToShow}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => {
                    return   <NewsCard item={item} />
                    
                }}
            />
  </View>
  );
}
export default Details;
