import react from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';


import RegisterForm from '../components/RegisterForm'

export default function Register({navigation}){
    return(
        <View style={styles.conteinerSobre}>
                <View>
                    <Button 
                        style={styles.styleButtonSobre}
                        buttonColor='#191919'
                        mode = "contained" 
                        onPress={() => navigation.navigate('About')}>
                        <Text style={styles.textButtonAbout} >Sobre</Text>
                    </Button>
                </View>
                    <View>
                        <RegisterForm/>
                    </View>
                
        </View>

    );
}

const styles = StyleSheet.create({
    conteinerCad:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30

    },
    conteinerSobre:{
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 20

    },

    styleButtonSobre:{
        width: 110,
        borderRadius: 10,

    },
    styleButtonCad:{
        width: 200,
        borderRadius: 10, 
    },

    textButtonAbout: {
        fontSize:20

    }
})