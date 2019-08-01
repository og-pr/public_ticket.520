// shared = common styles for iOS + android 
//import { StyleSheet } from 'react-native';
import React, { StyleSheet } from 'react-native'

// convert css to css-in-js via tool = https://transform.now.sh/css-to-js/
// ref = https://freecontent.manning.com/applying-and-organizing-styles-in-react-native/
const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        marginLeft: 20,
        marginTop: 20
    },
    title: {
        borderStyle: 'solid',
        borderWidth: 1,
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    buttonContainer: {
        borderStyle: 'solid',
        borderWidth: 1,
        flexDirection: 'row',
    },
    buttonAndroid: {
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#80CBC4', 
        width: 100,
        padding: 10,
        margin: 5,
    },
    buttonIos: {
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#80cbc4', 
        width: 100,
        padding: 10,
        margin: 5,
    },
    buttonText: {
        backgroundColor: '#80cbc4', 
        color: '#000000'
    }
});

export default styles;