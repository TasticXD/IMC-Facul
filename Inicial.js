import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Inicial = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <Text style={styles.subtitle}>Trabalho de Dev Mobile</Text>
      <Button title="Calculadora" onPress={() => navigation.navigate('Calculadora')} />
      <Button title="Camera" onPress={() => navigation.navigate('Camera')} />
      <Button title="Buscar Alimento" onPress={() => navigation.navigate('PesquisarAPI')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
  },
});

export default Inicial;
