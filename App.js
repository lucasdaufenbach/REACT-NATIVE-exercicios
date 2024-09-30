import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 11));

  const handleGuess = () => {
    const guessedNumber = parseInt(inputValue, 10);

    if (isNaN(guessedNumber)) {
      Alert.alert('Erro', 'Por favor, insira um número válido!');
      return;
    }

    if (guessedNumber === randomNumber) {
      Alert.alert('Parabéns!', 'Você acertou o número!');
      setRandomNumber(Math.floor(Math.random() * 11)); 
    } else {
      Alert.alert('Tente novamente', 'Você errou. Tente outro número.');
    }

    setInputValue(''); // Limpa o campo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Adivinhe o número (0 a 10):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Tentar" onPress={handleGuess} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    textAlign: 'center',
  },
});
