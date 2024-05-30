import React from 'react';
import {Text, View, FlatList } from 'react-native'
import NewsCard from '../components/NewsCard'
import { useArticles } from '../apis/NewsApi';

const News = () => {
    const { isLoading, error, data } = useArticles();
    if (isLoading) return (
        <View className="flex-1 items-center justify-center bg-white">
      <Text>Loading News</Text>
    </View>
    );
    if (error) console.log('An error occurred while fetching the user data ', error);
  
    return (
        <View>
            <FlatList data={data.articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => {
                    return   <NewsCard item={item} />
                    
                }}
            />
        </View>

    )
}

export default News;