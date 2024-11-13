import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';

const PesquisarAPI = () => {
  const [food, setFood] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const searchFood = async () => {
    if (food.trim() === '') {
      alert('Por favor, digite o nome de um alimento.');
      return;
    }

    setLoading(true);
    try {
      
      const response = await fetch(
        `https://caloriasporalimentoapi.herokuapp.com/api/calorias/?descricao=${food}`
      );
      const data = await response.json(); 
      setResults(data);
    } catch (error) {
      console.error('Erro ao buscar alimentos:', error);
      alert('Erro ao buscar dados. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

 
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.description}>Descrição: {item.descricao}</Text>
      <Text>Quantidade: {item.quantidade} {item.unidade}</Text>
      <Text>Calorias: {item.calorias} kcal</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome de um alimento (ex: Frango)"
        value={food}
        onChangeText={setFood}
      />
      <Button title="Buscar" onPress={searchFood} />

      {loading && <Text>Carregando...</Text>}

      <FlatList
        data={results}
        keyExtractor={(item) => item.descricao}
        renderItem={renderItem}
        ListEmptyComponent={!loading && <Text>Nenhum resultado encontrado.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 8,
  },
  description: {
    fontWeight: 'bold',
  },
});

export default PesquisarAPI;
