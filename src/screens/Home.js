import react from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';



export default function Home({ navigation }){
    return (
        <View>
            <Button buttonColor='#191970' mode = "contained" onPress={() => navigation.navigate('About')}>
                    <Text style={styles.textButtonAbout} >Sobre</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    textButtonAbout: {
        fontSize:20

    }



})



