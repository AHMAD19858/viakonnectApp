import React from 'react'
import {TouchableOpacity, Text, Image } from 'react-native'
import { router } from 'expo-router';

const NewsCard = ({item }) => {
    return (
        <TouchableOpacity onPress={()=>router.push({ pathname: `/details`, params: item })} className='my-4 py-4 px-4 mx-4 block rounded-lg bg-white'>
         
        <Text className='font-bold text-lg w-full'>{item.title}</Text>
        <Text className='text-sm'> By {item.author}</Text>
        <Image 
         resizeMode={'contain'}
         className='w-full h-40 mt-2 '
          source={item.urlToImage ? { uri: item.urlToImage } :  require('../assets/images/empty.png')}
        />
        <Text className=' my-2'>{item.description}</Text>
      
    </TouchableOpacity>
          
    )
}
export default NewsCard