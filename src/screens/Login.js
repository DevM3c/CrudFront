import react from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import LoginForm from '../components/LoginForm';

export default function Login({navigation}){
    return(
        <View>
            <LoginForm/>
        </View>
    )
}