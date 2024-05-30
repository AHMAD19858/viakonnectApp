import React from 'react';
import {Image, View, Text,TouchableOpacity,FlatList,ScrollView } from 'react-native';
import { useLocalSearchParams,router } from 'expo-router';
import { useArticles } from '../apis/NewsApi';
import NewsCard from '../components/NewsCard'
const Details = () => {
  const params = useLocalSearchParams();
  const { data } = useArticles();
  const articlesToShow = data.articles.slice(3, 5);
  return (
    <ScrollView className='my-4 py-4 px-2 mx-2 h-full'>
   
         <Text className='font-bold text-lg '>{params.title}</Text>
         <Text className='text-sm'> By {params.author}</Text>
         <Image 
          resizeMode={'contain'}
          className='w-full h-40 mt-2 '
           source={params.urlToImage ? { uri: params.urlToImage } :  require('../assets/images/empty.png')}
         />
         <Text className=' my-2'>{params.description}</Text>
       <View className='border-[0.5px] my-8'></View>
         <Text className='font-bold text-lg  mb-2'>Similar News</Text>
         <FlatList data={articlesToShow}
         horizontal
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => {
                    return  (
                      <TouchableOpacity onPress={()=>router.push({ pathname: `/details`, params: item })} className='my-4 py-2 px-4 mx-4 block rounded-lg bg-white w-[300px] h-[300px]'>
                      <Text className='font-bold text-lg w-full '>{item.title.substring(
                            0,
                            45
                          ) + "..."}</Text>
                      <Text className='text-sm'> By {item.author}</Text>
                      <Image 
                      resizeMode={'contain'}
                       className='w-full h-40 mt-2 '
                        source={item.urlToImage ? { uri: item.urlToImage } :  require('../assets/images/empty.png')}
                      />
 
                  </TouchableOpacity>
                    )
                    
                }}
            />
  </ScrollView>
  );
}
export default Details;
