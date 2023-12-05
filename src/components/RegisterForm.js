import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
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
      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

