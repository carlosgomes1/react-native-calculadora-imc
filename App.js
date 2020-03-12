import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function submitImc() {
    const h = altura / 100;
    
    const imc = peso / ( h * h ).toFixed(2);

    if( imc < 16 ) {
       alert('BAIXO PESO MUITO GRAVE')
      } else if( imc >= 16 && imc < 17 ) {
          alert('BAIXO PESO GRAVE');
      } else if( imc >= 17 && imc < 18.5 ) {
          alert('BAIXO PESO');
      } else if( imc >= 18.5 && imc < 25 ) {
          alert('PESO NORMAL');
      } else if( imc >= 25 && imc < 30 ) {
          alert('SOBREPESO');
      } else if( imc >= 30 && imc < 35 ) {
          alert('OBESIDADE GRAU 1');
      } else if( imc >= 35 && imc < 40 ) {
          alert('OBESIDADE GRAU 2');
      } else {
          alert('OBESIDADE MÓRBIDA');
      }

  }

  return(
    <View style={ styles.container }>
      <Text style={ styles.title }> Calcule seu IMC </Text>

      <TextInput
      style={ styles.input }
      value={ peso }
      onChangeText={ (peso) => setPeso(peso) }
      placeholder="Peso (kg)"
      keyboardType="numeric"
      />

      <TextInput
      style={ styles.input }
      value={ altura }
      onChangeText={ (altura) => setAltura(altura) }
      placeholder="Altura (cm)"
      keyboardType="numeric"
      />

      <TouchableOpacity 
      style={ styles.button }
      onPress={ submitImc }>

        <Text style={ styles.buttonText }> Calcular </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 35,
    fontSize: 30,
  },
  input: {
    backgroundColor: "#C6C6C6",
    borderRadius: 10,
    margin: 10,
    padding: 20,
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#7AC3F3',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  }
});