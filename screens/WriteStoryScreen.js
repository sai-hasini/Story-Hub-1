import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
               
               <Header
                 backgroundColor={'#ffc0cb'}
                 centerComponent={{
                  text: 'Story Hub',
                  style: { color: 'black', fontSize: 18, fontFamily: 'ArialRoundedMTBold' },
                 }}
               />

               <TextInput style={styles.inputBox} placeholder={'Story Title'} />
               <TextInput style={styles.inputBox}  placeholder={'Author'} />
               <TextInput style={styles.inputBox2}  placeholder={'Write your story'}/>

               <TouchableOpacity style={styles.submitButton}>
                 <Text style={styles.buttonText}> Submit </Text>
               </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    inputBox2: {
        width: 200,
        height: 200,
        borderWidth: 1.5,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    submitButton:{
        backgroundColor: '#ffc0cb',
        padding: 10,
        margin: 10,
        borderRadius: 15,
    },
    buttonText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
})










