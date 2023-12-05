import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import {Button} from 'react-native-paper'
import useFormStore from './FormStore';

export default function RegisterForm(){
  const { formData, updateFormData, resetFormData } = useFormStore();

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
                title="Cadastrar"
                mode='contained'
                buttonColor='#228B22'
                onPress={handleSubmit}>
                <Text style={styles.textButtonRegi}>Cadastrar</Text>
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
      width:400,
      height:50,
      borderRadius:10,
      alignItems:'center',
      
      
  },
  buttonConteiner:{
    alignItems:'center',
    paddingTop:30,
    
  },
  
    textButtonRegi: {
      fontSize:20,
      

  }
    
  
});

