import react from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

export default function Register({navigation}){
    return(
        <View>
                <View>
                    <Button buttonColor='#191919'
                        mode = "contained" 
                        onPress={() => navigation.navigate('About')}>
                        <Text style={styles.textButtonAbout} >Sobre</Text>
                    </Button>
                </View>

                <View>
                    <Button 
                            buttonColor='#191919' 
                            mode='conteined'
                            onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.textButtonAbout}>Cadastrar</Text>    
                    </Button>
                </View>
        </View>

    );
}

const styles = StyleSheet.create({
    textButtonAbout: {
        fontSize:20

    }
})