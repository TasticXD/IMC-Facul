import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const Calculadora = () => {
  const [Altura, setAltura] = useState("");
  const [Peso, setPeso] = useState("");
  const [Genero, setGenero] = useState(false);

  const toggleSwitch = () => setGenero(previousState => !previousState);

  const handleCalcular = () => {
    const height = parseFloat(Altura) / 100;
    const weight = parseFloat(Peso);

    if (!height || !weight) {
      Alert.alert('Erro', 'Por favor, insira valores válidos para altura e peso.');
      return;
    }

    const imc = weight / (height * height);
    console.log("IMC calculado:", imc); 

    if (Genero) {
      if (imc < 20.7) {
        Alert.alert('Abaixo do peso!', `Seu IMC é de ${imc.toFixed(2)} e está abaixo do peso.`);
      } else if (imc >= 20.7 && imc < 26.4) {
        Alert.alert('Normal', `Seu IMC é de ${imc.toFixed(2)} e é considerado normal.`);
      } else if (imc >= 26.4 && imc < 27.8) {
        Alert.alert('Pouco acima do peso!', `Seu IMC é de ${imc.toFixed(2)} e está um pouco acima do peso.`);
      } else if (imc >= 27.8 && imc < 31.1) {
        Alert.alert('Acima do peso!', `Seu IMC é de ${imc.toFixed(2)} e está acima do peso.`);
      } else {
        Alert.alert('Obeso!', `Seu IMC é de ${imc.toFixed(2)} e está obeso.`);
      }
    } else {
      if (imc < 19.1) {
        Alert.alert('Abaixo do peso!', `Seu IMC é de ${imc.toFixed(2)} e está abaixo do peso.`);
      } else if (imc >= 19.1 && imc < 25.8) {
        Alert.alert('Normal', `Seu IMC é de ${imc.toFixed(2)} e é considerado normal.`);
      } else if (imc >= 25.8 && imc < 27.3) {
        Alert.alert('Pouco acima do peso!', `Seu IMC é de ${imc.toFixed(2)} e está um pouco acima do peso.`);
      } else if (imc >= 27.3 && imc < 32.3) {
        Alert.alert('Acima do peso!', `Seu IMC é de ${imc.toFixed(2)} e está acima do peso.`);
      } else {
        Alert.alert('Obeso!', `Seu IMC é de ${imc.toFixed(2)} e está obeso.`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroupRow}>
        <Text>Feminino</Text>
        <Switch
          trackColor={{ false: '#FFC0CB', true: '#81b0ff' }}
          thumbColor={Genero ? '#81b0ff' : '#FFC0CB'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={Genero}
        />
        <Text>Masculino</Text>
      </View>
      <Text>Altura</Text>
      <TextInput
        keyboardType='number-pad'
        style={styles.input}
        value={Altura}
        onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}
      />
      <Text>Peso</Text>
      <TextInput
        keyboardType='number-pad'
        style={styles.input}
        value={Peso}
        onChangeText={(text) => setPeso(text.replace(/\D/g, ""))}
      />
      <TouchableOpacity onPress={handleCalcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32f527',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputGroupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 54,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#000',
  },
  button: {
    backgroundColor: '#2AD131',
    width: '80%',
    height: 54,
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    fontFamily: 'Poppins_600SemiBold',
    color: 'black',
    fontSize: 15,
    marginTop: 40,
  },
});

export default Calculadora;
