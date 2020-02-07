import React from 'react'
import { StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global_stylesheet'


export default function ReviewDetails({ navigation }) {

    return (
        <View style={globalStyles.container}> 
            <Text style={globalStyles.titleText}> ReviewDetails screen </Text>
            <Text>{ navigation.getParam('title') } </Text>
            <Text>{ navigation.getParam('body') } </Text>
            <Text>{ navigation.getParam('rating') } </Text>


        </View>
    )
}
