import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import BlogContext from '../context/BlogContext';



const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext)

    return(
        <>
        <Text>Index Screen</Text>
        <Button title="add Post" onPress={addBlogPost}/>
        <FlatList 
            data={data}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => {
                return(
                    <Text>{item.title}</Text>
                )

            }}

        />
        </>
    )
};

const style = StyleSheet.create({

});

export default IndexScreen