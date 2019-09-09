import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';



const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost} = useContext(Context)

    return(
        <>
        <FlatList 
            data={state}
            keyExtractor={(blogPost) => blogPost.title}
            renderItem={({ item }) => {
                return(
                    <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather style={styles.icon} name='trash'/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )

            }}

        />
        </>
    )
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                        <Feather 
                            name='plus' 
                            size={30}
                            style={styles.add}
                        />
                    </TouchableOpacity>
    };
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
    },
    add: {
        marginRight: 10
    }

});

export default IndexScreen