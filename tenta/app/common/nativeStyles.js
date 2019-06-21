// shared = common styles for iOS + android 
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonAndroid: {
        backgroundColor: '#3c469c', 
        width: 100,
        padding: 10,
        margin: 5,
    },
    buttonIos: {
        backgroundColor: '#80cbc4', 
        width: 100,
        padding: 10,
        margin: 5,
    },
    buttonText: {
        color: '#FFFFFF'
    },
});

export default styles;