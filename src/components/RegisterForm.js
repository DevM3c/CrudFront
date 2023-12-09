import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import useFormStore from './FormStore';


export default function RegisterForm(){
  const { formData, updateFormData, resetFormData } = useFormStore();
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Lógica para enviar os dados do formulário
    console.log('Dados enviados:', formData);
    
    // Reiniciar o formulário após o envio
    resetFormData();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={formData.nome}
        onChangeText={(text) => updateFormData('nome', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => updateFormData('email', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={formData.senha}
        onChangeText={(text) => updateFormData('senha', text)}
      />
      <View style={styles.buttonConteiner}>
          <Button 
                style={styles.styleButton}
                mode='contained'
                buttonColor='#228B22'
                onPress={handleSubmit}>
                <Text style={styles.textButtonRegi}>Cadastrar</Text>
          </Button>
          
       </View>
       <View style={styles.buttonConteiner}>
          <Button
                style={styles.styleButton2}
                mode='contained'
                buttonColor='#228B22'
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.textButtonRegi}>Fazer Login</Text>
                </Button>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom:100

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius:10
  },
  styleButton:{
      width:410,
      height:50,
      borderRadius:10,
      justifyContent:'center'
      
      
  },
  styleButton2:{
    width:410,
    height:50,
    borderRadius:10,
    justifyContent:'center'
    
    
    
},
  buttonConteiner:{
    alignItems:'column',
    paddingTop:20
    
  },
  
    textButtonRegi: {
      fontSize:20,
      
      

  }
    
  
});

