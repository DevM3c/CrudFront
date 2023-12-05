import react from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';


import RegisterForm from '../components/RegisterForm'

export default function Register({navigation}){
    return(
        <View style={styles.conteinerSobre}>
                <View syle={styles.styleButtonConteiner}>
                    <Button 
                        style={styles.styleButtonSobre}
                        buttonColor='#228B22'
                        mode = "contained" 
                        onPress={() => navigation.navigate('About')}>
                        <Text style={styles.textButtonAbout} >Sobre</Text>
                    </Button>
                </View>
                <View style={styles.bemVindoConteiner}>
                    <Text style={styles.textBemVindo}>Bem vindo(a)</Text>
                </View>
                    <View style={styles.styleForm}>
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
        marginTop: 20,
        backgroundColor:'#DCDCDC'
        

    },

    styleButtonSobre:{
        width: 110,
        borderRadius: 10,
    },
    styleButtonConteiner:{
        marginLeft:30
    },
    styleForm:{
        flex:1,
        justifyContent:'center'
    },
    

    textButtonAbout: {
        fontSize:20
    },
    textBemVindo:{
        fontSize: 40,
        alignItems: 'center'
    },
    bemVindoConteiner:{
        alignItems: 'center',
        paddingTop: 50
    }
})