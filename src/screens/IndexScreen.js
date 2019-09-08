import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';



const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context)

    return(
        <>
        <Button title="add Post" onPress={addBlogPost}/>
        <FlatList 
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => {
                return(
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <Feather style={styles.icon} name='trash'/>
                    </View>
                )

            }}

        />
        </>
    )
};

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 10
    }, 
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }

});

export default IndexScreen